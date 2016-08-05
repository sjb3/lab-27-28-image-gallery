'use strict';

const angular = require('angular');
angular.module('galleryApp')
.directive('appListItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: './list-item.html',
    scope: {
      image: '='
    }
  };
});
