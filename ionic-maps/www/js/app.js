
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
        nama:"Matematika dan Ilmu Pengetahuan Alam",
        latkan: -7.5589456,
        longkan: 110.8548273,
        latmus: 0,
        longmus: 0,
        info: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Universitas Sebelas Maret (UNS) diresmikan pada tanggal 2 Mei 1997 yang terdiri dari empat jurusan, yaitu Matematika, Kimia, Biologi dan Fisika. Jurusan Matematika FMIPA UNS merupakan embrio berdirinya FMIPA UNS yang mulai dirintis sejak tahun 1982. Faktor yang mendorong berdirinya FMIPA UNS adalah adanya kenyataan bahwa dalam rangka peningkatan pelaksanaan pembangunan nasional diperlukan pengembangan ilmu pengetahuan, teknologi dan seni (IPTEKS), yang berbasis pada ilmu-ilmu dasar (Basic Sciences) yang menjadi dasar pengembangan teknologi.",
        prodi: "S1 Matematika, S1 Fisika, S1 Kimia, S1 Biologi, S1 Informatika, S1 Farmasi, S1 Statistika, D3 Teknik Informatika, D3 Farmasi"
        
      },
      {
        id: "2",
        nama:"Teknik",
        programstudi:"",
        latkan: -7.5603615,
        longkan: 110.8538084,
        latmas: 0,
        longmus: 0,
        info: "Fakultas Teknik UNS berdiri sejak tanggal 11 Maret 1976, bersamaan dengan berdirinya Universitas Sebelas Maret. Sampai dengan Tahun Akademik 2011/2012 jumlah mahasiswa terdaftar di Fakultas Teknik Universitas Sebelas Maret sebanyak 2.793 mahasiswa terdiri atas Program S-1 Reguler 1.617 mahasiswa, program S-1 Non Reguler 146 mahasiswa, program S-1 Swadana Transfer 220 mahasiswa dan program Diploma sebanyak 677 mahasiswa.",
        prodi: "S1 Teknik Sipil, S1 Arsitektur, S1 Teknik Mesin, S1 Teknik Industri, S1 Teknik Kimia, S1 Perencanaan Wilayah dan Kota, S1 Teknik Elektro"
        
       
      },
      {
        id: "3",
        nama:"Kedokteran",
        programstudi:"",
        latkan: 0,
        longkan: 0,
        latkan: 0,
        longmus: 0,
        info: "Fakultas Kedokteran Universitas Sebelas Maret (FK UNS) didirikan pada tahun 1976, bersamaan dengan berdirinya Universitas Negeri Surakarta Sebelas Maret yang dikukuhkan dengan Keputusan Presiden RI Nomor : 10 Tahun 1976. Fakultas Kedokteran Universitas Sebelas Maret dilihat dari aspek sejarah merupakan gabungan dari Fakultas Kedokteran Perguruan Tinggi Pembangunan Nasional (PTPN) Veteran Surakarta dan Fakultas Kedokteran Universitas Islam Indonesia Cabang Surakarta. Setelah Universitas Sebelas Maret didirikan pada 11 Maret 1976, maka nama FK UNS ini resmi dikenal.",
        prodi: "S1 Kedokteran, S1 Psikologi, D3 Kebidanan, D4 Bidan Pendidik, D3 Hiperkes & Keselamatan, D4 Kesehatan Kerja"
        
       
      },
       {
        id: "4",
        nama:"Pertanian",
        programstudi:"",
        latkan: -7.561441,
        longkan: 110.8576627,
        latmus: 0,
        longmus: 0,
        info: "Fakultas Pertanian Universitas Sebelas Maret, Surakarta semula berasal dari Fakultas Pertanian Universitas Swasta yang tergabung dalam Universitas Gabungan Surakarta. Pada awal kelahirannya Fakultas Pertanian UNS mempunyai dua Jurusan  yaitu : Jurusan Budidaya Pertanian (BP)  dan Sosial Ekonomi Pertanian (Sosek). Jurusan Budidaya Pertanian (BP) mempunyai dua program studi yaitu Agronomi dan Ilmu Tanah, sedangkan Sosial Ekonomi Pertaian (Sosek) mempunyai dua program studi yaitu Ekonomi Pertanian dan Sosiologi Pedesaan. Fakultas Pertanian UNS telah mengembangkan dan menghasilkan berbagai produk antara lain berupa benih dan tanaman unggul, bibit hasil kultur jaringan, pupuk organik / anorganik, produk herbal dan berbagai jenis minuman dan makanan olahan.",
        prodi: "S1 Agroteknologi, S1 Ilmu Tanah, S1 Agribisnis, S1 Peternakan, S1 Ilmu dan Teknologi Pangan, S1 PKP, D3 Agribisnis, D3 Teknologi Hasil Peternakan"
        

       
      },
      {
        id: "5",
        nama:"Hukum",
        programstudi:"",
        latkan: 0,
        longkan: 0,
        latmus: 0,
        longmus: 0,
        info: "Pada awal berdirinya Fakultas Hukum UNS dibuka dengan tiga jurusan, yakni: Jurusan Hukum Keperdataan, Jurusan Hukum Pidana, Jurusan Hukum Tata Negara. Namun, saat ini Fakultas Hukum mempunyai 1 (satu) pro­gram studi saja yaitu Program Studi Ilmu Hukum, dengan 7 Bagian yaitu Bagian Hukum Keperdataan, Bagian Hukum dan Masyarakat, Bagian Hukum Acara, Bagian Hukum Administrasi Negara, Bagian Hukum Tata Negara, Bagian Hukum Pidana dan Bagian Hukum Internasional.",
        prodi: "S1 Hukum"
        
        
      },
      {
        id: "6",
        nama:"Ilmu Sosial dan Ilmu Politik",
        programstudi:"",
        latkan: 0, 
        longkan: 0, 
        latmus: 0,
        longmus: 0,
        info: "Fakultas Ilmu Sosial dan Ilmu Politik Universitas Sebelas Maret (FISIP-UNS) didirikan pada tahun 1976, bersamaan dengan berdirinya Universitas Negeri Surakarta Sebelas Maret yang dikukuhkan dengan Keputusan Presiden RI Nomor : 10 Tahun 1976. Pada saat berdiri nama FISIP-UNS adalah Fakultas Ilmu Sosial dan Politik dan memiliki dua jurusan, yaitu Jurusan Administrasi Negara dan Jurusan Publisistik. Sekarang, FISIP UNS semakin berkembang dengan adanya prodi - prodi baru. ",
        prodi : "S1 Ilmu Administrasi, S1 Ilmu Komunikasi, S1 Sosiologi, S1 Hubungan Internasional, D3 Komunikasi Terapan, D3 Manajemen Administrasi, D3 Perpustakaan"
        
        
      },
      {
        id: "7",
        nama:"Ekonomi dan Bisnis",
        programstudi:"",
        latkan: -7.5588467,
        longkan: 110.8512508,
        latmus: 0,
        longmus: 0,
        info: "Fakultas Ekonomi Universitas Sebelas Maret Surakarta lahir bersamaan dengan diresmikannya Universitas Sebelas Maret.",
        prodi: "S1 Akuntansi, S1 Manajemen, S1 Ekonomi Pembangunan,D3 Keuangan Perbankan, D3 Perpajakan, D3 Manajemen Perdagangan, D3 Manajemen Pemasaran, D3 Manajemen Bisnis, D3 Akuntansi Keuangan"
        
        
      },
      {
        id: "8",
        nama:"Ilmu Budaya",
        programstudi:"",
        latkan: 0,
        longkan: 0,
        latmus: 0,
        longmus: 0, 
        info: "Sebelumnya, FIB UNS merupakan bagian dari FSSR UNS. Namun pada tahun 2014 akhirnya tata kelola Fakultas Sastra dan Seni Rupa UNS diubah dan disesuaikan berdasarkan ranah keilmuan masing-masing menjadi Fakultas Ilmu Budaya dan Fakultas Seni Rupa dan Desain UNS.",
        //prod: ['S1 Sastra Daerah, S1 Sastra Indonesia, S1 Sastra Inggris'],
        prodi: "S1 Sastra Daerah, S1 Sastra Indonesia, S1 Sastra Inggris, S1 Ilmu Sejarah, S1 Sastra Arab, D3 Bahasa Inggris, D3 Usaha Perjalanan Wisata, D3 Bahasa China"
      },
      {
        id: "9",
        nama:"Sastra dan Seni Rupa",
        programstudi:"",
        latkan: -7.5595061,
        longkan: 110.8564402,
        latmus: 0,
        longmus: 0,
        info: "Fakultas Seni Rupa dan Desain (FSRD) berdiri pada 20 Agustus 2014 yang semulanya masih tergabung dengan FSSR UNS. Dengan dipecahnya FSSR UNS menjadi FIB dan FSRD, maka FSRD menjadi fakultas kesepuluh yang dimiliki Universitas Sebelas Maret (UNS) Solo saat ini.",
        prodi: "S1 Desain Interior, S1 Desain Komunikasi Visual, S1 Seni Rupa Murni, S1 Kriya Seni, D3 Desain Komunikasi Visual"
        

       
      },
       {
        id: "10",
        nama:"Keguruan dan Ilmu Pendidikan",
        programstudi:"",
        latkan: -7.561552,
        longkan: 110.7880692,
        latmus: 0,
        longmus: 0,
        info: "Fakultas Keguruan dan Ilmu Pendidikan UNS adalah cikal bakal berdirinya Universitas Sebelas Maret yang sekarang. Berdasarkan Surat Keputusan Presiden RI NO. 10 tahun 1976 tertanggal 8 Maret 1976, IKIP negeri Surakarta, STO Negeri Surakarta, Akademi Administrasi Niaga (AAN) Surakarta dan Fakultas Kedokteran Perguruan Tinggi Pembangunan Nasional Veteran (PTPN). Cabang Surakarta yang semula berhimpun dalam Universitas Gabungan Surakarta kemudian menjelma menjadi Universitas Negeri Surakarta Sebelas Maret (UNS). IKIP Negeri Surakarta dan STO Negeri Surakarta menjadi Fakultas Keguruan dan Fakultas Ilmu Pendidikan (FIP). Selanjutnya pada tahun 1982 nama tersebut berubah menjadi Universitas Sebelas Maret (UNS), Fakultas Keguruan dan Fakultas Ilmu Pendidikan (FIP) bergabung menjadi Fakultas Keguruan dan Ilmu Pendidikan (FKIP). FKIP merupakan fakultas yang memiliki jumlah prodi terbanyak di antara fakultas lainnya. "
        

       
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
    .state('dev', {
      url: '/developer',
      templateUrl: 'templates/dev.html'
    })
      .state('tour', {
      url: '/tour',
      templateUrl: 'templates/tour.html',
      controller:'IntroCtrl'
    })
    .state('mapKantin', {
      url: '/kantin/:idfakultas',
      templateUrl: 'templates/maploc.html',
      controller:  'mapKantin'
    })
    .state('mapMushola', {
      url: '/mushola/:idfakultas',
      templateUrl: 'templates/maploc2.html',
      controller:  'mapMushola'
    })

  ;
  $urlRouterProvider.otherwise('/home');
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
})

.controller('mapKantin',function($scope,$stateParams,$state,$cordovaGeolocation,$compile,facultyService){
  $scope.fakultas=facultyService.getfacultass($stateParams.idfakultas);
  console.log($stateParams.idfakultas);
  //var positions = {};
  console.log($scope.fakultas.latkan);
  console.log($scope.fakultas.longkan);
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var curPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var kantin = new google.maps.LatLng($scope.fakultas.latkan,$scope.fakultas.longkan);

    var mapOptions = {
      center: curPos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: kantin,
      map: map,
      title: 'Kantin'
    });
    
    var hospitalRoute = new google.maps.Marker({
      position: curPos,
      map: map,
      title: 'Posisi anda'
    });
    
    var infowindow = new google.maps.InfoWindow({
         content:"Kantin"
    });

    infowindow.open(map,marker);
    
    var hospitalwindow = new google.maps.InfoWindow({
         content:"Posisi anda"
    });

    hospitalwindow.open(map,hospitalRoute);
   
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
        origin : kantin,
        destination : curPos,
        travelMode : google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    directionsDisplay.setMap(map); 
   
  

  //google.maps.event.addDomListener(window, 'load', initialize);  


  }, function(error){
    console.log("Could not get location");
  });
})

.controller('mapMushola',function($scope,$stateParams,$state,$cordovaGeolocation,$compile,facultyService){
  $scope.fakultas=facultyService.getfacultass($stateParams.idfakultas);
  console.log($stateParams.idfakultas);
  //var positions = {};
  console.log($scope.fakultas.latmus);
  console.log($scope.fakultas.longmus);
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var curPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mushola = new google.maps.LatLng($scope.fakultas.latmus,$scope.fakultas.longmus);

    var mapOptions = {
      center: curPos,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: mushola,
      map: map,
      title: 'Mushola'
    });
    
    var hospitalRoute = new google.maps.Marker({
      position: curPos,
      map: map,
      title: 'Posisi anda'
    });
    
    var infowindow = new google.maps.InfoWindow({
         content:"Mushola"
    });

    infowindow.open(map,marker);
    
    var hospitalwindow = new google.maps.InfoWindow({
         content:"Posisi anda"
    });

    hospitalwindow.open(map,hospitalRoute);
   
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
        origin : mushola,
        destination : curPos,
        travelMode : google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    directionsDisplay.setMap(map); 
   
  

  //google.maps.event.addDomListener(window, 'load', initialize);  


  }, function(error){
    console.log("Could not get location");
  });
})

