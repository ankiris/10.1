var elem = document.querySelector('.main-carousel');
var Flickity = require('flickity-hash');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
var flkty = new Flickity( '.carousel', {
  hash: true,
});

var flkty1 = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty1.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
