'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    replace: true,
    template: require('./app-gallery-item.html'),
    scope: {
      image: '='
    }
  };
});
