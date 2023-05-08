ymaps.ready(init);
function init(){

	var myMap = new ymaps.Map("adress__map", {
	center: [55.75855105537818, 37.601014457671305],
	zoom: 15,
	});

	var myPlacemark = new ymaps.Placemark([55.75855105537818, 37.601014457671305], {}, {
		iconLayout: 'default#image',
		iconImageHref: '/img/map-placemark.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
}
