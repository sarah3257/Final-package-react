import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../features/products/productsSlice';
import ProductOne from './ProductOne';
import './Products.css';
import GuestNav from '../../navs/GuestNav';
import ManagerNav from '../../navs/ManagerNav'
import { TextField,Button } from '@mui/material';

export default function Products() {
    const dis=useDispatch();

    const allProducts=useSelector(s => s.product.arrProducts);
    const [arrProducts, setArrProducts] = useState(allProducts);
    const [filterName, setFilterName] = useState('');
    const [filteredPrice, setFilterPrice] = useState('');
    const statusUser=useSelector(s=>s.user.status);
    console.log(statusUser);
    useEffect(() => {
 
        const fetchAllProducts = async () => {
            await dis(getAllProducts())
        }
        console.log(allProducts);

        fetchAllProducts()
    }, [dis]) 
    useEffect(() => {
      setArrProducts(allProducts);
    }, [allProducts]);
 
    const filterByName = () => {
        const filtered = allProducts.filter(product =>
          product.name.toLowerCase().includes(filterName.toLowerCase())
        );
        setArrProducts(filtered);
      };
      const filterByPrice = () => {
     
        const filtered = allProducts.filter(product =>
          product.price == filteredPrice
        );
        setArrProducts(filtered);
      };
      
  
    
  return (<div>
 {/* {statusUser === 'customer' && <GuestNav />}  */}
{statusUser === 'admin' ? <ManagerNav />:<GuestNav />}
<br/>

<p><TextField label="Filter by name" variant="outlined"   onChange={(e) => setFilterName(e.target.value)} /> <button onClick={filterByName} variant="contained">OK</button></p>
<TextField label="Filter by price" variant="outlined"    onChange={(e) => setFilterPrice(e.target.value)} /><button  onClick={filterByPrice} variant="contained">OK</button>
    <div className="products-container">
    {statusUser === 'guest'&&allProducts.map((item) => (
              <>
                    <ProductOne product={item}></ProductOne>
              
              </>
            ))} 
            
    {Array.isArray(arrProducts) &&arrProducts.map((item) => (
              <>
                    <ProductOne product={item}></ProductOne>
              
              </>
            ))} 
    
    </div>

    {/* onChange={(e) => setQuantity(e.target.value)} */}

    </div>
  )
}
