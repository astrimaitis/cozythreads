"use client";

import React from "react";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCart";
import "./ProductCard.css";
import { ICatalogItem } from "@/public/interfaces/ICatalogItem";

export default function ProductCard(item: ICatalogItem) {
    const { addToCart } = useShoppingCart();

    const contentBody = (item: ICatalogItem) => {
        return (
            <div className="center">
                <div className="center">
                    <Image
                        aria-hidden
                        src={item.image!}
                        alt={item.uniqueId!}
                        width={150}
                        height={150}
                        className="center"
                    ></Image>
                </div>
                <div className="center">
                    <p>{item.name}</p>
                </div>
                <div className="center">
                    <p>{item.description}</p>
                </div>
                <div className="center">
                    <p className="font-bold">${item.price}</p>
                </div>
            </div>
        )
    }

    const addItem = (item: ICatalogItem) => {
        addToCart(item);
    }

    const displayItem = (item: ICatalogItem) => {
        return (
            <div className="displayCard">
                <span className="close" onClick={() => document.getElementsByClassName("displayCard")}>&times;</span>
                {contentBody(item)} 
            </div>
        )
    }

    return (
        <div id="card" className="card">
            <div className="center" onClick={() => displayItem(item)}>
                {contentBody(item)}
            </div>
            <div className="center">
                <button id="purchase" className="purchase" onClick={() => addItem(item)
                    }>
                    Add to Cart
                </button>
            </div>
        </div>    
    );
}
