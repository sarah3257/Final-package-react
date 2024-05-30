import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import './Products.css';
import ProductOne from './ProductOne';
import  { useEffect } from 'react';
import { getAllProducts } from '../../features/products/productsSlice';
import GuestNav from '../../navs/GuestNav';
import Button from '@mui/material/Button';
import {useNavigate}from 'react-router-dom';


export default function Basket() {

    const arrCard=useSelector(s=>s.order.cart);
   const [sum, setSum] = useState(0);
    const dis=useDispatch();
    let nav=useNavigate();

    useEffect(() => {
        const fetchAllProducts = async () => {
            await dis(getAllProducts())
        }
      
        fetchAllProducts()       
    }, [arrCard]);
const sumCard=()=>{
  let total = 0;
  arrCard.forEach(element => {
    total+=(element.p.price*element.quantity);
  });
  setSum(total);
}
  return (
    <><GuestNav></GuestNav>
         
   <h1 style={{ color: 'rgb(156, 2, 33)', textAlign: 'center' }}>סל הקניות שלי</h1>  
   <div className="button-container"><Button  onClick={sumCard} variant="contained" sx={{ backgroundColor: 'darksalmon ', '&:hover': { backgroundColor:' rgb(156, 2, 33)',  }, }} > Price calculator</Button>  <p> {sum}מחיר </p>
   <Button    onClick={()=>{nav('/AddOrde')}}   variant="contained" sx={{ backgroundColor: 'red ', '&:hover': { backgroundColor:' rgb(156, 2, 33)',  }, }}>ORDER NOW</Button> </div> 

    
      <div className="products-container">
        {arrCard.map((item) => (<>
              <div className="product">
                   <ProductOne product={item.p}></ProductOne> 
                   <p>כמות:{item.quantity}</p> 
            {/* {sum=sum+item.p.price*item.p.quantity} */}
             {/* <ProductOne product={item}></ProductOne> */}
             </div>
            
             </>
           ))}
           
           
   </div>
  
   </>
  )
}
