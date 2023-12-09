// pages/products/[id].tsx
"use client"
import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<{ id: number; name: string; title: string } | null>(null);

  useEffect(() => {
    // Make a GET request to fetch the product data based on the id
    fetch(`http://localhost:3001/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched product data
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [params.id]);

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {product?.name}
        </h1>
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {product?.title}
        </h1>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        {/* You can add additional components or content here */}
      </div>
    </div>
  );
}




{/*
"use client"
import { useEffect, useState } from 'react';
import Cards from '@/components/Cards';

import products from "@/data/products";


export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((product) => product.id === Number(params.id));
  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
        {product && product.name}
        </h1>
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
        {product && product.title}
        </h1>
        
       
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
      
      </div>
    </div>
  );
}

*/}