var main = new Vue({
  el: "#content",
  data: {
    url: "https://superheroapi.com/api.php/630240554391029/",
    urlSearch: "https://superheroapi.com/api.php/630240554391029/search/",
    heroes: [],
    bad_img: [
      51,54,74,101,113,117,124,131,133,134,
      143,164,184,205,244,283,288,290,291,
      292,362,447,453,511,512,552,553,593,
      603,629,662,682,694,698,715,721,725
    ],
    query: [],
    message: '',
    cart: [],
    compra: {
      total: 0,

    },
    comics: [
      {
        id: 1,
        titulo: 'Avengers 1',
        imagen: 'img/avenger1.png',
        precio: 12000,
        stock: 5
      },
      {
        id: 2,
        titulo:'Era de Ultron',
        imagen: 'img/avengereradeultron.png',
        precio: 13000,
        stock: 7
      },
      {
        id: 3,
        titulo: 'Deadpool',
        imagen: 'img/dead pool matandoparavivir.png',
        precio: 12000,
        stock: 2
      },
      {
        id: 4,
        titulo: 'Secret War',
        imagen: 'img/secretwar.png',
        precio: 12000,
        stock: 7
      },
      {
        id: 5,
        titulo: 'Spiderman Back',
        imagen: 'img/spiderman1.png',
        precio: 12000,
        stock: 1
      },
      {
        id: 6,
        titulo: 'Stranger Things',
        imagen: 'img/stranger things.png',
        precio: 13000,
        stock: 3
      },
      {
        id: 7,
        titulo: 'Thanos Vence',
        imagen: 'img/thanosvence1.png',
        precio: 12000,
        stock: 4
      },
      {
        id: 8,
        titulo: 'Infinity Gauntlet',
        imagen: 'img/infinitygauntlet.png',
        precio: 12000,
        stock: 3
      }
    ],
    result:[],
    nombre: '',
    datos_heroe: {
      name: '',
      biography: {},
      appearance: {},
      work:{},
      connections: {},
      image: '',
    },
  },
  methods: {
    async cargarLista() {
      var cont = 0;
      for(let i = 1;i<732;i++){
        let resultado = await axios.get(this.url+i);
        this.heroes.push(resultado.data);
        if(this.bad_img[cont] == i){
          this.heroes[i-1].image.url = "https://www.caiv.org/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png";
          cont++;
        }
        
      }
    },
    buscarNombre: async function(nombre){
      let cont = 0;
      var resultado = await axios.get(this.urlSearch+nombre);
      if(resultado.data.response == 'success'){ 
        this.message = 'Resultados de la busqueda '
        this.query.push(resultado.data);
        this.query.forEach(heroe => {
          this.result = heroe.results;
        });
      }else{
        this.nombre = ' ';
        this.message = 'No se han encontrado coincidencias  para '
      } 
    },
    addProducto: function(comic,index){
      let item = {
        index: index,
        titulo: comic.titulo,
        imagen: comic.imagen,
        cantidad: 0,
        precio: comic.precio,
        subTotal: 0,
      }
      if(this.cart.find((e) => {
          if(e.index == index){
            e.cantidad += 1;
            e.subTotal = e.cantidad * comic.precio;
            this.compra.total += e.precio;
            this.comics[index].stock -= 1
            return true;
          }
        })
      ){}
      else{
        item.cantidad = 1;
        item.subTotal = item.cantidad * comic.precio;
        this.compra.total += item.precio;
        this.comics[index].stock -= 1;
        this.cart.push(item);
      }
    },
    addCantidad: function(item){
      this.cart.find((e) => {
        if(e.index == item.index){
          e.cantidad += 1;
          e.subTotal = e.cantidad * e.precio;
          this.comics[item.index].stock -= 1;
        }
      })
    },
    removeProducto: function(item,index){
      this.cart.find((e) => {
        if(e.index == item.index){
          if(e.cantidad > 1){
            e.cantidad -= 1;
            e.subTotal = e.cantidad * e.precio;
            this.comics[item.index].stock += 1;
          }
          else{
            this.cart.splice(index,1);
          }
        }
      })
    },
    test: function(){
      alert('ok');
    },
    cargarIndex: function(){
      let index = document.getElementById('index');
      index.style.display = 'block';
      let superHero = document.getElementById('superhero');
      superHero.style.display = 'none';
      let cart = document.getElementById('cart');
      cart.style.display = 'none';
    },
    cargarSuperHero: function(){
      let superHero = document.getElementById('superhero');
      superHero.style.display = 'block';
      let index = document.getElementById('index');
      index.style.display = 'none';
      let cart = document.getElementById('cart');
      cart.style.display = 'none';
    },
    cargarCart: function(){
      let cart = document.getElementById('cart');
      cart.style.display = 'block'
      let superHero = document.getElementById('superhero');
      superHero.style.display = 'none';
      let index = document.getElementById('index');
      index.style.display = 'none'; 
    },
    cargarModalHero: function(heroe){
      this.datos_heroe.name = heroe.name;
      this.datos_heroe.biography = heroe.biography;
      this.datos_heroe.appearance = heroe.appearance;
      this.datos_heroe.work = heroe.work;
      this.datos_heroe.connections = heroe.connections;
      this.datos_heroe.image = heroe.image.url;
    },
  },
  created() {
    this.cargarLista();
  },
});