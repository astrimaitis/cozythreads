"use client";

import React from "react";
import { sampleItems } from "@/public/catalog/catalog";
import ProductCard from "../card/ProductCard";
import "@/public/styles/Browse.css";

export default function Browse() {
  return (
    <div>
      <h1 className="welcome">
        Welcome to Cozy Threads!
      </h1>
      <h1 className="description">
        Your one-stop shop for High Quality, Ethically-Sourced, Apparel and Accessories. 
      </h1>
        
      <main className="flex flex-col gap-8 items-center">       
        <div className="container">
            {sampleItems.map((item) => ProductCard(item))}
        </div> 
      </main>
    </div>
  );
}