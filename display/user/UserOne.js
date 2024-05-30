import React from 'react'
import './User.css';

export default function UserOne({user}) {
  
  return (
    <div>
        <div className="user">
        <h1 className="user-name" >{user.name}</h1>
        <p>תז{user.id}</p>
        <p>סיסמא {user.password}</p> 
       
        </div>
    </div>
  )
}
//"name":"","password":"","id":29