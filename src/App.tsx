import { useEffect, useState } from "react";
import { ProductsList } from "./components/ProductsList"
import { useFetchJSON } from "./hooks/useFetchJSON"
import { CartContext, CartItem, Product } from "./context/CartContext";
import { Cart } from "./components/Cart";

interface FetchData {
  products: Product[]
}

function App() {
  const { data } = useFetchJSON('products.json');
  const [state, setState] = useState({
    data: [] as Product[],
    cart: [] as CartItem[]
  });
  const addToCart = (product: Product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) => cartItem.id === product.id ?
          { ...cartItem, totalItems: cartItem.totalItems + 1 } : cartItem)
        : [...state.cart, { ...product, totalItems: 1 }]
    });
  }
  useEffect(() => {
    if (data) {
      setState({
        ...state,
        data: (data as FetchData).products
      });
    }
  }, [data])

  return (
    <CartContext.Provider value={{ state: state, addToCart }}>
      <>
        <ProductsList />
        <Cart />
      </>
    </CartContext.Provider>
  )
}

export default App
