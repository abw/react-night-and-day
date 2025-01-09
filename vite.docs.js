import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  define,
  root: 'website',
  base: '/react-night-and-day',
  envDir: '../',
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  },
})

