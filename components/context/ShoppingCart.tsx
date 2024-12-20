"use client";

import { ICatalogItem } from "@/public/interfaces/ICatalogItem";
import React from "react";
import { useContext, createContext} from "react";

// Define context type interface
interface ILayoutType {
    cart: ICatalogItem[];
    addToCart(product: ICatalogItem): void;
    displayCart(): ICatalogItem[];
    emptyCart(): void;
}

// Create context with default values
const ShoppingCartContext = createContext<ILayoutType>({
    cart: [],
    addToCart: () => {},
    displayCart: () => [],
    emptyCart: () => {},
})

// Provider Component
export const ShoppingCartProvider: React.FC<{children: React.ReactNode}> = ( {children} ) => {
    const [cart, setCart] = React.useState<ICatalogItem[]>([]);
    if (cart == undefined) { setCart([]); };
    const addToCart = (product: ICatalogItem) => {
        const item = cart.find((val) =>  product.uniqueId == val.uniqueId);
        if (item == undefined) {
            setCart([...cart, product]);   
        }
        else
        {
            cart.map((item) => {
                if (item.uniqueId == product.uniqueId) {
                    const quantity = item.quantity = item.quantity + 1;
                    return {...item, quantity};
                }
            });
            setCart(cart);
        }
    };
    const displayCart = () => { return cart; };
    const emptyCart = () => { setCart([]); };
    return <ShoppingCartContext.Provider value={{
        cart,
        addToCart,
        displayCart,
        emptyCart,
    }}>{children}</ShoppingCartContext.Provider>;
}

// Custom hook for my context
export const useShoppingCart = () => useContext(ShoppingCartContext);

