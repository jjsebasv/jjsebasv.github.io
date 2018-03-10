angular.module('selfware').controller('LandingController',
  [ 'mainService',
    function (mainService) {
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
              debugger
          }).catch();

      }
    }
  ]);
