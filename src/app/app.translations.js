angular.module('selfware').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('en', {
      TEST: 'translate test'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
