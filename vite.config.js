import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// /website-portfolio (tanpa garis miring) diarahkan ke halamannya di dev & preview, sama seperti rewrite di vercel.json
const websitePortfolioNoSlash = () => {
  const rewrite = (req, _res, next) => {
    if (/^\/website-portfolio(\?|$)/.test(req.url)) req.url = req.url.replace('/website-portfolio', '/website-portfolio/')
    next()
  }
  return {
    name: 'website-portfolio-no-slash',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), websitePortfolioNoSlash()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        websitePortfolio: resolve(__dirname, 'website-portfolio/index.html'),
      },
    },
  },
  server: {
    allowedHosts: ['localhost', '.ngrok.io', '.ngrok-free.app', 'limberly-supercandid-caprice.ngrok-free.dev']
  }
})