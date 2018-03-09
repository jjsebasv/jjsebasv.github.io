angular.module('selfware').factory('mainService',
  ['httpRequestService',
    function(httpRequestService) {
      return {
        getTest: () => {
          return httpRequestService.defaultRequest('GET', ``, null);
        }
      };
    }]);
