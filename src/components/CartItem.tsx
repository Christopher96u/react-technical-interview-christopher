import { CartItem } from "../context/CartContext"

interface CartItemProps {
    cartItem: CartItem
}
const CartItem = ({ cartItem }: CartItemProps) => {
    return (
        <div className="bg-gray-100 rounded-2xl p-6 w-56 m-6">
            <div>
                Cart Item Component
            </div>
            <h5>{cartItem.name}</h5>
            <h5>{cartItem.price}</h5>
            <h5>{cartItem.totalItems}</h5>
        </div>

    )

}
export {
    CartItem
}