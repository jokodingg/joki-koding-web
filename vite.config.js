import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// /website-portfolio dan /website-portfolio/design (tanpa garis miring) diarahkan ke halamannya di dev & preview, sama seperti rewrite di vercel.json
const websitePortfolioNoSlash = () => {
  const rewrite = (req, _res, next) => {
    const match = req.url.match(/^\/website-portfolio(\/design)?(\?.*)?$/)
    if (match) req.url = `/website-portfolio${match[1] || ''}/${match[2] || ''}`
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
        websitePortfolioDesign: resolve(__dirname, 'website-portfolio/design/index.html'),
      },
    },
  },
  server: {
    allowedHosts: ['localhost', '.ngrok.io', '.ngrok-free.app', 'limberly-supercandid-caprice.ngrok-free.dev']
  }
})