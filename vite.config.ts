import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import swc from 'unplugin-swc'
import { ssr } from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), swc.vite(), ssr()],
})
