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


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
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

/*var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
*/
(function(){ 
	
  	window.initMap = function() {
		
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: slidesData[0].coords
		});
		
		for (var i = 0; i < slidesData.length; i++ ){
      var marker = new google.maps.Marker({
      position: slidesData[i].coords,
      map: map
      });
      marker.addListener('click', function(){
        flkty.select(i);
      })

      flkty.on( 'change', function( index ) {
        map.panTo(slidesData[index].coords)
        map.setZoom(10)
      });

    }
    
  
  };
		/*
		// Następnie dodajemy akcję do guzika, dokładnie tak samo jak robiliśmy to w poprzednim module.
		
		document.getElementById('center-map').addEventListener('click', function(event){
			event.preventDefault();
			// Najpierw wykorzystujemy metodę panTo w obiekcie map do przesunięcia współrzędnych mapy:
			map.panTo(sydney);
			
			// A następnie zmieniamy powiększenie mapy:
			map.setZoom(10);
		});
		
		Jak widzisz, guzik "Center map" nagle przeskakuje do docelowych pozycji i powiększenia. 
		
		Jako alternatywę przygotowaliśmy funkcję smoothPanAndZoom, która korzysta z funkcji smoothZoom i smoothPan. Jest to nasz własny kod, który jest przykładem tego w jaki sposób można wykorzystać JavaScript oraz podstawy matematyki do wykonania ciekawych manipulacji. 
		
		Aby zobaczyć ten efekt w akcji, kliknij najpierw guzik "Center map", a następnie "Center smoothly". 
		
		
		document.getElementById('center-smooth').addEventListener('click', function(event){
			event.preventDefault();
			smoothPanAndZoom(map, 7, uluru);
		});
	}	
	
	// Efekt przejścia, który zaimplementowaliśmy za pomocą funkcji smoothPanAndZoom na pewno nie jest idealny, ponieważ staraliśmy się użyć dość prostego algorytmu. 
	


	var smoothPanAndZoom = function(map, zoom, coords){
		// Trochę obliczeń, aby wyliczyć odpowiedni zoom do którego ma oddalić się mapa na początku animacji.
		var jumpZoom = zoom - Math.abs(map.getZoom() - zoom);
		jumpZoom = Math.min(jumpZoom, zoom -1);
		jumpZoom = Math.max(jumpZoom, 3);

		// Zaczynamy od oddalenia mapy do wyliczonego powiększenia. 
		smoothZoom(map, jumpZoom, function(){
			// Następnie przesuwamy mapę do żądanych współrzędnych.
			smoothPan(map, coords, function(){
				// Na końcu powiększamy mapę do żądanego powiększenia. 
				smoothZoom(map, zoom); 
			});
		});
	};
	
	var smoothZoom = function(map, zoom, callback) {
		var startingZoom = map.getZoom();
		var steps = Math.abs(startingZoom - zoom);
		
		// Jeśli steps == 0, czyli startingZoom == zoom
		if(!steps) {
			// Jeśli podano trzeci argument
			if(callback) {
				// Wywołaj funkcję podaną jako trzeci argument.
				callback();
			}
			// Zakończ działanie funkcji
			return;
		}

		// Trochę matematyki, dzięki której otrzymamy -1 lub 1, w zależności od tego czy startingZoom jest mniejszy od zoom
		var stepChange = - (startingZoom - zoom) / steps;

		var i = 0;
		// Wywołujemy setInterval, który będzie wykonywał funkcję co X milisekund (X podany jako drugi argument, w naszym przypadku 80)
		var timer = window.setInterval(function(){
			// Jeśli wykonano odpowiednią liczbę kroków
			if(++i >= steps) {
				// Wyczyść timer, czyli przestań wykonywać funkcję podaną w powyższm setInterval
				window.clearInterval(timer);
				// Jeśli podano trzeci argument
				if(callback) {
					// Wykonaj funkcję podaną jako trzeci argument
					callback();
				}
			}
			// Skorzystaj z metody setZoom obiektu map, aby zmienić powiększenie na zaokrąglony wynik poniższego obliczenia
			map.setZoom(Math.round(startingZoom + stepChange * i));
		}, 80);
	};

	
	var smoothPan = function(map, coords, callback) {
		var mapCenter = map.getCenter();
		coords = new google.maps.LatLng(coords);

		var steps = 12;
		var panStep = {lat: (coords.lat() - mapCenter.lat()) / steps, lng: (coords.lng() - mapCenter.lng()) / steps};

		var i = 0;
		var timer = window.setInterval(function(){
			if(++i >= steps) {
				window.clearInterval(timer);
				if(callback) callback();
			}
			map.panTo({lat: mapCenter.lat() + panStep.lat * i, lng: mapCenter.lng() + panStep.lng * i});
		}, 1000/30);
  }; 	
  */
})();  
