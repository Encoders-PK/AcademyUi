import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TagManager from 'react-gtm-module'
import './index.css'

const TagManagerArgs = {
  gtmId: 'GTM-TMWZ98XS'
}

TagManager.initialize(TagManagerArgs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





