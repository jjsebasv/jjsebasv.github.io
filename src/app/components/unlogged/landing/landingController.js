angular.module('selfware').controller('LandingController',
  [ 'mainService',
    function (mainService) {
      this.state = 'login';
      /*mainService.getTest().then(
        (result) => {
          debugger
          console.log('done');
          this.helloWorld = result;
        }
      ).catch(
        (error) => {
          debugger
          console.log('not done');
        }
      );
      */
    }
  ]);
