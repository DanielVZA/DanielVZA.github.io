"use client";

import React, {createContext, Dispatch, SetStateAction, useMemo, useState, ReactNode} from "react";
import CartItem from "@/types/CartItem";
import {Comic} from "@/types/Comic";
import {toast, ToastContainer, Slide} from "react-toastify";
import {BadgeCheck, CircleAlert, Info, TriangleAlert} from "lucide-react";

type AppContextType = {
    cleanUp: () => void;
    addProduct: (comic: Comic, setComics: Dispatch<SetStateAction<Comic[]>>) => void;
    notificationInfo: (message: string) => void;
    notificationAlert: (message: string) => void;
    notificationSuccess: (message: string) => void;
    notificationWarn: (message: string) => void;
    cart: CartItem[];
    setCart: Dispatch<SetStateAction<CartItem[]>>;
    buy: number;
    setBuy: Dispatch<SetStateAction<number>>;
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type AppProviderProps = {
    children: ReactNode; // Updated type for children
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({children}: AppProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [buy, setBuy] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const cleanUp = () => {
        setCart([]);
        setBuy(0);
        setIsOpen(false);
    };

    const addProduct = (comic: Comic, setComics: Dispatch<SetStateAction<Comic[]>>) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.comicId === comic.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.comicId === comic.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            subTotal: (item.quantity + 1) * comic.price,
                        }
                        : item
                );
            } else {
                const newCartItem = {quantity: 1, comic: comic, comicId: comic.id, subTotal: comic.price};
                return [...prevCart, newCartItem];
            }
        });

        setBuy((prevCompra) => prevCompra + comic.price);
        notificationSuccess(`Comic "${comic.title}" added to cart`);

        setComics((prevComics) =>
            prevComics.map((com) =>
                com.id === comic.id && com.stock > 0
                    ? {...com, stock: com.stock - 1}
                    : com
            )
        );
    };
    const notificationInfo = (message: string) => {
        toast.info(message, {autoClose: 2000});
        return <Info className="stroke-indigo-400"/>;
    };
    const notificationAlert = (message: string) => {
        toast.error(message, {autoClose: 2000});
        return <CircleAlert className="stroke-red-500"/>;
    };
    const notificationSuccess = (message: string) => {
        toast.success(message, {autoClose: 2000});
        return <BadgeCheck className="stroke-green-500"/>
    };
    const notificationWarn = (message: string) => {
        toast.warning(message, {autoClose: 2000});
        return <TriangleAlert className="stroke-yellow-500"/>;
    };

    const values = useMemo(
        () => ({
            cleanUp, addProduct,
            notificationInfo, notificationAlert,
            notificationSuccess, notificationWarn,
            cart, setCart,
            buy, setBuy,
            isOpen, setIsOpen
        }),
        [cart, buy] // Added dependencies for useMemo
    );

    return (
        <AppContext.Provider value={values}>
            <ToastContainer autoClose={2000} transition={Slide}/>
            {children}
        </AppContext.Provider>
    );
};

export {AppProvider as default, AppContext};
