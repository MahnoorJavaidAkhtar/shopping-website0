
import React from 'react'
import ProductCard from './ProductCard ';

const ProductsData = [
    {
        img:"/shirt-1.jpg",
        title: "Shirt",
        desc: "White V-Neck Drop Needle POLO (Women)",
        rating: 4,
        price: "45.00",
    },
    {
        img:"/shirt-2.jpg",
        title: "Shirt",
        desc: "ANKLAR DESIGNER DESIGNER Men Grey Solid Cotton Blend Formal Shirt (L)",
        rating: 4,
        price: "65.00",
    },
    {
        img:"/Heels-3.jpg",
        title: "Heels",
        desc: "Black Party Wear Ladies High Heel Sandals, For Casual Wear",
        rating: 4,
        price: "55.00",
    },
    {
        img:"/Watch-4.jpg",
        title: "Watch",
        desc: "Men's Watches Fashion Ultra Thin Watches Simple Men Business Watch Stainless Steel Mesh Belt Watch",
        rating: 4,
        price: "25.00",
    },
    {
        img:"/Bag-5.jpg",
        title: "Bag",
        desc: "Black Shoulder Bag",
        rating: 4,
        price: "35.00",
    },
    {
        img:"/Shoes-6.jpg",
        title: "Shoes",
        desc: "Men's Casual Shoes Lightweight Breathable Men Shoes Flat Lace-Up Tenis",
        rating: 4,
        price: "45.00",
    },
    {
        img:"/Wallet-7.jpg",
        title: "Wallet",
        desc: "Men's Long Leather Wallet Men Import Clutch",
        rating: 4,
        price: "15.00",
    },
    {
        img:"/Shoes-8.jpg",
        title: "Shoes",
        desc: "Shoes For Girls, Fashionable streetwear Shoes For Girls",
        rating: 4,
        price: "45.00",
    }
]

const NewProducts = () => {
    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-w-20 xl:gap-y-10'>
                    

{ProductsData.map((item , index) => (<ProductCard 
key={index}
img={item.img}
title={item.title}
desc={item.desc}
rating={item.rating}
price={item.price}
/>
))}

                </div>
            </div>
        </div>
    );
};

export default NewProducts;


