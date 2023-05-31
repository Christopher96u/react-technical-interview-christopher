import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductItem } from "./ProductItem";

const ProductsList = () => {
    const { state } = useContext(CartContext);
    return (
        <>
            <h1>ProductsList Works!</h1>
            {
                state.data.map((product, index) => <ProductItem key={index} product={product} />)
            }
        </>
    )
}
export { ProductsList };