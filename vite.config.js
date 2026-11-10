import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test hooks like 'test' and 'expect'
    environment: 'jsdom', // Replicates a web browser sandbox environment in Node
    setupFiles: './src/__tests__/setup.js', // Points directly to your existing setup file path
    css: {
      modules: {
        classNameStrategy: 'non-scoped' // Allows tests to easily read module class names
      }
    }
  },
})
