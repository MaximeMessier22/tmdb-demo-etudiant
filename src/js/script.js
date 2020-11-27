
document.addEventListener("DOMContentLoaded", function (){


    let connexion = new MovieDB();

    connexion.requeteDernierFilm();

})



class MovieDB {

    constructor() {


        console.log("Construteur");


        this.APIkey = "cfe1f8e7079a7291db328fd68e494c1d";

        this.lang = "fr-CA";

        this.BaseURL = "https://api.themoviedb.org/3";

        this.imgPath ="https://image.tmdb.org/t/p/";

        this.totalFilm = 8;


    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest();

        requete.addEventListener("loadend", this.retourRequeteDernierFilm.bind(this) );

        //requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=cfe1f8e7079a7291db328fd68e494c1d&language=fr-CA&page=1");//
       requete.open("GET", this.BaseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" +  this.lang +  "&page=1");

        requete.send();
    }
    retourRequeteDernierFilm(e){

        console.log("HEllo");


        let target = e.currentTarget;

        let data;

        data = JSON.parse(target.responseText).results;

        this.afficheDernierFilm(data);


    }

    afficheDernierFilm(data){

        for (let i = 0; i < data.length; i++) {



        }



    }
}
