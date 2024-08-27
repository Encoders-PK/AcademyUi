import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TagManager from 'react-gtm-module'
import './index.css'

const TagManagerArgs = {
  gtmId: 'GTM-TMWZ98XS'
}

TagManager.initialize(TagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
