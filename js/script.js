var main = new Vue({
  el: "#content",
  data: {
    url: "https://superheroapi.com/api.php/630240554391029/",
    nombre: ".full-name"
  },
  methods: {
    async saludar() {
      var resultado = await axios.get(this.url+1);
      console.log(resultado.data.image.url);
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
    }
  },
  created() {

  },
  mounted() {

  }
})