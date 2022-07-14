import React, { useContext } from "react";
import "./App.css";
import { CartContext } from "./context";
import { BsCartPlusFill } from "react-icons/bs";

function Navbar() {
  const { cart } = useContext(CartContext);

  console.log("cart.....", cart);
  return (
    <div className="nav-bar text-center ">
      <div>
        <h1 className="text-4xl font-bold ">Fake MArt</h1>
     <BsCartPlusFill className="cart-icon " />
      </div>
      <div className="cart-length text-2xl ">{cart.length}</div>
    </div>
  );
}

export default Navbar;
