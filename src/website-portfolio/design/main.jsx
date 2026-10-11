import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import TemplateGallery from './TemplateGallery'
import '../../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TemplateGallery />
    <Analytics />
  </React.StrictMode>,
)
