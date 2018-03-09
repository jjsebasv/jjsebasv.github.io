'use strict';

angular.module('selfware').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {
    WELCOME: 'Welcome to Platform',
    WELCOME_LOGIN: 'Full in your information to login',
    WELCOME_REGISTER: 'Full in your information to register',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    NAME: 'Name'

  });

  $translateProvider.translations('es', {
    WELCOME: 'Bienvenidos a la plataforma',
    WELCOME_LOGIN: 'Completa tus datos para iniciar sesión',
    WELCOME_REGISTER: 'Completa tus datos para registrarte',
    WELCOME_LOGIN: 'Full in your information to login',
    EMAIL: 'Mail',
    PASSWORD: 'Contraseña',
    NAME: 'Nombre'
  });
}]);
