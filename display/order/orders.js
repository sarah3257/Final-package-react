import React, { useEffect, useState } from 'react'
import ManagerNav from '../../navs/ManagerNav';
import OrderOne from './OrderOne';
import { useDispatch, useSelector } from 'react-redux';
import {getAllOrders} from '../../features/orders/ordersSlice';
import '../user/User.css';
import './Order.css';
import { TextField } from '@mui/material';
import GuestNav from '../../navs/GuestNav';


export default function Orders() {

  const dis = useDispatch();
  useEffect(() => {
    dis(getAllOrders());
  }, [dis]);

  const allOrders = useSelector(store => store.order.arrOrders);
  const [arrOrders,setArrOrder]=useState(allOrders)
  const statusUser=useSelector(s=>s.user.status);
  const currentUser=useSelector(s=>s.user.currentUser);

  const filterByDate = (dateTarget) => {
    const filterText = dateTarget.toLowerCase();
    const filterDate = arrOrders.filter(item => {
      const orderDate = new Date(item.orderDate).toLocaleDateString('en-GB'); // או אחר כך תלוקח את הפורמט המתאים לך
      return orderDate.toLowerCase().includes(dateTarget.toLowerCase());
    });
    if (filterText.trim() === '') {
      setArrOrder(allOrders);
    }
    else{
    setArrOrder(filterDate);}
  };

  return (
    <div >
{statusUser === 'admin' ? <ManagerNav />:<GuestNav />}
    <br/>  <TextField 
        label="Filter by date" 
        variant="outlined" 
        InputLabelProps={{ shrink: true }} // מאפשר הצגת placeholder גם כשיש סוג date
        onChange={(e) => filterByDate(e.target.value)} 
      />
<div className="products-container">
      {statusUser === 'admin' &&arrOrders ? arrOrders.map((item) => (  <>
                    <OrderOne order={item}></OrderOne> </>
            )): arrOrders
            .filter(item => item.userId === currentUser.id).map((item) => (   <OrderOne order={item}></OrderOne> ))
            } 
            
    </div>
    </div>
  )
}