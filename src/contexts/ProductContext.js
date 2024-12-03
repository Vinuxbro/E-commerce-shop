import React, {createContext, useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

//create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
   //getting product id from URL
   const {id} = useParams();
   console.log(id)

  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();

  }, []);

  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}



export default ProductProvider;
