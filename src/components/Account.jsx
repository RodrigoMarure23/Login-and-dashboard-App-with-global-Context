import jwtDecode from 'jwt-decode'
import React from 'react'

const Account = () => {
  const token = window.localStorage.token || ''
  const user = jwtDecode(token)
  console.log(user)
  return user && (
    <>
      <p>Account</p>
      <div className='card' style={{ width: '18rem', alignContent: 'center' }}>
        <img src={user.image} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{user.username}</h5>
          <p className='card-text'>{user.email}</p>
          <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam, vitae mollitia nihil dolorem dignissimos voluptatibus ipsum debitis corrupti est officia quam nesciunt, maiores laudantium alias dicta sunt velit qui.</p>
          <a href='#' className='btn btn-primary'>Go somewhereee</a>
        </div>
      </div>

    </>
  )
}

export default Account
