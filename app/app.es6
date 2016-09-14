'use strict';

import data from './data';

$(document).ready(() => {

  // select wideImage content
  let images = data.images;
  let image = images[Math.floor(Math.random() * images.length)];

  // only use flex with JS
  $('body').addClass('col-with-js');

  // set wideImage and wideImageSource content
  $('#wideImage').attr('src', image.src);
  $('#wideImageSource').attr('href', image.ref_url).text(image.ref_name);
  $('.col-container').addClass('col-content-' + image.content_pos);

  // start parallax
  let parallax = new Parallax($('#wideContent')[0]);

});
