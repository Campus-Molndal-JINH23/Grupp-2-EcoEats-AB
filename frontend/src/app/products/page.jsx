import React from 'react';
import Link from 'next/link';

const products = [
    { id: 1, name: 'agg', image: '/eggs.jpg' },
    { id: 2, name: 'Frukt', image: '/fruits_vegetables.jpg' },
    { id: 3, name: 'honung', image: '/honey.jpg' },
    { id: 4, name: 'kott', image: '/meat.jpg' },
    { id: 5, name: 'Mjolk', image: '/milk.jpg' },
    { id: 6, name: 'Vin', image: '/wine.jpg' },
];

const Products = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <div key={product.id} className="w-1/3 p-4">
                    <Link href={`/products/${encodeURIComponent(product.name.toLowerCase())}`}>
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Products;




/*
export default function Products() {
  return (
    <div >
      <div className="relative h-screen w-1500 h-1500 bg-center bg-cover" style={{backgroundImage: "url('/hero-blur.png')"}}>
        <div className="absolute rounded-lg bg-white h-1/2 w-1/2 left-6 top-12 "> Lorem Ipsum </div>


      </div>
    </div>
  );
}

 */