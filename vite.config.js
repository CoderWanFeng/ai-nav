import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-nav/',
  build: {
    // 默认资源带 hash，配合静态部署实现永久缓存
    cssCodeSplit: true,
    sourcemap: false,
    // 拆包：react / router 单独成包，便于长期缓存
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router'
          if (id.includes('react') || id.includes('scheduler')) return 'react-vendor'
        },
        // 资源分目录，便于 CDN 缓存
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(png|jpe?g|gif|webp|avif|svg)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    // 压缩
    minify: 'esbuild',
    target: 'es2020',
  },
  // 开发期构建提速
  esbuild: {
    legalComments: 'none',
  },
})
