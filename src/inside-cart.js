import React, { useContext } from "react";
import { CartContext } from "./context";

function Inside_cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log("helllooooo maggie", cart);
  return (
    <div className="main-container card hover:bg-gray-50">
      <h1 className="text-4xl font-bold underline"> Your Cart </h1>
      {cart.map((carts) => (
        <div key={carts.id}>
          <div>
            <img className="image-size mt-5" src={carts.image}></img>
          </div>
          <div>{carts.title} </div>
          <div> ${carts.price} </div>
          <div> {carts.category} </div>

          <div onClick={() =>{
            setCart(ss =>{
              return ss.filter (i=>{
               return  i.id !=carts.id
              });
            })
          }}>
          <button className="mt-2 bg-gray-300 border border-black">REMOVE FROM CART - </button>
          
          </div>


        </div>
      ))}
      inside-cart

     
    </div>
  );
}

export default Inside_cart;
