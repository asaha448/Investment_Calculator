import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Investment_Calculator/",
  plugins: [react()],
})
