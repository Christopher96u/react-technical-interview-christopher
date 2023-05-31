import { createContext } from "react";

export interface Product {
    id: number,
    name: string,
    type: string,
    price: number
}
export interface CartItem extends Product {
    totalItems: number
}

interface CartContextType {
    state: {
        data: Product[],
        cart: CartItem[]
    }
    addToCart: (product: Product) => void
}

const defaultCartContext = {
    state: {
        data: [],
        cart: []
    },
    addToCart: () => { }
}

const CartContext = createContext<CartContextType>(defaultCartContext);
export { CartContext };