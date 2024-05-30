import { colors } from '@mui/material'
import { pink } from '@mui/material/colors'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useDispatch,useSelector} from 'react-redux';
import {addOrder,addToShoppingCart} from '../../features/orders/ordersSlice';
import  { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import {deleteProduct,putProduct,getAllProducts,ProductSlice}from '../../features/products/productsSlice'
import { current } from '@reduxjs/toolkit';


export default function ProductOne({product}) {
    const dis=useDispatch();
    const statusUser=useSelector(s=>s.user.status);
    const statusCard=useSelector(s=>s.order.cart);
   

    const[flag,setFlag]=useState(false);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const addProduct=()=>{
        dis(addToShoppingCart({ p: product, quantity: 1 }));
        console.log(statusCard);
     //  dis(addOrder(product)); //הוספה להזמנות
       alert("המוצר נוסף בהצלחה");
    }
    const RemoveFun=()=>{
       
    
        // dis(putProduct(newProduct.id,  newProduct));
            dis(deleteProduct(product.id));
        
    }     
      
    const updateOK = () => {
        const newProduct = {
            id: product.id,
            name: name,
            description: product.description,
            imgUrl: product.imgUrl,
            price: price,
            company: product.company,
            quantity: product.quantity
        };
        console.log(newProduct);
        dis(putProduct({ id: product.id, updatedProduct: newProduct }));
        alert("המוצר התעדכן בהצלחה");
    };

  return (
    <div className="product">
        <h1 className="product-name" >{product.name}</h1>
        <p>תאור מוצר: {product.description}</p> 
        <img alt={product.name}  src={product.imgUrl}  style={{ width: '10.5em' }} />
        <p>מחיר:{product.price}</p> 
        <p>company----{product.company}</p> 
        <p>כמות:{product.quantity}</p> 
        {statusUser === 'customer' && 
        
        <Button onClick={addProduct}
      variant="contained"
      sx={{
        backgroundColor: 'darksalmon ',
        '&:hover': {
          backgroundColor:' pink',
        },
       }}   
       startIcon={<AddShoppingCartIcon />}>
      Add to Cart</Button>} 


      {statusUser === 'admin' && 

      <Button onClick={RemoveFun}
      variant="contained"
      sx={{
        backgroundColor: 'darksalmon ',
        '&:hover': {
          backgroundColor:' pink',
        },
       }}   
       startIcon={<DeleteIcon />}>
     Remove</Button>}


     {statusUser === 'admin' && 

      <Button onClick={() => setFlag(!flag)}
      variant="contained"
      sx={{
        backgroundColor: 'darksalmon ',
        '&:hover': {
          backgroundColor:' pink',
        },
       }}   
       startIcon={<BrowserUpdatedIcon />}>
     update</Button>}


   {
   flag&& <div>
    <input value={name}
    onChange={(e) => setName(e.target.value)} 
    type="text" ></input>
     <input value={price}
    onChange={(e) => setPrice(e.target.value)} 
    type="number"style={{ width: '50px' }}  ></input>
   
   </div>
   }{flag&&<button onClick={updateOK}>OK</button>}
     </div> 

    
  )
}
// "id": 5,
// "name": "פלטה",
// "description": " עמיד",
// "imgUrl": "https://adahlazorgan.co.il/cdn/shop/products/shimerpallete.jpg?v=1704177980&width=713",
// "price": 200,
// "company": "עדה לורגן"

// const currentUser={ 
//     "name": data.get('lastName'),
//     "password":  data.get('password'),
//     };

//     dis(addCurrentUser(currentUser));

 
//[{"id":1,"name":" סומק מינרלי","description":" ורוד","imgUrl":"https://gayacosmetics.co.il/wp-content/uploads/2021/03/Mineral_Blush_BF1_pic1.webp","price":195,"company":"MAC","quantity":50},{"id":2,"name":"מברשות","description":" מברשות נעימות לפנים","imgUrl":"https://mornoam.co.il/wp-content/uploads/2022/04/%D7%90%D7%99%D7%A4%D7%95%D7%A8.jpg","price":360,"company":"MAC","quantity":3},{"id":3,"name":"אודם","description":" ורוד","imgUrl":"https://mornoam.co.il/wp-content/uploads/2022/04/Depositphotos_325563062_xl-2015.jpg","price":85,"company":"MAC","quantity":10},{"id":4,"name":"סומק","description":" ורוד","imgUrl":"https://mornoam.co.il/wp-content/uploads/2022/04/Depositphotos_352651586_xl-2015.jpg","price":195,"company":"MAC","quantity":5},{"id":5,"name":"פלטה","description":" עמיד","imgUrl":"https://adahlazorgan.co.il/cdn/shop/products/shimerpallete.jpg?v=1704177980&width=713","price":200,"company":"עדה לורגן","quantity":2},{"id":6,"name":"שפתונים","imgUrl":"https://max-cover.com/wp-content/uploads/2021/10/IMG-20190319-WA0146.jpg","price":255,"company":"max cover","quantity":1},{"id":7,"name":"אודם","description":"אדום עמיד","imgUrl":"https://adahlazorgan.co.il/cdn/shop/products/14.jpg?v=1704178297&width=713","price":97,"company":"עדה לזורגן","quantity":8},{"id":8,"name":"מייקאפ מינרלי","description":"נעים לפנים ","imgUrl":"https://gayacosmetics.co.il/wp-content/uploads/2022/08/8-600x600.png","price":399,"company":"עדה לורגן","quantity":7}]

     
 
