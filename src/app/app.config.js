angular.module('selfware').config([
  'localStorageServiceProvider', '$httpProvider',
  function (localStorageServiceProvider, $httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('selfware-/* @echo environment */'));
  }
]);
