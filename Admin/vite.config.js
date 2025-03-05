import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  theme:{
    extends:{
      'primary': '#3a855f7' ,
      'secondary': '#460c76',
    }
  },
  server: {port:5174}
})
