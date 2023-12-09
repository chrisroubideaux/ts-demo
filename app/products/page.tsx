// page for typescript demo
'use client';
import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';

//import  products  from '@/data/products';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  title: string;
  // Add other properties as needed
}


const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

 
  useEffect(() => {
    // Make a GET request to fetch products from your server
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        // Update the state with the fetched products
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
      <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
            {products.map((products) => (
                <div key={products.id} className=" py-5 ">
                <Cards products={products} />
              </div>
            ))}
          </div>
          </div>
    </div>
  );
};

export default Products;

{/*
'use client';
import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';
import  products  from '@/data/products';
import axios from 'axios';

export const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch apartments from your server
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        // Update the state with the fetched apartments
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
      <div className="row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-md-4 g-1 py-5">
            {products.map((products) => (
              <div key={products.id} className=" py-5 ">
                <Cards products={products} />
              </div>
            ))}
          </div>
          </div>
    </div>
  );
};

export default Products;

*/}
