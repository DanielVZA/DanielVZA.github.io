import React from "react";
import CartIcon from "@/components/CartIcon";
import Link from "next/link";
import SearchHeroForm from "@/components/SearchHeroForm";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fondo-banner">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">COMIC STORE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Comics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/super-heroes">Super Heroes</Link>
                            </li>
                        </ul>
                        <div className="nav-item align-items-end">
                            <CartIcon/>
                        </div>
                        <SearchHeroForm/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;