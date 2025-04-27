'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React, {useContext} from "react";
import {AppContext} from "@/context/AppContext";

const CartIcon = () => {
    const {cart, setIsOpen, isOpen} = useContext(AppContext) ?? {
        cart: [], setIsOpen: () => {
        }
    };

    const open = () => {
        setIsOpen(!isOpen);
        console.log("Works!");
    }

    return (
        <button className="nav-link links text-light" type="button" onClick={open}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="badge">{cart.length}</span>
        </button>
    );
};

export default CartIcon;
