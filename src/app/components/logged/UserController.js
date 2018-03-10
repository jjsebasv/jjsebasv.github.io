angular.module('selfware').controller('UserController',
  ['$rootScope', '$state', 'userService',
    function ($rootScope, $state, userService) {
      if ($rootScope.user === null) {
        $state.go('unlogged.landing')
      } else {
        this.user = $rootScope.user;
      }
      this.type = this.user.type;

      userService.getPossibleBehaviours().then(
        (response) => {
          this.behaviours = response.data;
        }).catch(); // TODO

      this.selectBehaviour = (behaviourid) => {
        userService.addBehaviour(this.user.id,behaviourid).then(
        ).catch();
      };

      this.selectSuggestion = (suggestionid) => {
        userService.addSuggestion(this.user.id, suggestionid).then(
        ).catch();
      };

      this.logout = () => {
        $rootScope.user = null;
        $state.go('unlogged.landing');
      };

    }
  ]);
