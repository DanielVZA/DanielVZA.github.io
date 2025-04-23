'use client'
import React, {useEffect, useState} from 'react';
import {getAllComics} from "@/services/getComics";
import Comic from "@/app/models/Comic";
import CartItem from "@/app/models/CartItem";

type ComicBookProps = {
    maxId?: number
    minId?: number
}

const ComicBook = ({maxId, minId}: ComicBookProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [compra, setCompra] = useState<number>(0);
    const [comics, setComics] = useState<Comic[]>([]);

    useEffect(() => {
        const fetchComics = async () => {
            const data: Comic[] = await getAllComics();
            setComics(data);
        };
        fetchComics();

        return () => console.log('fetchComics');
    });


    const addProduct = (comic: Comic) => {
        let cartItem = cart.find(item => item.comicId === comic.id);
        if (cartItem) {
            setCart(cart => cart.map(item => {
                if (item.comicId === comic.id) {
                    item.quantity += 1;
                    item.subTotal = item.quantity * comic.price;
                }
                return item;
            }));
            setCompra(total => total + comic.price);
        } else {
            cartItem = new CartItem(1, comic);
            setCompra(total => total + comic.price);
            setCart([...cart, cartItem]);
        }
        setComics(comics => comics.map(com => {
            if (comic.id === com.id && com.stock > 0)
                com.stock -= 1;

            return com;
        }));
    };

    return (
        <>
            {comics.map((comic) =>
                (minId !== null && comic.id > minId || maxId !== null && comic.id < maxId) && (
                    <div className="card mx-auto comic-card m-2 p-2 col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3">
                        <img srcSet={comic.image} className="rounded img-fluid" width="Responsive image" alt={comic.title} />
                        <div className="card-body text-center" style={{fontFamily: 'Bangers'}}>
                            <h3>{comic.title}</h3>
                            <p className="text-danger">${comic.price}</p>
                            <button className="btn-primary" onClick={() => addProduct(comic)}>
                                Añadir al carro <i className="fas fa-cart-plus"/>
                            </button>
                            <button className="btn-danger" v-if="comic.stock < 1" disabled>agotado</button>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default ComicBook;
