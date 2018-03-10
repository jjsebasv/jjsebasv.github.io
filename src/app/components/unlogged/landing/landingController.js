angular.module('selfware').controller('LandingController',
  [ 'mainService', '$rootScope', 'siteConstants', '$state', 'localStorageService',
    function (mainService, $rootScope, siteConstants, $state, localStorageService) {
      this.state = 'login';
      this.changeState = () => {
        if (this.state === 'login') {
          this.state = 'register';
        } else {
          this.state = 'login'
        }
      }

      this.types = [
        'student',
        'teacher'
        // NTH doctor
      ];

      this.login = () => {
        mainService.login(this.email, this.password).then(
          (response) => {
            $rootScope.user = response.data();
          }).catch(
            () => {
              $rootScope.user = siteConstants.getUser;
              localStorageService.set('user', siteConstants.getUser);
              $state.go('logged.user');
            });

      }
    }
  ]);
