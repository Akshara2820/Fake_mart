import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { CartContext } from "./context";

function UsingFetch() {
  const [users, setUsers] = useState([]);
  const { setCart } = useContext(CartContext);


  useEffect(() => {
    const fetchData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data);
        });
    };
    fetchData();
    // console.log("USEEFFECT IS WORKING")
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Fake>
          <div className="main-container card hover:bg-gray-50" key={user.id}>
            <div>
              <img className="image-size " src={user.image}></img>
            </div>
            <div>{user.title} </div>
            <div> ${user.price} </div>
            <div> {user.category} </div>

            <div
              onClick={() => {
                setCart((s) => {
                  return [...s, user];
                });
              }}
            >
              <button className="font-normal bg-amber-400 border border-black">ADD TO CART +</button>
            </div>


            <div onClick={() =>{
              setCart(ss =>{
                return ss.filter (i=>{
                 return  i.id !=user.id
                });
              })
            }}>
            <button className="mt-2 bg-gray-300 border border-black">REMOVE FROM CART - </button>
            
            </div>
          </div>
        </Fake>
      ))}

      <div></div>
    </div>
  );
}

export default UsingFetch;

const Fake = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto auto auto;

  .image-size {
    width: 150px;
  }
`;
