var main = new Vue({
  el: "#content",
  data: {
    url: "https://superheroapi.com/api.php/630240554391029/",
    heroes: [],
    bad_img: [
      51,54,74,101,113,117,124,131,133,134,
      143,164,184,205,244,283,288,290,291,
      292,362,447,453,511,512,552,553,593,
      603,629,662,682,694,698,715,721,725
    ],
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
      for(var i = 1;i<732;i++){
        var resultado = await axios.get(this.url+i);
        this.heroes.push(resultado.data);
        if(this.bad_img[cont] == i){
          this.heroes[i-1].image.url = "https://www.caiv.org/wp-content/plugins/smg-theme-tools/public/images/not-available-es.png";
          cont++;
        }
        
      }
    },
    test: function(){
      alert('ok');
    },
    cargarIndex: function(){
      let index = document.getElementById('index');
      index.style.display = 'block';
      let superHero = document.getElementById('superhero');
      superHero.style.display = 'none'; 
    },
    cargarSuperHero: function(){
      let superHero = document.getElementById('superhero');
      superHero.style.display = 'block';
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