'use client'
import React from 'react';
import ComicBook from './components/ComicBook';
import SuperheroSearch from './components/SuperheroSearch';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import AppProvider from "@/context/AppContext";

export default function Home() {
    return (
        <div>
            <AppProvider>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fondo-banner"
                         style={{width: '100%'}}>
                        <button className="navbar-brand banger-25 links"
                                onClick={() => console.log("cargarIndex")}>COMIC
                            STORE
                        </button>
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                                data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto banger">
                                <li className="nav-item">
                                    <button className="nav-link text-white links" id="comics"
                                            onClick={() => console.log("cargarIndex")}>
                                        COMICS
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white links" id="superheroes"
                                            onClick={() => console.log("cargarSuperHero")}>SUPER HEROES
                                    </button>
                                </li>
                            </ul>
                            <div className="form-inline">
                                <input className="form-control mr-sm-2" v-model="nombre" type="search"
                                       placeholder="Buscar Heroe" aria-label="Search"/>
                                <button className="btn btn-outline-light my-2 my-sm-0"
                                        onClick={() => console.log("buscarNombre(nombre)")}
                                        data-target="#modal-query"
                                        data-toggle="modal">Buscar
                                </button>
                            </div>
                            <div className="nav-item">
                                <button className="nav-link links banger" onClick={() => console.log("cargarCart")}>
                                    <FontAwesomeIcon icon={faShoppingCart}/>
                                    <span className="badge">cart.length</span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div id="index">
                        <div className="container-fluid">
                            <div className="row m-2">
                                <ComicBook maxId={5}/>
                            </div>
                            <div className="row p-4 mt-3 mb-3" style={{backgroundColor: '#000'}}>
                                <div className="col col-xl-12 col-12 text-center"
                                     style={{color: '#F5E83D', fontFamily: 'Bangers'}}>
                                    <h1>PRONTO</h1>
                                    <h3>EL COMIC DE KICKASS</h3>
                                </div>
                                <div className="col col-xl-12 col-12 text-center">
                                    <img src="images/kickass.jpg" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="row m-2">
                                <ComicBook minId={4}/>
                            </div>
                        </div>
                    </div>
                    {/*<SuperheroSearch/>*/}

                </main>

                <footer className="bg-primary p-2 banger fondo-banner">
                    <div className="container-fluid row">
                        <div className="col-9 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                            <span>© 2023 Derechos Reservados</span>
                        </div>
                        <div className="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                            <span>Comic Store</span>
                        </div>
                    </div>
                </footer>
            </AppProvider>
        </div>
    );
}
