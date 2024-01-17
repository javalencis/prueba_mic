import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import { AppProvider } from './context/AppCOntext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppProvider>

      <App />
    </AppProvider>

  </StrictMode>
)
