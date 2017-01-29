
var app = angular.module('AnimeGT', ["ngRoute",'ng-jwplayer','angular-loading-bar']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/welcome.html",
    controller : "WelcomeCtrl"
  })
  .when("/home", {
    templateUrl : "templates/home.html",
    controller : "HomeCtrl"
  })
  .when("/nuevos", {
    templateUrl : "templates/nuevos.html",
    controller : "NuevosCtrl"
  })
  .when("/populares", {
    templateUrl : "templates/populares.html",
    controller : "PopularesCtrl"
  })
  .when("/buscar", {
	templateUrl: 'templates/buscar.html',
	controller: 'BuscarCtrl'
  })
  .when("/generos", {
          templateUrl: 'templates/generos.html',
          controller: 'GenerosCtrl'
  })
  .when("/generos/:genero/:page", {
          templateUrl: 'templates/genero.html',
          controller: 'GeneroCtrl'
  })
  .when("/Anime/:id/:aurl/", {
          templateUrl: 'templates/anime.html',
          controller: 'AnimeCtrl'
  })
  .when("/Ver/:id/:aurl/:eurl/", {
        templateUrl: 'templates/ver.html',
        controller: 'VerCtrl'
  });

});

app.factory('MyFunctions', function() {
       return {
           utf8_decode: function(strData){
             var tmpArr = []
             var i = 0
             var c1 = 0
             var seqlen = 0

             strData += ''

             while (i < strData.length) {
               c1 = strData.charCodeAt(i) & 0xFF
               seqlen = 0

               if (c1 <= 0xBF) {
                 c1 = (c1 & 0x7F)
                 seqlen = 1
               } else if (c1 <= 0xDF) {
                 c1 = (c1 & 0x1F)
                 seqlen = 2
               } else if (c1 <= 0xEF) {
                 c1 = (c1 & 0x0F)
                 seqlen = 3
               } else {
                 c1 = (c1 & 0x07)
                 seqlen = 4
               }

               for (var ai = 1; ai < seqlen; ++ai) {
                 c1 = ((c1 << 0x06) | (strData.charCodeAt(ai + i) & 0x3F))
               }

               if (seqlen === 4) {
                 c1 -= 0x10000
                 tmpArr.push(String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF)))
                 tmpArr.push(String.fromCharCode(0xDC00 | (c1 & 0x3FF)))
               } else {
                 tmpArr.push(String.fromCharCode(c1))
               }

               i += seqlen
             }

             return tmpArr.join('')
           }
       };
   });
