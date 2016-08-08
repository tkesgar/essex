'use strict';

import wideImages from 'wide-images';

$(document).ready(() => {

  // select wideImage content
  let image = wideImages[Math.floor(Math.random() * wideImages.length)];

  // only use flex with JS
  $('body').addClass('col-with-js')

  // set wideImage and wideImageSource content
  $('#wideImage').attr('src', image.src);
  $('#wideImageSource').attr('href', image.ref_url).text(image.ref_name);
  $('.col-container').addClass('col-content-' + image.content_pos);

  // start parallax
  let parallax = new Parallax($('#wideContent')[0]);

});
