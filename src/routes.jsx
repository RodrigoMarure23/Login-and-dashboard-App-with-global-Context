import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Private from './guards/Private'
import Public from './guards/Public'
// pages
import App from './pages/App'
import Login from './pages/Login'
// components
import Account from './components/Account'
import Settings from './components/Settings'

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<Public> <Login /> </Public>} index />
        <Route path='/app' element={<Private> <App /> </Private>}>
          {/* <Route index element={<p>Main App</p>} esto tambien es valido haciendo la ruta app como index */}
          <Route path='main' element={<p>Main App</p>} />
          <Route path='settings' element={<Settings />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Paths
