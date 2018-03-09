angular.module('selfware').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('unlogged.landing');
    });

    // Now set up the states
    $stateProvider
      .state('unlogged', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/unlogged/unlogged.html'
          }/*,
          'navbar@centered': {
            templateUrl: '../app/components/centered/navbar.html'
          },
          'sidebar@centered': {
            templateUrl: '../app/components/centered/sidebar.html'
          }
          */
        }
      })
      .state('unlogged.landing', {
        url: '/landing',
        views: {
          content: {
            templateUrl: '../app/components/unlogged/landing/landing.html',
            controller: 'LandingController',
            controllerAs: 'landingCtrl'
          }
        }
      })

      .state('logged', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/logged/logged.html',
            controller: 'UserController',
            controllerAs: 'usrCtr'
          }
        }
      })

      .state('logged.user', {
        url: '/user',
        views: {
          'teacher-content': {
            templateUrl: '../app/components/logged/teacher/teacher.html'
          },
          'student-content': {
            templateUrl: '../app/components/logged/student/student.html'
          }
        }
      })
      // NICE TO HAVE
      .state('logged.doctor', {
        url: '/doctors',
        views: {
          content: {
            templateUrl: '../app/components/logged/doctor/doctors.html'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);