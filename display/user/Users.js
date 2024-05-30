import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllUsers} from '../../features/users/usrsSlice'
import UserOne from './UserOne';
import ManagerNav from '../../navs/ManagerNav';
import './User.css';

export default function Users() {

    
    const dis = useDispatch() 
    dis(getAllUsers())
    const arrUsers =useSelector(store=>store.user.arrUsers)
    

  return (
    <div>
      <ManagerNav/>
<div className="user-container">
        {arrUsers && arrUsers.map((item) => (
              <>
                    <UserOne user={item}></UserOne>
              </>
            ))} 
        </div>
    </div>
  )
}
