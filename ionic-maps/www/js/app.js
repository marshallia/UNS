angular.module('starter', ['ionic'])
angular.module('ionic-maps', ['ionic'])

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
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
 
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
 
  .state('faculty', {
    url: '/faculty',
    templateUrl: 'templates/faculty.html'
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
      templateUrl: 'templates/maps.html'
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
      templateUrl: 'templates/tour.html'
    })
  ;

  $urlRouterProvider.otherwise('/home');
})

.controller("MainCtrl", function($scope, $ionicSlideBoxDelegate) {

    $scope.images = [url:'img/book.png'];
        
         setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
       
    
    
})