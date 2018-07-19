'use strict';
(function(){ 

	var templateList = document.getElementById('template-carousel').innerHTML;
	var templateItem = document.getElementById('template-carousel-cell').innerHTML;
	
	// Optymalizacja 	

	Mustache.parse(templateItem);
	
	// Lista slajdow
	
	var listItems = '';
	

	for(var i = 0; i < slidesData.length; i++){
		console.log(slidesData);
		listItems += Mustache.render(templateItem, slidesData[i]);
	}
	
	var fullProductList = Mustache.render(templateList, {products: listItems});
	
	results.insertAdjacentHTML('beforeend', fullProductList);
		
})(); 


// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  hash: true,
  cellAlign: 'left',
  contain: true
});

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

(function(){ 
	
  	window.initMap = function() {
		
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: slidesData[0].coords
		});
		
		for (let i = 0; i < slidesData.length; i++ ){
      var marker = new google.maps.Marker({
      position: slidesData[i].coords,
      map: map
      });
      marker.addListener('click', function(){
        flkty.selectCell(i);
        console.log(i)
      });

      flkty.on( 'change', function( index ) {
        map.panTo(slidesData[index].coords)
        map.setZoom(10)
      });

    }  
  };
})();  
