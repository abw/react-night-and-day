import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), svgr(), dts()],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib'],
    coverage: {
      reporter: ['html']
    }
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.tsx',
      name: '@abw/react-night-and-day',
      fileName: 'react-night-and-day',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
  },
})
