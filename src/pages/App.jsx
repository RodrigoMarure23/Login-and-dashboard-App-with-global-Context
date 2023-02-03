import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import '../styles/App.css'
function App () {
  const { logOut } = useAuthContext()
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut()
    navigate('/login', { replace: true })
  }
  return (
    <>
      <section className='App container-fluid'>
        <div className='row'>
          <aside className='col-2 bg-dark text-light'>
            <p>Routes</p>
            <nav className='nav nav-pills flex-column'>
              <NavLink className='nav-link mb-3' to='main'>App</NavLink>
              <NavLink className='nav-link mb-3' to='settings'>Settings</NavLink>
              <NavLink className='nav-link mb-3' to='account'>Account</NavLink>
              <button onClick={handleLogOut} className='nav-link mb-3'>Exit</button>
            </nav>
          </aside>
          <aside className='col-10 bg-bg-primary'>
            <Outlet />
          </aside>
        </div>
      </section>
    </>

  )
}

export default App
