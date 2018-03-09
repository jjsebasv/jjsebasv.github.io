'use strict';

angular.module('selfware').config(['$translateProvider', function ($translateProvider) {

  $translateProvider.translations('en', {
    I_AM: 'I am',
    STUDENT_AM_I: ', and I\'m a student',
    TEACHER_AM_I: ', and I\'m a teacher',
    ADD_SELFWARE_TEACHER: 'I would like to help my students work with',
    ADD_SELFWARE_STUDENT: 'I would like to work on'

  });

  $translateProvider.translations('es', {
    I_AM: 'Soy',
    STUDENT_AM_I: ', y soy alumno',
    TEACHER_AM_I: ', y soy profesor',
    ADD_SELFWARE_TEACHER: 'Me gustaría ayudar a mis alumnos a trabajar con',
    ADD_SELFWARE_STUDENT: 'Me gustaría trabajar en'

  });
}]);
