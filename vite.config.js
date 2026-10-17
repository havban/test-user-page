import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// PWA settings mirror the @vue/cli-plugin-pwa defaults the app used before.
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // registration is done manually in src/registerServiceWorker.js
      injectRegister: false,
      registerType: 'autoUpdate',
      filename: 'service-worker.js',
      manifestFilename: 'manifest.json',
      includeAssets: ['favicon.ico', 'robots.txt', 'img/icons/*'],
      manifest: {
        name: 'test1',
        short_name: 'test1',
        theme_color: '#4DBA87',
        background_color: '#000000',
        display: 'standalone',
        start_url: '.',
        icons: [
          { src: './img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: './img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: './img/icons/android-chrome-maskable-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: './img/icons/android-chrome-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.js']
  }
})
