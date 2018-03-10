angular.module('selfware').factory('userService',
  ['httpRequestService',
    function(httpRequestService) {
      return {
        login: (usr, psw) => {
          var data = {
            email: usr,
            password: psw
          };

          return httpRequestService.defaultRequest('POST', `login`, data);
        },

        getPossibleBehaviours: () => {
          return httpRequsestService.defaultRequest('GET', `behaviours`, null);
        },

        addBehaviour: (usrid, bhid) => {
          var data = {
            user_id: usrid;
            behaviour_id: bhid
          };

          return httpRequestService.defaultRequest('POST', 'add_behaviour', data);
        },

        getPersonalizedSuggestions: (usrid) => {
          return httpRequestService.defaultRequest('GET', `${usrid}/suggestions`, null);
        },

        pickSuggestion: (usrid, sid) => {
          var data = {
            user_id: usrid,
            suggestion_id: sid
          };

          return httpRequestService.defaultRequest('POST', 'pick_suggestion', data);
        },

        getUserSuggestions: (usrid) => {
          return httpRequestService.defaultRequest('GET', `${usrid}/get_suggestions`, null):
        },

        getUserObjectives: (usrid, usertype) => {
          if (type === 'student') {
            return httpRequestService.defaultRequest('GET', `${usrid}/getObjectives`, null):
          } else {
            return httpRequestService.defaultRequest('GET', `${usrid}/get_behaviours`, null):
          }
        },

        rankSugestion: (usrid, sid, bid, rank) => {
          var data = {
            user_id: usrid,
            suggestion_id: sid,
            behaviour: bid,
            ranking: rank
          };

          return httpRequestService.defaultRequest('POST', 'rank_suggestion', data);
        },

        addSuggestion: (title, description, bname, usrid) => {
          var data = {
            suggestion_title: title,
            suggestion_description: description,
            behaviour_name: bname,
            user_id: usrid
          };

          return httpRequestService.defaultRequest('POST', 'add_suggestion', data);
        }

      };
    }]);
