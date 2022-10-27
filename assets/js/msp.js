// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-slider', {
          fixedWidth: 100,
          gap       : 10,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-slider', {
          fixedWidth : 100,
      fixedHeight: 60,
          gap        : 10,
          rewind     : true,
          pagination : false,
      cover      : true,
    } ).mount();
  } );

  new Splide( '#thumbnail-slider', {
    fixedWidth : 100,
    fixedHeight: 60,
    gap        : 10,
    rewind     : true,
    pagination : false,
    cover      : true,
    focus      : 'center',
    breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } ).mount();

  new Splide( '#thumbnail-slider', {
    fixedWidth  : 100,
    fixedHeight : 60,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    cover       : true,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } ).mount();

  var main       = new Splide( '#main-slider', { ... } );
var thumbnails = new Splide( '#thumbnail-slider', { ... } );


main.sync( thumbnails );
main.mount();
thumbnails.mount();

document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-slider', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
  
    var thumbnails = new Splide( '#thumbnail-slider', {
      fixedWidth  : 100,
      fixedHeight : 60,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      cover       : true,
      isNavigation: true,
      breakpoints : {
        600: {
          fixedWidth : 60,
          fixedHeight: 44,
        },
      },
    } );
  
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );

  var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );