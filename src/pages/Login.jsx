import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import '../styles/index.css'
const Login = () => {
  const { loginAuth } = useAuthContext()

  // onChange => inputs, select, optionsList
  const [userData, setUserData] = useState({
    username: 'kminchelle',
    password: '0lelplR'
  })

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const username = e.target.username.value
      const password = e.target.password.value
      await loginAuth(username, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='form-login border border-primary' onSubmit={handleForm}>
      <div className='mb-3 text-center'>
        <h3>Search Movies</h3>
      </div>
      <div className='mb-3'>
        <input className='form-control' defaultValue={userData.username} type='text' name='username' placeholder='UserName' autoFocus autoComplete='off' />
      </div>
      <div className='mb-3'>
        <input className='form-control' defaultValue={userData.password} type='password' name='password' placeholder='Password' />
      </div>
      <div className=''>
        <button className='btn btn-primary w-100' type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Login
