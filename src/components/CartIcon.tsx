'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import {AppContext} from "@/context/AppContext";

const CartIcon = () => {
    const context = useContext(AppContext);

    if (!context) {
        console.error("AppContext is undefined. Ensure the component is wrapped with AppProvider.");
        return null;
    }

    const {cart} = context;

    return (
        <button className="nav-link links banger text-light" onClick={() => console.log("cargarCart")}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="badge">{cart.length}</span>
        </button>
    );
};

export default CartIcon;
