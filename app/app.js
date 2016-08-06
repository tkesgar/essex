'use strict';

import $ from 'jquery';

// wide image library
var wideImages = [
  {
    src         : "http://static.zerochan.net/Makise.Kurisu.full.1203172.jpg",
    ref_url     : "http://www.zerochan.net/1203172",
    ref_name    : "Zerochan",
    content_pos : "right"
  },
  {
    src         : "http://static.zerochan.net/Nakamura.Yuri.full.418763.jpg",
    ref_url     : "http://www.zerochan.net/418763",
    ref_name    : "Zerochan",
    content_pos : "left"
  }
];

$(document).ready(() => {

  // select wideImage content
  let image = wideImages[Math.floor(Math.random() * wideImages.length)];

  // set wideImage and wideImageSource content
  $("#wideImage").attr("src", image.src);
  $("#wideImageSource").attr("href", image.ref_url).text(image.ref_name);
  $(".col-container").addClass("col-content-" + image.content_pos);
  $("#wideContent img");

  // start parallax
  let parallax = new Parallax($("#wideContent")[0]);

  // add target = _blank to all outgoing links
  $('a').filter(() => {
    return this && this.hostname && this.hostname !== location.hostname;
  }).attr("target", "_blank");

  // hide loading screen after completed
  $(window).on('load', () => {
    $("#loading").fadeOut(600, 'linear', () => { $("#loading").hide(); });
  });
});
