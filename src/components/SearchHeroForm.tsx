'use client';
import React, {FormEvent, useState} from "react";
import {findSuperHeroByName} from "@/services/superHeroService";

const SearchHeroForm = () => {
    const [name, setName] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setName(name);
    }

    const findSuperHero = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const heroes = await findSuperHeroByName(name);

        console.log(heroes);
    }
    return (
        <form className="d-flex" onSubmit={findSuperHero}>
            <input className="form-control me-2" type="search" placeholder="Search Hero" aria-label="Search Hero" onChange={onChange} />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    );
}

export default SearchHeroForm;