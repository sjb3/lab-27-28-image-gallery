'use strict';

const angular = require('angular');
angular.module('galleryApp')
.controller('GalleryController', ['imageService', GalleryController]);

function GalleryController(imageService){
  this.galleryStyle = 'image';

  imageService.addImage({
    title: 'cupCake00',
    desc: 'cupCake00',
    imgUrl: require('../../asset/img/cupcake0.jpg')
  }),
  imageService.addImage({
    title: 'cupCake01',
    desc: 'cupCake01',
    imgUrl: require('../../asset/img/cupcake1.jpg')
  }),
  imageService.addImage({
    title: 'cupCake02',
    desc: 'cupCake02',
    imgUrl: require('../../asset/img/cupcake2.jpg')
  }),
  imageService.addImage({
    title: 'cupCake03',
    desc: 'cupCake03',
    imgUrl: require('../../asset/img/cupcake3.jpg')
  }),
  imageService.addImage({
    title: 'cupCake04',
    desc: 'cupCake04',
    imgUrl: require('../../asset/img/cupcake4.jpg')
  }),
  imageService.addImage({
    title: 'cupCake05',
    desc: 'cupCake05',
    imgUrl: require('../../asset/img/cupcake5.jpg')
  });

}
