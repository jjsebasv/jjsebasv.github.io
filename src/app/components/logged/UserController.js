angular.module('selfware').controller('UserController',
  [ 'mainService', '$state',
    function (mainService, $state) {
      this.userId = 'id';
      this.type = 'teacher';
      this.user = {
        name: 'Seb',
        id: 1,
        type: 'student'
      }

      this.suggestions = $state.current.name === 'logged.suggestions';
      this.userSuggestions = [{
        name: 'sname',
        objectives: [{name:'on1'},{name:'on1'},{name:'on1'},{name:'on1'}],
      },{
        name: 'sname',
        objectives: [{name:'on1'},{name:'on1'},{name:'on1'},{name:'on1'}],
      }, {
        name: 'sname',
        objectives: [{name:'on1'},{name:'on1'},{name:'on1'},{name:'on1'}],
      }, {
        name: 'sname',
        objectives: [{name:'on1'},{name:'on1'},{name:'on1'},{name:'on1'}],
      }];

      this.behaviours = [
        { name: 'tag1', code: 1 },
        { name: 'tag2', code: 2 },
        { name: 'tag3', code: 3 },
        { name: 'tag4', code: 4 }
      ];



    }
  ]);
