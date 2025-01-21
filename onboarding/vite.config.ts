import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(),],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
