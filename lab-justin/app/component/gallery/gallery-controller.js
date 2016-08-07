'use strict';

const angular = require('angular');
angular.module('galleryApp')
.controller('GalleryController', ['imageService', GalleryController]);

function GalleryController(imageService){
  this.galleryStyle = 'image';

  imageService.addImage({
    title: 'cupCake00',
    desc: 'cupCake00 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgUrl: require('../../asset/img/cupcake0.jpg')
  }),
  imageService.addImage({
    title: 'cupCake01',
    desc: 'cupCake01',
    imgUrl: require('../../asset/img/cupcake1.jpg')
  }),
  imageService.addImage({
    title: 'cupCake02',
    desc: 'cupCake02Lorem ipsiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptsunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgUrl: require('../../asset/img/cupcake2.jpg')
  }),
  imageService.addImage({
    title: 'cupCake03',
    desc: 'cupCake03 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgUrl: require('../../asset/img/cupcake3.jpg')
  }),
  imageService.addImage({
    title: 'cupCake04',
    desc: 'cupCake04Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunin ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitulla pariatur. Excepteur sint occaecid est laborum.',
    imgUrl: require('../../asset/img/cupcake4.jpg')
  }),
  imageService.addImage({
    title: 'cupCake05',
    desc: 'cupCake05',
    imgUrl: require('../../asset/img/cupcake5.jpg')
  });

  this.images = imageService.images;
  this.selectGalleryStyle = function(style){
    if(style ==='list'|| style ==='thumb' || style ==='image')
      this.galleryStyle = style;
    return this.galleryStyle;
  };

}
