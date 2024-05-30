import React,{useState, useEffect} from 'react'
import { TextField,Button } from '@mui/material';
import {useNavigate}from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import {addOrder} from '../../features/orders/ordersSlice';
import {putProduct} from '../../features/products/productsSlice';



export default function AddOrde() {
  let nav=useNavigate();
  const dis=useDispatch();
  const currentUser= useSelector(s=>s.user.currentUser);

  const [id, setId] = useState(1);
  const [name, setName] = useState(currentUser?currentUser.name:"your name");
  const [Address, setAddress] = useState(currentUser?currentUser.Address:"your Address");
  const [orderDate, setOrderDate] = useState('');
  const [dueDate, setDueDate] = useState('');

const arrCard=useSelector(s=>s.order.cart);

  useEffect(() => {
    const currentDate = new Date();
    setOrderDate(currentDate.toISOString().split('T')[0]); // תאריך נוכחי בפורמט YYYY-MM-DD

    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(currentDate.getDate() + 7);
    setDueDate(oneWeekFromNow.toISOString().split('T')[0]); // תאריך שבוע מהיום בפורמט YYYY-MM-DD
  }, []);


const addToOrder=()=>{
const newOrder={
 
id:id,
orderDate:orderDate ,
dueDate:dueDate,
userId:currentUser.id ,
 cart:arrCard
}
console.log(newOrder);
console.log(arrCard);
dis(addOrder(newOrder)); 
arrCard.forEach(element => {
  updateOK(element.p,element.quantity)
});
alert("Thank you!!!!")
}
const updateOK = (product,q) => {
 
  const newProduct = { ...product };
  newProduct.quantity = product.quantity - q;
  console.log(newProduct);
   dis(putProduct({ id: product.id, updatedProduct: newProduct }));

    alert("המוצר התעדכן בהצלחה");
};
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <h1>ADD ORDER</h1>
      
      <h3>Order Date: {orderDate}</h3>
      <h3>Due Date: {dueDate}</h3>
      <br/> <TextField label={"code order"} variant="outlined" value={id} onChange={(e) => setId(e.target.value)} />
      <br/> <TextField label={currentUser?currentUser.name:"your name"} variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
      <br/> <TextField label={currentUser?currentUser.Address:"your Address"} variant="outlined" value={Address} onChange={(e) => setAddress(e.target.value)} />
      <br/> <Button onClick={addToOrder} variant="contained" sx={{ backgroundColor: ' rgb(156, 2, 33) ', '&:hover': { backgroundColor:'red',  }, }}>OK</Button> 
      <br/><Button  onClick={()=>{nav('/Basket')}}   variant="contained" sx={{ backgroundColor: ' rgb(156, 2, 33) ', '&:hover': { backgroundColor:'red',  }, }}> shopping cart</Button> 


    </div>
  )
}
// "id": 3,
// "orderDate": "20-10-2022",
// "dueDate": "24-10-2022",
// "userId": 1,
// "cart":