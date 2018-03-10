'use strict';

angular.module('selfware').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {
    WELCOME: 'Welcome to SelfWare',
    WELCOME_LOGIN: 'Fill in your information to login',
    WELCOME_REGISTER: 'Fill in your information to register',
    REGISTER_CHANGE: 'Register instead',
    LOGIN_CHANGE: 'Log In instead',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    NAME: 'Name'

  });

  $translateProvider.translations('es', {
    WELCOME: 'Bienvenidos a SelfWare',
    WELCOME_LOGIN: 'Completa tus datos para iniciar sesión',
    WELCOME_REGISTER: 'Completa tus datos para registrarte',
    WELCOME_LOGIN: 'Full in your information to login',
    REGISTER_CHANGE: 'Registrarse en lugar',
    LOGIN_CHANGE: 'Entrar en lugar',
    EMAIL: 'Mail',
    PASSWORD: 'Contraseña',
    NAME: 'Nombre'
  });
}]);
