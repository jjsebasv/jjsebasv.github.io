angular.module('selfware').factory('userService',
  ['httpRequestService',
    function(httpRequestService) {
      return {
        getUser: (id) => {
          return httpRequestService.defaultRequest('GET', ``, null);
        }
      };
    }]);
