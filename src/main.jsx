import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Paths />
    </AuthProvider>
  </React.StrictMode>
)
