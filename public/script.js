import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [badImg] = useState([

  ]);
  const [query, setQuery] = useState([]);
  const [message, setMessage] = useState('');
  const [cart, setCart] = useState([]);
  const [compra, setCompra] = useState({ total: 0 });
  const [result, setResult] = useState([]);
  const [nombre, setNombre] = useState('');
  const [datosHeroe, setDatosHeroe] = useState({
    name: '',
    biography: {},
    appearance: {},
    work: {},
    connections: {},
    image: ''
  });

  const cargarLista = async () => {
    const heroesList = [];
    let cont = 0;
    for (let i = 1; i < 732; i++) {
      const resultado = await axios.get(`https://superheroapi.com/api.php/630240554391029/${i}`);
      const hero = resultado.data;
      if (badImg[cont] === i) {
        hero.image.url = "https://www.caiv.org/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png";
        cont++;
      }
      heroesList.push(hero);
    }
    setHeroes(heroesList);
  };

  const buscarNombre = async (nombre) => {
    const resultado = await axios.get(`https://superheroapi.com/api.php/630240554391029/search/${nombre}`);
    if (resultado.data.response === 'success') {
      setMessage('Resultados de la búsqueda');
      setQuery([resultado.data]);
      setResult(resultado.data.results);
    } else {
      setNombre('');
      setMessage('No se han encontrado coincidencias para');
    }
  };

  const addProducto = (comic, index) => {
    const newCart = [...cart];
    const existingItem = newCart.find((item) => item.index === index);
    if (existingItem) {
      existingItem.cantidad += 1;
      existingItem.subTotal = existingItem.cantidad * comic.precio;
      setCompra({ total: compra.total + comic.precio });
      comics[index].stock -= 1;
    } else {
      const newItem = {
        index,
        titulo: comic.titulo,
        imagen: comic.imagen,
        cantidad: 1,
        precio: comic.precio,
        subTotal: comic.precio
      };
      setCompra({ total: compra.total + comic.precio });
      comics[index].stock -= 1;
      newCart.push(newItem);
    }
    setCart(newCart);
  };

  const addCantidad = (item) => {
    const newCart = [...cart];
    const existingItem = newCart.find((e) => e.index === item.index);
    if (existingItem) {
      existingItem.cantidad += 1;
      existingItem.subTotal = existingItem.cantidad * existingItem.precio;
      comics[item.index].stock -= 1;
    }
    setCart(newCart);
  };

  const removeProducto = (item, index) => {
    const newCart = [...cart];
    const existingItem = newCart.find((e) => e.index === item.index);
    if (existingItem) {
      if (existingItem.cantidad > 1) {
        existingItem.cantidad -= 1;
        existingItem.subTotal = existingItem.cantidad * existingItem.precio;
        comics[item.index].stock += 1;
      } else {
        newCart.splice(index, 1);
      }
    }
    setCart(newCart);
  };

  const cargarModalHero = (heroe) => {
    setDatosHeroe({
      name: heroe.name,
      biography: heroe.biography,
      appearance: heroe.appearance,
      work: heroe.work,
      connections: heroe.connections,
      image: heroe.image.url
    });
  };

  useEffect(() => {
    cargarLista();
  }, []);

  return (
    <div>
      {/* Aquí se incluirán los componentes de las vistas (Index, SuperHero, Cart, etc.) */}
    </div>
  );
};

export default App;
