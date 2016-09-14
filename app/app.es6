'use strict';

import data from './data';

$(document).ready(() => {

  // select wideImage content
  const images = data.images;
  const image = images[Math.floor(Math.random() * images.length)];

  // only use flex with JS
  $('body').addClass('col-with-js');

  // set wideImage and wideImageSource content
  const id = image.id;
  const name = image.ref_name;
  const pos = image.content_pos;
  const src = `/img/${id}.jpg`;
  const url = `http://www.zerochan.net/${id}`;

  $('#wideImage').attr('src', src);
  $('#wideImageSource').attr('href', url).text(`Zerochan (${name})`);
  $('.col-container').addClass(`col-content-${pos}`);

  // start parallax
  let parallax = new Parallax($('#wideContent')[0]);

});
