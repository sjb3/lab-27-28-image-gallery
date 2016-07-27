'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appEditGalleryItemForm', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      title: '=', // bind one scope to this scope
      desc: '='
    },
    template: require('./app-edit-gallery-item-form.html')
  };
});
