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

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

 var button = document.getElementById('#restart')

 button.addEventListener( 'click', function( event ) {
 
  var beginning = document.getElementById('#carrousel-cell1');
  flkty.selectedElement(beginning);
});
