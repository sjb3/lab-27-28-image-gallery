'use strict';

const angular = require('angular');
angular.module('galleryApp')
.directive('appThumbItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./thumb-item.html'),
    scope: {
      image: '='
    }
  };
});
