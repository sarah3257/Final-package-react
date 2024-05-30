import React  ,{useState} from 'react'
import { TextField,Button } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import {postProduct} from '../../features/products/productsSlice';
import ManagerNav from '../../navs/ManagerNav';

export default function AddProduct() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [company, setCompany] = useState('');
    const [quantity, setQuantity] = useState('');

    const dis=useDispatch();

    const handleSubmit = () => {
          const newProduct = {
            id:id,
            name: name,
            description: description,
            imgUrl: imgUrl,
            price: price,
            company: company,
            quantity: quantity
        };
        dis(postProduct(newProduct));
        alert("המוצר נוסף בהצלחה");
    }
  return (
    <div>
<ManagerNav></ManagerNav>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1>ADD PRODUCT</h1>
    <TextField label="id" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} />
    <TextField label="name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField label="imgUrl" variant="outlined" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        <TextField label="price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
        <TextField label="company" variant="outlined" value={company} onChange={(e) => setCompany(e.target.value)} />
        <TextField label="quantity" variant="outlined" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <Button 
        sx={{
            backgroundColor: 'darksalmon ',
            '&:hover': {
              backgroundColor:' pink',
            },
           }}  
     variant="contained" color="primary" onClick={handleSubmit}>ADD</Button>

      </div>
    </div>
  )
}

//{"id":1,"name":" סומק מינרלי","description":" ורוד","imgUrl"-,"price":195,"company":"MAC","quantity":50}