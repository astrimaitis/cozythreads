"use client";
import React from "react";
// import Image from "next/image"; 
import "./Title.css";
import Link from "next/link";

export default function Title() {
    return (
        <div id="title">
            <div id="company">
                <h1 id="cozythreads" className="cozythreads">Welcome to Cozy Threads!</h1>
                <div className="row">
                    <div className="col">
                        <Link href="/" passHref>Browse</Link>
                    </div>
                    <div className="col">
                        <Link href="/cart" passHref>Shopping Cart</Link>
                    </div>          
                </div>
            </div>
        </div>
    );
}