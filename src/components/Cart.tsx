import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";

const Cart = () => {
    const { state } = useContext(CartContext);
    //const totalItems = state.cart.reduce;
    const totalToPay = state.cart.reduce((acc, current) => (acc + (current.price * current.totalItems)), 0)
    return (
        <div>
            <div>
                Cart - Component
            </div>
            <div>Total to Pay: {totalToPay}</div>
            {state.cart.map((cartItem, index) => <CartItem cartItem={cartItem} key={index} />)}
        </div>
    )
}
export {
    Cart
}