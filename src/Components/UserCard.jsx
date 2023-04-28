
import React from 'react'

export default function UserCard({login,avatar_url:avatar}) {
  return (
  <div className='card'>
    <div className='cardMain'>
        <img src={avatar} alt="" />
    </div>
    <div className="cardLogin">
        <h3>{login.toUpperCase()}</h3>

    </div>
  </div>
  )
}
