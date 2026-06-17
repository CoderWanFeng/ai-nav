/* 白开水AI导航 - Service Worker */
/* 策略：构建产物（带 hash）走 cache-first，命中后立即返回；
        页面 HTML 走 network-first，失败时回退到缓存；
        第三方请求（cdn）走 stale-while-revalidate */

// 与 vite.config.js 的 `base` 保持一致；修改时务必同步
const BASE = '/ai-nav/'

const CACHE_VERSION = 'v1'
const STATIC_CACHE = `static-${CACHE_VERSION}`
const HTML_CACHE = `html-${CACHE_VERSION}`
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`

// 预缓存：部署在子路径下，URL 必须带 base 前缀
const PRECACHE_URLS = [BASE, `${BASE}about`, `${BASE}faq`]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(HTML_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => ![STATIC_CACHE, HTML_CACHE, RUNTIME_CACHE].includes(k))
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

function isHashedAsset(url) {
  return /\/assets\/.+-[a-f0-9]{8,}\.(js|css|png|jpe?g|svg|webp|avif)$/.test(url.pathname)
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // 同源：hashed 静态资源 → cache-first
  if (url.origin === self.location.origin && isHashedAsset(url)) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((res) => {
        const copy = res.clone()
        caches.open(STATIC_CACHE).then((c) => c.put(request, copy))
        return res
      })),
    )
    return
  }

  // 同源：HTML 导航 → network-first，回退到缓存
  if (url.origin === self.location.origin && request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(HTML_CACHE).then((c) => c.put(request, copy))
          return res
        })
        // 回退时也必须走带 base 的路径，否则匹配不到任何缓存
        .catch(() => caches.match(request).then((r) => r || caches.match(BASE))),
    )
    return
  }

  // 跨域（Google Fonts / Analytics / AdSense）→ stale-while-revalidate
  if (url.origin !== self.location.origin) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const network = fetch(request)
            .then((res) => {
              if (res && res.status === 200) cache.put(request, res.clone())
              return res
            })
            .catch(() => cached)
          return cached || network
        }),
      ),
    )
  }
})
