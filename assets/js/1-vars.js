//Possitions
var navPos = $('.nav-bar').offset().top;
var servicePos = $('.service').offset().top;
//Dimentions
var windowHeight = $(window).height();
var bannerHeight = $('.banner').height();
var brandHeight = $('.brand').height();
//Items
var $navbarItem = $('nav').find('li');
$('nav').wrap('<div class="nav-wrapper"></div>');
var footer = $('footer');
var footerItems = footer.find('a');
var galleryImg = $('.gallery-thbm');
var galleryView = $('#img-view');
var sectionGallery = $('.gallery');