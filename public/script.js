import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [badImg] = useState([
    51, 54, 74, 101, 113, 117, 124, 131, 133, 134,
    143, 164, 184, 205, 244, 283, 288, 290, 291,
    292, 362, 447, 453, 511, 512, 552, 553, 593,
    603, 629, 662, 682, 694, 698, 715, 721, 725
  ]);
  const [query, setQuery] = useState([]);
  const [message, setMessage] = useState('');
  const [cart, setCart] = useState([]);
  const [compra, setCompra] = useState({ total: 0 });
  const [comics, setComics] = useState([
    { id: 1, titulo: 'Avengers 1', imagen: 'img/avenger1.png', precio: 12000, stock: 5 },
    { id: 2, titulo: 'Era de Ultron', imagen: 'img/avengereradeultron.png', precio: 13000, stock: 7 },
    { id: 3, titulo: 'Deadpool', imagen: 'img/dead pool matandoparavivir.png', precio: 12000, stock: 2 },
    { id: 4, titulo: 'Secret War', imagen: 'img/secretwar.png', precio: 12000, stock: 7 },
    { id: 5, titulo: 'Spiderman Back', imagen: 'img/spiderman1.png', precio: 12000, stock: 1 },
    { id: 6, titulo: 'Stranger Things', imagen: 'img/stranger things.png', precio: 13000, stock: 3 },
    { id: 7, titulo: 'Thanos Vence', imagen: 'img/thanosvence1.png', precio: 12000, stock: 4 },
    { id: 8, titulo: 'Infinity Gauntlet', imagen: 'img/infinitygauntlet.png', precio: 12000, stock: 3 }
  ]);
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
