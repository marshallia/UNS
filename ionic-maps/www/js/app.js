
angular.module('ionic-maps', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.controller('backCtrl',function($scope,$ionicHistory){
  $scope.mygoback=function(){
    $ionicHistory.goback();
  };
})

.controller('facultyCtrl',function($scope, facultyService){
$scope.fakultas=facultyService.getfakultas(); 

})

.controller('facultyDetailsCtr',function($scope,$stateParams, facultyService){
$scope.fakultas=facultyService.getfacultass($stateParams.idfakultas);
})


.service('facultyService',function(){
  return{
    fakultas:[
      {
        id: "1",
        nama:"MIPA",
        informasi:"fakultas mipa berdiri sejak ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
      },
      {
        id: "2",
        nama:"Teknik",
        programstudi:"",
        map:"",
        informasi:"fakultas teknik berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
       
      },
      {
        id: "3",
        nama:"Kedokteran",
        programstudi:"",
        map:"",
        informasi:"fakultas kedokteran berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
       
      },
       {
        id: "4",
        nama:"Pertanian",
        programstudi:"",
        map:"",
        informasi:"fakultas pertanian berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."

       
      },
      {
        id: "5",
        nama:"HUKUM",
        programstudi:"",
        map:"",
        informasi:"fakultas HUKUM berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
        
      },
      {
        id: "6",
        nama:"FISIP",
        programstudi:"",
        map:"",
        informasi:"fakultas FISIP berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
        
      },
      {
        id: "7",
        nama:"EKONOMi",
        programstudi:"",
        map:"",
        informasi:"fakultas ekonomi berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
        
      },
      {
        id: "8",
        nama:"FIB",
        programstudi:"",
        map:"",
        informasi:"fakultas ilmu budaya berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."
        
      },
      {
        id: "9",
        nama:"FSSR",
        programstudi:"",
        map:"",
        informasi:"fakultas sastra dan seni rupa berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."

       
      },
       {
        id: "10",
        nama:"FKIP",
        programstudi:"",
        map:"",
        informasi:"fakultas keguruan dan ilmu pendidikan berdiri sejak  ggggggggggggg gasdufaer aweao ra oriav oi  eri erirfjjjjj fujfha . fauier au irv aorifuaworfh . ajofia oaie ifjaoiruaoweiruao rjoaewrawf, dfjbfaoub oeriana fieoafnoanoafi."

       
      },
    ],
    getfakultas:function(){
      return this.fakultas;
    },

    getfacultass:function(idfakultas){
      for(i=0;i<this.fakultas.length;i++){
        if(this.fakultas[i].id==idfakultas){
          return this.fakultas[i];
        }
      }
    }
  }
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html'
  })
  .state('faculty', {
      url: '/faculty',
      templateUrl: 'templates/faculty.html',
      controller:'facultyCtrl'
    })
  .state('facultyDetails',{
    url:'/faculty/:idfakultas',
    templateUrl:'templates/facultyDetails.html',
    controller:"facultyDetailsCtr"
  })
    .state('calender', {
      url: '/calender',
      templateUrl: 'templates/calender.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    })
    .state('library', {
      url: '/library',
      templateUrl: 'templates/library.html'
    })
    .state('maps', {
      url: '/maps',
      templateUrl: 'templates/maps.html',
      controller:'MapCtrl'
    })
    .state('news', {
      url: '/news',
      templateUrl: 'templates/news.html'
    })
    .state('siakad', {
      url: '/siakad',
      templateUrl: 'templates/siakad.html'
    })
    .state('sibea', {
      url: '/sibea',
      templateUrl: 'templates/sibea.html'
    })
      .state('tour', {
      url: '/tour',
      templateUrl: 'templates/tour.html',
      controller:'IntroCtrl'
    })

  ;
  $urlRouterProvider.otherwise('/home');
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
 $scope.tour=[
  {
    foto:"img/images (5).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (6).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (7).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (8).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (9).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (10).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (11).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (13).jpg",
    nama:"",
    informasi:""
  },
  {
    foto:"img/images (14).jpg",
    nama:"Kampus Mesem",
    informasi:"Kampus II UNS, kampus nya anak psikologi. biarpun terpisah UNS tetap di hati"
  }
  ];

  $scope.startApp = function() {
  $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
$scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  
  
})

.service('checkpos', function(){
  return {
    position:[
      {
        lat1: 55.9879314,
        long1: -4.3042387,
        lat2: 55.8934378,
        long2: -4.2201905
      },
    ],
    getPos:function(){
      console.log("YEY");
      console.log(this.position[0].lat1);
      return this.position[0];
    },
  }
  
  // position = {};
  // position.lat1: 55.9879314;
  // position.long1: -4.3042387;
  // position.lat2: 55.8934378;
  // position.long2: -4.2201905;
  // return position;
})

.controller('refreshController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(-7.5617641, 110.8540226);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
});

