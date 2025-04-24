'use client'
import React, { useState } from 'react';
import axios from 'axios';

const SuperheroSearch = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState('');

  const buscarNombre = async (nombre) => {
    const resultado = await axios.get(`.php/630240554391029/search/${nombre}`);
    if (resultado.data.response === 'success') {
      setMessage('Resultados de la búsqueda');
      setResult(resultado.data.results);
    } else {
      setMessage('No se han encontrado coincidencias para');
    }
  };

  return (
    <div>
      <h2>Superhero Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a superhero"
      />
      <button onClick={() => buscarNombre(query)}>Search</button>
      <p>{message}</p>
      <div>
        {result.map((hero) => (
          <div key={hero.id}>
            <h3>{hero.name}</h3>
            <img src={hero.image.url} alt={hero.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperheroSearch;
