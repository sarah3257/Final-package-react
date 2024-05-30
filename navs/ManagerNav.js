import React from 'react'
import {useNavigate}from 'react-router-dom';
import Button from '@mui/material/Button';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SendIcon from '@mui/icons-material/Send';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DvrIcon from '@mui/icons-material/Dvr';
import {  Box } from '@mui/material';

export default function ManagerNav() {

    let nav=useNavigate();

   

    return (<>
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px', // Space between buttons
        }}
      >
     <Button onClick={() =>{ nav('/Products');}}
        variant="contained"
        sx={{
          backgroundColor: 'darksalmon',
          '&:hover': {
            backgroundColor: 'hotpink',
          }, width: '250px',
        }}      startIcon={<StorefrontIcon />}>
          Products
  </Button> 
  <Button onClick={() =>{ nav('/Orders');}}
        variant="contained"
        sx={{
          backgroundColor: 'darksalmon',
          '&:hover': {
            backgroundColor: 'hotpink',
          }, width: '250px',
        }}      startIcon={<SendIcon />}>
          Orders
  </Button> 

  
  <Button onClick={() =>{ nav('/Users');}}
        variant="contained"
        sx={{
          backgroundColor: 'darksalmon',
          '&:hover': {
            backgroundColor: 'hotpink',
          }, width: '250px',
        }}      startIcon={<ContactPhoneIcon />}>
          users
  </Button> 
  
  <Button onClick={() =>{ nav('/AddProduct');}}
        variant="contained"
        sx={{
          backgroundColor: 'darksalmon',
          '&:hover': {
            backgroundColor: 'hotpink',
          },
          width: '250px',
        }}   
        startIcon={<DvrIcon />}>
          add product
  </Button> 
  </Box>
    </>
    )
  }
  

