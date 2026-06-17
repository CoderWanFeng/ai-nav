import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// 次要页面走路由级代码分包，首屏不下载
const About = lazy(() => import('./pages/About.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))

const PageFallback = () => (
  <div style={{ padding: '80px 20px', textAlign: 'center', color: '#666' }}>加载中...</div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ai-nav">
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

// 注册 Service Worker（仅在生产环境 + HTTPS 下生效）
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ai-nav/sw.js').catch((err) => {
      console.warn('SW 注册失败：', err)
    })
  })
}
