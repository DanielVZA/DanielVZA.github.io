'use client';
import React, {useContext} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {AppContext} from "@/context/AppContext";

const CartOffCanvas = () => {
    const {isOpen, setIsOpen} = useContext(AppContext) ?? {
        isOpen: false, setIsOpen: () => {
        }
    };

    const onClose = () => {
        setIsOpen(false);
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Fondo oscuro */}
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={onClose}
                    />

                    {/* Panel lateral */}
                    <motion.div
                        className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
                        initial={{x: "100%"}}
                        animate={{x: "0%"}}
                        exit={{x: "100%"}}
                        transition={{type: "spring", stiffness: 300, damping: 30}}
                    >
                        <div className="p-4 border-b flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Offcanvas Right</h5>
                            <button
                                className="text-gray-600 hover:text-gray-900"
                                onClick={onClose}
                            >
                                ✖
                            </button>
                        </div>

                        <div className="p-4 flex-1 overflow-y-auto">
                            <p>Este es el contenido del offcanvas hecho a mano!</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CartOffCanvas;