"use client";

import React from "react";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCart";
import Link from "next/link";
import "@/public/styles/Cart.css";

export default function Cart() {

  const { displayCart } = useShoppingCart();
  let sum : number = 0;
  displayCart().map(item => {
    sum += item.price;
    sum = parseFloat(sum.toFixed(2));
  });

  const emptyCart = () => {
    return (
      <div className="outer" id="outer">
        <table className="outer" id="outer">
          <thead>
            Your cart is currently empty.
          </thead>
          <tbody>
            <Image src={"/assets/emptyCart.png"} alt={""} /> 
          </tbody>
        </table>
      </div>
    )
  }

  const generateTable = () => {
    return (
      <div>
    <table className="outer" id="outer">
    <thead>
    <tr>
      <th>
        Item
      </th>
      <th>
        Description
      </th>
      <th>
        Quantity
      </th>
      <th>
        Price
      </th>
    </tr>
    </thead>
    <tbody>
    {displayCart().map((item) => (
      // eslint-disable-next-line react/jsx-key
      <tr>
        <td>
          <Image src={item.image} alt={item.name} className="center"></Image>
        </td>
        <td className="center">
          <h1 className="item">{item.name}</h1>
          <h1>{item.description}</h1>
          <h1>{item.uniqueId}</h1>
          <h1 className="font-bold">${item.price}</h1>
        </td>
        <td className="center">
          <div className="center">
            {item.quantity}    
          </div>    
        </td>
        <td className="center">
          ${parseFloat((item.quantity * item.price).toFixed(2))}
        </td>
      </tr>
))}
  </tbody>
    <tfoot>
      <td></td>
      <td></td>
      <td className="center">
        Total: 
      </td>
      <td className="sum">${sum}</td>
    </tfoot>
  </table>
    <div className="center">
      <Link href="/payment" className="purchaseCart">Payment</Link>
    </div>
  </div>
    )
  }

  return (
    <div className="outer" id="outer">
      {(displayCart().length == 0) ? emptyCart() : generateTable()}
    </div>    
);
}