
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpe1xyXG5cclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTtcclxuXHJcbiAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29uc3RydXRldXJcIik7XHJcblxyXG5cclxuICAgICAgICB0aGlzLkFQSWtleSA9IFwiY2ZlMWY4ZTcwNzlhNzI5MWRiMzI4ZmQ2OGU0OTRjMWRcIjtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5nID0gXCJmci1DQVwiO1xyXG5cclxuICAgICAgICB0aGlzLkJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuXHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID1cImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsRmlsbSA9IDg7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlRGVybmllckZpbG0oKXtcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVEZXJuaWVyRmlsbS5iaW5kKHRoaXMpICk7XHJcblxyXG4gICAgICAgIC8vcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PWNmZTFmOGU3MDc5YTcyOTFkYjMyOGZkNjhlNDk0YzFkJmxhbmd1YWdlPWZyLUNBJnBhZ2U9MVwiKTsvL1xyXG4gICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuQmFzZVVSTCArIFwiL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9XCIgKyB0aGlzLkFQSWtleSArIFwiJmxhbmd1YWdlPVwiICsgIHRoaXMubGFuZyArICBcIiZwYWdlPTFcIik7XHJcblxyXG4gICAgICAgIHJlcXVldGUuc2VuZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0b3VyUmVxdWV0ZURlcm5pZXJGaWxtKGUpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhFbGxvXCIpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGRhdGE7XHJcblxyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcblxyXG4gICAgICAgIHRoaXMuYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZURlcm5pZXJGaWxtKGRhdGEpe1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
