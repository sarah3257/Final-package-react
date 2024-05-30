import './App.css';
import Login from './Login';
import SignUp from './signUp';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Products from './display/product/products';
import Orders from './display/order/orders';
import Basket from './display/product/basket';
import AddProduct from './display/product/AddProduct'
import Users from './display/user/Users'
import AddOrde from './display/order/AddOrde'

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Orders" element={<Orders/>} />
          <Route path="/Basket" element={<Basket/>} />
          <Route path="/AddProduct" element={<AddProduct/>} />
          <Route path="/Users" element={<Users/>} />
          <Route path="/AddOrde" element={<AddOrde/>} />

        </Routes>
  
      </BrowserRouter>
    
   </>
  );
}

export default App;
