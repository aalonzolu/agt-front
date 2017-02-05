
app.controller('WelcomeCtrl', function ($scope, $routeParams,MyFunctions) {
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }

});
app.controller('HomeCtrl', function ($scope, $routeParams,MyFunctions) {
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }

});

app.controller('NuevosCtrl', function ($scope, $routeParams, $http,MyFunctions) {
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }

  $http.get("https://api.animegt.net/new")
  .then(function(response) {
      $scope.nuevos = response.data;

  });
});


app.controller('PopularesCtrl', function ($scope, $routeParams,$http,MyFunctions) {
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }

  $http.get("https://api.animegt.net/popular")
  .then(function(response) {
      $scope.populares = response.data;
  });
});

app.controller('VerCtrl', function ($scope, $routeParams, $http,$sce,
                                      MyFunctions) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }
  var url = "https://api.animegt.net/Ver/"+$routeParams.id+"/"+$routeParams.aurl+"/"+$routeParams.eurl+"/";
  $scope.url = url;
  $scope.name = 'AnimeGT Player';

   $scope.options = {
        type: 'mp4',
   };
  $http.get(url).then(function(response) {
      $scope.episodio = response.data;
         $scope.file =  $sce.trustAsResourceUrl($scope.episodio.videos[0].url);
  });

  $scope.onSelected = function(video){
	$scope.file  =  $sce.trustAsResourceUrl(video.url);
  }
});

app.controller('AnimeCtrl', function ($scope, $routeParams,$http,$sce,MyFunctions) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }
  var url = "https://api.animegt.net/Anime/"+$routeParams.id+"/"+$routeParams.aurl+"/";
  $scope.url = url;
  $http.get(url)
  .then(function(response) {
      $scope.anime = response.data;
  });
});
app.controller('GenerosCtrl', function ($scope, $routeParams, $http,$sce,MyFunctions) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }
  $scope.generos = [{"link":"romance","name":"Romance"},{"link":"Sci-Fi","name":"Sci-Fi"},{"link":"accion","name":"Acción"},{"link":"aventura","name":"Aventura"},{"link":"carreras","name":"Carreras"},{"link":"ciencia-ficcion","name":"Ciencia Ficción"},{"link":"comedia","name":"Comedia"},{"link":"dementia","name":"Dementia"},{"link":"demonios","name":"Demonios"},{"link":"deportes","name":"Deportes"},{"link":"drama","name":"Drama"},
{"link":"Dub","name":"Dub"},{"link":"ecchi","name":"Ecchi"},{"link":"escolares","name":"Escolares"},{"link":"especial","name":"Especial"},{"link":"fantasia","name":"Fantasía"},{"link":"harem","name":"Harem"},{"link":"historical","name":"Historical"},{"link":"horror","name":"Horror"},{"link":"josei","name":"Josei"},{"link":"juego","name":"Juego"},{"link":"kids","name":"Kids"},{"link":"magia","name":"Magia"},{"link":"martial-arts","name":"Martial Arts"},
{"link":"musica","name":"Música"},{"link":"mecha","name":"Mecha"},{"link":"militar","name":"Militar"},{"link":"misterio","name":"Misterio"},{"link":"Movie","name":"Movie"},{"link":"ONA","name":"ONA"},{"link":"ova","name":"OVA"},{"link":"parodias","name":"Parodias"},{"link":"pelicula","name":"Pelicula"},{"link":"policia","name":"Policía"},{"link":"psicologico","name":"Psicológico"},{"link":"recuentos-de-la-vida","name":"Recuentos de la Vida"},{"link":"samurai","name":"Samurai"},
{"link":"seinen","name":"Seinen"},{"link":"shojo","name":"Shojo"},{"link":"shojo-ai","name":"Shojo Ai"},{"link":"shonen","name":"Shonen"},{"link":"short","name":"Short"},{"link":"shounen-ai","name":"Shounen Ai"},{"link":"sobrenatural","name":"Sobrenatural"},{"link":"space","name":"Space"},{"link":"super-power","name":"Super Power"},{"link":"Thriller","name":"Thriller"},{"link":"vampiros","name":"Vampiros"},{"link":"yuri","name":"Yuri"}];
});


app.controller('GeneroCtrl', function ($scope, $routeParams,$http,$sce,MyFunctions,$filter) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }
  // vars
  $scope.page =$routeParams.page;
   $scope.elementos = [];
   $scope.canLoadmore = false;

  $scope.generos = [{"link":"romance","name":"Romance"},{"link":"Sci-Fi","name":"Sci-Fi"},{"link":"accion","name":"Acción"},{"link":"aventura","name":"Aventura"},{"link":"carreras","name":"Carreras"},{"link":"ciencia-ficcion","name":"Ciencia Ficción"},{"link":"comedia","name":"Comedia"},{"link":"dementia","name":"Dementia"},{"link":"demonios","name":"Demonios"},{"link":"deportes","name":"Deportes"},{"link":"drama","name":"Drama"},
{"link":"Dub","name":"Dub"},{"link":"ecchi","name":"Ecchi"},{"link":"escolares","name":"Escolares"},{"link":"especial","name":"Especial"},{"link":"fantasia","name":"Fantasía"},{"link":"harem","name":"Harem"},{"link":"historical","name":"Historical"},{"link":"horror","name":"Horror"},{"link":"josei","name":"Josei"},{"link":"juego","name":"Juego"},{"link":"kids","name":"Kids"},{"link":"magia","name":"Magia"},{"link":"martial-arts","name":"Martial Arts"},
{"link":"musica","name":"Música"},{"link":"mecha","name":"Mecha"},{"link":"militar","name":"Militar"},{"link":"misterio","name":"Misterio"},{"link":"Movie","name":"Movie"},{"link":"ONA","name":"ONA"},{"link":"ova","name":"OVA"},{"link":"parodias","name":"Parodias"},{"link":"pelicula","name":"Pelicula"},{"link":"policia","name":"Policía"},{"link":"psicologico","name":"Psicológico"},{"link":"recuentos-de-la-vida","name":"Recuentos de la Vida"},{"link":"samurai","name":"Samurai"},
{"link":"seinen","name":"Seinen"},{"link":"shojo","name":"Shojo"},{"link":"shojo-ai","name":"Shojo Ai"},{"link":"shonen","name":"Shonen"},{"link":"short","name":"Short"},{"link":"shounen-ai","name":"Shounen Ai"},{"link":"sobrenatural","name":"Sobrenatural"},{"link":"space","name":"Space"},{"link":"super-power","name":"Super Power"},{"link":"Thriller","name":"Thriller"},{"link":"vampiros","name":"Vampiros"},{"link":"yuri","name":"Yuri"}];

$scope.getData = function(page){
    var url = "https://api.animegt.net/genere/"+$routeParams.genero+"/"+page;
    $http.get(url)
    .then(function(response) {
        //$scope.elementos = response.data.results;
        $scope.elementos  = response.data.results;
        $scope.data = response.data;
        $scope.genero = single_object.name;
        $scope.canLoadmore = true;
    });
  }
  $scope.nextPage = function(){
    if($scope.canLoadmore){
    $scope.elementos = [];
    var Page = parseInt($scope.page) +1;
    $scope.page= Page;
    $scope.getData(Page);
    }
  }
  $scope.prevPage = function(){
    var Page = parseInt($scope.page) -1;
    if(Page>0){
      $scope.elementos = [];
      $scope.page= Page;
      $scope.getData(Page);
    }
  }



single_object = $filter('filter')($scope.generos, function (d) {return d.link == $routeParams.genero; })[0];

$scope.getData($scope.page);

});





app.controller('BuscarCtrl', function ($scope, $routeParams, $http,$sce,MyFunctions,$filter) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.normalizar  = function(texto){
    return MyFunctions.utf8_decode(texto);
  }
  $scope.buscar = {termino: ""};
  // vars
  $scope.page =$routeParams.page;
   $scope.elementos = [];

$scope.getData = function(query){
    var url = "https://api.animegt.net/search/"+query
    $http.get(url)
    .then(function(response) {
        //$scope.elementos = response.data.results;
        $scope.elementos  =response.data;
    });
  }
  $scope.schanged = function(){
    if($scope.buscar.termino.length>3){
      $scope.getData($scope.buscar.termino)
    }
    else{
      console.log($scope.buscar.termino.length);
      console.log($scope.buscar.termino);
    }
  }
//$scope.getData($scope.page);

});
