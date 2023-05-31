import { useContext } from "react";
import { CartContext, Product } from "../context/CartContext";

interface ProductItemProps {
    product: Product
}
const ProductItem = ({ product }: ProductItemProps) => {
    const { addToCart } = useContext(CartContext);
    return (
        <>
            <div className="bg-gray-200 rounded-2xl p-6 w-56 m-6">
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <button className="bg-slate-600" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </>
    )

}
export { ProductItem };