"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCart";
import "@/public/styles/Success.css";

export default function Success() {

  const { emptyCart } = useShoppingCart();
  emptyCart();

  return (
    <div className="center">
          <div>
          <p className="welcome">
            Your Payment was Confirmed!
          </p>
          <p className="description">
            Thank you for supporting our business!
          </p>
          <div className="description">
            <Link href="/" className="browse"><button>Return to Browse</button></Link>
          </div>
        </div>
        <Image src={"/assets/cozy-logo.png"} alt={""} /> 
      </div>
  );
}