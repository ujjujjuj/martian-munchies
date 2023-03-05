
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children, setAuthed, setUser }) => {
    const [cart, setCart] = useState({});
    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    const setCartItem = (product, amount) => {
        let quantity = (cart[product.id]?.quantity || 0) + amount;
        if (quantity === 0) {
            setCart((cart) => {
                let newCart = Object.assign({}, cart);
                delete newCart[product.id];
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
        } else {
            setCart((cart) => {
                let newCart = Object.assign({}, cart);
                newCart[product.id] = { ...product, quantity };
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            });
        }
    };

    const deleteCartItem = (id) => {
        setCart((cart) => {
            let newCart = Object.assign({}, cart);
            delete newCart[id];
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const getCheckoutCart = () => {
        let checkoutCart = {};
        Object.entries(cart).forEach(([productId, product]) => {
            console.log(productId, product)
            checkoutCart[productId] = product.quantity;
        });
        return checkoutCart;
    };


    return (
        <CartContext.Provider value={{ cart, setCartItem, getCheckoutCart, deleteCartItem }}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;