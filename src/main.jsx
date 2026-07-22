import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react/src/index.css
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)