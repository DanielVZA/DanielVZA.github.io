var main = new Vue({
  el: "#content",
  data: {
    url: "https://superheroapi.com/api.php/630240554391029/",
    heroes: [],
    datos_heroe: {
      name: '',
      biography: {},
      appearance: {},
      work:{},
      connections: {}
    },
  },
  methods: {
    async cargarLista() {
      for(var i = 1;i<732;i++){
        var resultado = await axios.get(this.url+i);
        this.heroes.push(resultado.data);
      }
    },
    test: function(){
      alert('ok');
    },
    cargarIndex: function(){
      var index = document.getElementById('index');
      index.style.display = 'block';
      var superHero = document.getElementById('superhero');
      superHero.style.display = 'none'; 
      var aboutme = document.getElementById('aboutme');
      aboutme.style.display = 'none'; 
    },
    cargarSuperHero: function(){
      var superHero = document.getElementById('superhero');
      superHero.style.display = 'block';
      var index = document.getElementById('index');
      index.style.display = 'none'; 
      var aboutme = document.getElementById('aboutme');
      aboutme.style.display = 'none';
    },
    cargarAboutMe: function(){
      var aboutme = document.getElementById('aboutme');
      aboutme.style.display = 'block';
      var superHero = document.getElementById('superhero');
      superHero.style.display = 'none';
      var index = document.getElementById('index');
      index.style.display = 'none'; 
    },
    cargarModalHero: function(heroe){
      this.datos_heroe.name = heroe.name;
      this.datos_heroe.biography = heroe.biography;
      this.datos_heroe.appearance = heroe.appearance;
      this.datos_heroe.work = heroe.work;
      this.datos_heroe.connections = heroe.connections;
    },
  },
  created() {
    this.cargarLista();
  },
  mounted() {

  }
});