angular.module('selfware').factory('mainService',
  ['httpRequestService',
    function(httpRequestService) {
      return {
        login: (usr, psw) => {
          var data = {
            email: usr,
            password: psw
          };

          return httpRequestService.defaultRequest('POST', `login`, data);
        }

      };
    }]);
