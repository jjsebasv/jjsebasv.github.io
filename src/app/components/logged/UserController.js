angular.module('selfware').controller('UserController',
  ['$rootScope', '$state', 'userService', 'siteConstants', 'localStorageService',
    function ($rootScope, $state, userService, siteConstants, localStorageService) {
      this.user = localStorageService.get('user');
      if ($rootScope.user === undefined || $rootScope.user === null) {
        this.user = $rootScope.user;
        this.user.behaviours = [];
        //$state.go('unlogged.landing')
      } else {
        //this.user = localStorageService.get('user');
        this.user = $rootScope.user;
        this.user.behaviours = [];
      }

      this.type = this.user.type;

      this.gotoSuggestions = () => {
        this.suggestions = true;
        this.newSuggestion = false;
        $state.go('logged.suggestions')
      };

      this.gotoNewSuggestions = () => {
        this.suggestions = false;
        this.newSuggestion = true;
        $state.go('logged.newsuggestion')
      };

      const newSuggestion = () => {
        return {
          user_id: '',
          suggestion_title: '',
          suggestion_description: '',
          suggestion_behaviour: ''
        }
      };

      this.newSuggestion = newSuggestion();

      this.addSuggestion = () => {
        userService.addSuggestion(newSuggestion.suggestion_title, newSuggestion.suggestion_behaviour, newSuggestion.suggestion_behaviour.name, this.user.user_id).then(
          () => {
              this.suggestions = false;
          }).catch(
            () => {
              this.suggestions = false;
            });
      };

      userService.getPossibleBehaviours().then(
        (response) => {
          this.behaviours = response.data;
        }).catch(
          () => {
            this.behaviours = siteConstants.getBehaviours.data;
          }
        );

      this.selectBehaviour = (behaviourid) => {
        userService.addBehaviour(this.user.id,behaviourid).then(
        ).catch();
        this.user.behaviours.push(behaviourid);
        $rootScope.user = this.user;
        localStorageService.set('user', this.user);
      };

      this.behaviourBelongs = (behaviourid) => {
        this.user.behaviours.forEach((b) => {
          if (b.behaviour_id === behaviourid)
        })
      }

      this.selectSuggestion = (suggestionid) => {
        userService.addSuggestion(this.user.id, suggestionid).then(
        ).catch();
      };

      this.logout = () => {
        $rootScope.user = null;
        $state.go('unlogged.landing');
      };

      this.rank = (suggestion, objective, rank) => {
        userService.rankSugestion(this.user.id, suggestion.id, objective.id, rank)
      };

    }
  ]);
