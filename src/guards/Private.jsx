import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import Login from '../pages/Login'
const Private = ({ children }) => {
  const { authed, init } = useAuthContext()
  const { pathname } = useLocation()
  const [location, setLocation] = useState(null)

  if (!init) return <p>...Loading...</p>
  if (!authed) {
    if (pathname !== location) setLocation(pathname)
    return <Login /> // retorna el componente login
    // return <Navigate to='/login' /> esta redirige a la ruta /login
  }
  if (location && pathname !== location) { // mantiene la ruta pero cambia el componente
    setLocation(null)
    return <Navigate to={location} />
  }
  // console.log(location)
  return (
    <>
      {children}
    </>
  )
}
export default Private
// para todas las rutas privadas
