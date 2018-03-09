angular.module('selfware').controller('UserController',
  [ 'mainService',
    function (mainService) {
      this.userId = 'id';
      this.type = 'teacher';

      this.behaviours = [
        { name: 'tag1', code: 1 },
        { name: 'tag2', code: 2 },
        { name: 'tag3', code: 3 },
        { name: 'tag4', code: 4 }
      ];



    }
  ]);
