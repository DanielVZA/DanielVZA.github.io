'use client'
import React, {useContext, useEffect} from 'react';
import {getAllComics} from "@/services/getComics";
import Comic from "@/app/models/Comic";
import {AppContext} from "@/context/AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

type ComicBookProps = {
    maxId?: number
    minId?: number
}

const ComicBook = ({maxId, minId}: ComicBookProps) => {
    const {setComics, comics, addProduct} = useContext(AppContext) ?? {};

    useEffect(() => {
        const fetchComics = async () => {
            const data: Comic[] = await getAllComics();
            if (setComics) setComics(data);
        };
        fetchComics();

        return () => console.log('fetchComics');
    }, []);

    return (
        <>
            {comics?.map((comic: Comic) =>
                ((minId !== null && comic.id > minId) || (maxId !== null && comic.id < maxId))&& (
                    <div className="card mx-auto comic-card m-2 p-2 col-12 col-sm-5 col-md-5 col-lg-3 col-xl-3"
                         key={comic.id}>
                        <img srcSet={comic.image} className="rounded img-fluid" width="Responsive image" alt={comic.title}/>
                        <div className="card-body text-center" style={{fontFamily: 'Bangers'}}>
                            <h3>{comic.title}</h3>
                            <p className="text-danger">${comic.price}</p>
                            {
                                comic.stock > 0 ? (
                                    <button className="btn btn-primary" onClick={() => {
                                        if (addProduct) addProduct(comic)
                                    }}>
                                        Añadir al carro <FontAwesomeIcon icon={faCartPlus}/>
                                    </button>
                                ) : (
                                    <button className="btn btn-danger" disabled>Agotado</button>
                                )
                            }
                        </div>
                    </div>
                ))}
        </>
    );
};

export default ComicBook;
