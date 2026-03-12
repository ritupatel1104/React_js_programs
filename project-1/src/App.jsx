import React from 'react'
import Card from './Components/Card'
import ProductCard from './Components/ProductCard';
import { IceCream } from 'lucide-react';
import IceCreamCard from './Components/IceCreamCard';

const App = () => {
//Here there are json data for both juice and product
//   const data = [
//   {
//     "name": "Orange Juice",
//     "photo": "https://i.pinimg.com/736x/10/cd/8c/10cd8ce1e2682d034d92b6ed3388fe71.jpg",
//     "ingredients": ["Orange", "Water", "Sugar"],
//     "price": 18 
//   },
//   {
//     "name": "Apple Juice",
//     "photo": "https://i.pinimg.com/736x/2a/04/a2/2a04a2cc5e76c53a395def9b1baa9f6f.jpg",
//     "ingredients": ["Apple", "Water", "Lemon"],
//     "price": 15 
//   },
//   {
//     "name": "Mango Juice",
//     "photo": "https://i.pinimg.com/736x/d2/27/d7/d227d70f6dc5b539a1e0f259771280a1.jpg",
//     "ingredients": ["Mango", "Milk", "Sugar"],
//     "price": 12 
//   },
//   {
//     "name": "Pineapple Juice",
//     "photo": "https://i.pinimg.com/736x/a3/8c/65/a38c652a9de5ebb09e6f96c8e0ab4d7f.jpg",
//     "ingredients": ["Pineapple", "Water", "Honey"],
//     "price": 10 
//   },
//   {
//     "name": "Strawberry Juice",
//     "photo": "https://i.pinimg.com/736x/9a/6a/fb/9a6afb2d0b80febb7ce9d744e1f0c6f3.jpg",
//     "ingredients": ["Strawberry", "Water", "Sugar"],
//     "price": 19 
//   },
//   {
//     "name": "Watermelon Juice",
//     "photo": "https://i.pinimg.com/736x/34/50/f4/3450f4eefed78ddfceed30db78efcf43.jpg",
//     "ingredients": ["Watermelon", "Mint", "Lime"],
//     "price": 17 
//   },
//   {
//     "name": "Carrot Juice",
//     "photo": "https://i.pinimg.com/1200x/b8/7f/42/b87f42e581b8bb44a91c4b93f4bb9789.jpg",
//     "ingredients": ["Carrot", "Ginger", "Lemon"],
//     "price": 9 
//   },
//   {
//     "name": "Mixed Fruit Juice",
//     "photo": "https://i.pinimg.com/736x/99/d8/67/99d86701e0b1106f850e0a552a4cbd98.jpg",
//     "ingredients": ["Apple", "Banana", "Orange", "Mango"],
//     "price": 20 
//   },
//   {
//     "name": "Pomegranate Juice",
//     "photo": "https://i.pinimg.com/736x/3c/c5/5b/3cc55bd6b3d791ad8b8c4e1627d9d691.jpg",
//     "ingredients": ["Pomegranate", "Water", "Honey"],
//     "price": 13 
//   },
//   {
//     "name": "Kiwi Juice",
//     "photo": "https://i.pinimg.com/1200x/2a/f1/04/2af104594ae09fd931334143ac69c66c.jpg",
//     "ingredients": ["Kiwi", "Apple", "Lime"],
//     "price": 18 
//   }
// ];




//  const product = [
//   {
//     "productPhoto": "https://i.pinimg.com/1200x/1a/18/3a/1a183abde3d12d95e5886ae7903cfed7.jpg",
//     "productName": "Wireless Headphones",
//     "logo": "https://i.pinimg.com/736x/31/33/1c/31331c8652a2ba996ce2860f7ced940d.jpg",
//     "price": 2499,
//     "tagline": "Feel the music wirelessly",
//     "details": "High-quality wireless headphones with noise cancellation and 20-hour battery life."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/e9/3b/c5/e93bc5fb27cc995951e86bd0b0e82307.jpg",
//     "productName": "Smart Watch Pro",
//     "logo":"https://i.pinimg.com/736x/d1/c3/71/d1c3716580021acff7043d767e72a0eb.jpg",
//     "price": 3999,
//     "tagline": "Your fitness partner",
//     "details": "Track heart rate, steps, and sleep with this stylish smartwatch."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/3c/f5/fc/3cf5fc20f53be9fcf58e3ec0b2b44331.jpg",
//     "productName": "UltraBook X",
//     "logo":"https://i.pinimg.com/1200x/c8/1c/7e/c81c7e3eee5e8ccee02a910701a17021.jpg",
//     "price": 65999,
//     "tagline": "Power meets portability",
//     "details": "Lightweight laptop with powerful performance and long battery life."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/1200x/aa/5e/b5/aa5eb5a473f10d73bbc621d16e24c5a6.jpg",
//     "productName": "Smartphone Max",
//     "logo":"https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
//     "price": 29999,
//     "tagline": "Experience speed",
//     "details": "Fast processor smartphone with stunning display and great camera."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/64/14/99/64149999d340b2b1ee0b7e802c936f29.jpg",
//     "productName": "Bluetooth Speaker",
//     "logo":"https://i.pinimg.com/736x/31/33/1c/31331c8652a2ba996ce2860f7ced940d.jpg",
//     "price": 1999,
//     "tagline": "Sound that moves with you",
//     "details": "Portable speaker with deep bass and 10-hour playtime."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/1200x/57/23/56/572356f77cb0e0e7449da32255774ee0.jpg",
//     "productName": "Digital Camera",
//     "logo":"https://i.pinimg.com/736x/30/91/1d/30911d93df147875018f543fc5871dc2.jpg",
//     "price": 45999,
//     "tagline": "Capture every moment",
//     "details": "High-resolution camera with 4K video recording capability."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/11/42/4f/11424fd7e70c8321f908ef4e1f1e8034.jpg",
//     "productName": "Gaming Mouse",
//     "logo":"https://i.pinimg.com/1200x/03/d6/a4/03d6a40f8be9403b3d20949d84bbb1d1.jpg",
//     "price": 1499,
//     "tagline": "Precision in every move",
//     "details": "Ergonomic gaming mouse with customizable DPI and RGB lighting."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/79/7c/2d/797c2dcb9dffa76d83f2a11a7b33a8ba.jpg",
//     "productName": "Mechanical Keyboard",
//     "logo":"https://i.pinimg.com/1200x/03/d6/a4/03d6a40f8be9403b3d20949d84bbb1d1.jpg",
//     "price": 3499,
//     "tagline": "Type like a pro",
//     "details": "Durable mechanical keyboard with tactile switches and backlight."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/736x/43/ae/68/43ae680bf945a2178ec5dc8677de43e6.jpg",
//     "productName": "Tablet Plus",
//     "logo":"https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
//     "price": 18999,
//     "tagline": "Work and play anywhere",
//     "details": "Slim tablet perfect for entertainment, reading, and productivity."
//   },
//   {
//     "productPhoto": "https://i.pinimg.com/1200x/18/ea/c3/18eac332efdd0d342546a845eaef44e1.jpg",
//     "productName":  "Wireless Power Bank 5000mAh",
//     "logo":"https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
//     "price": 1299,
//     "tagline": "Charge on the go",
//     "details": "High-capacity power bank with fast charging support."
//   }
// ]
  return (
    <>
        {/* <section className='flex flex-wrap gap-6 px-8 py-4 justify-center items-center'>
            {data.map(function (juice){
              return <Card data ={juice}/>
            })}
        </section> */}

       {/* <section className="flex item-center flex-wrap py-4 px-6 justify-center gap-5">
          {product.map(function (data) {
              return <ProductCard data={data} />;
          })}
       </section> */}

        <IceCreamCard />
       
      
    </>
  )
}

export default App
