angular.module('selfware').controller('UserController',
  [ 'mainService',
    function (mainService) {
      this.userId = 'id';
      this.type = 'teacher';
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
