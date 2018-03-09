'use strict';

angular.module('selfware').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {
    PICK_BEHAVIOURS: 'Please pick behaviours you would like to track',
    NO_SELFWARES: 'You haven\'t created selfwares yet'
  });

  $translateProvider.translations('es', {
    PICK_BEHAVIOURS: 'Por favor elige los comportamientos que quieres seguir',
    NO_SELFWARES: 'Todavía no has creado selfwares'
  });
}]);
