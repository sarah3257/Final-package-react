import React from 'react'
import ProductOne from '../product/ProductOne'
import './Order.css';
export default function OrderOne({order}) {
  return (
    <div  className="order">
    <h1 className="order-name" >{order.orderDate}</h1>

     <p>{order.id}--code</p>
     <p>{order.orderDate}--date order</p>
     <p>{order.userId}--userId</p>
     
     {/* {order.cart && order.cart.map((item) => (  <ProductOne product={item}></ProductOne> ))}  */}

    </div>
  )
}
//{"id":"12","orderDate":"2024-05-29","dueDate":"2024-06-05","userId":14,
//"cart":[{"p":{"id":2,"name":"מברשות","description":" מברשות נעימות לפנים","imgUrl":"https://mornoam.co.il/wp-content/uploads/2022/04/%D7%90%D7%99%D7%A4%D7%95%D7%A8.jpg","price":360,"company":"MAC","quantity":3},","imgUrl":"https://mornoam.co.il/wp-content/uploads/2022/04/%D7%90%D7%99%D7%A4%D7%95%D7%A8.jpg","price":360,"company":"MAC","quantity":3},"quantity":1}]}]