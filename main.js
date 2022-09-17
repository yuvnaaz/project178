// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
    var latitude  = 22.7868542
    var longitude = 88.3643296
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v11',
center: [longitude, latitude],
zoom: 13
});
 
map.addControl(
new MapboxGeoCoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
}),
);

var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addto(map);


var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
    element:img1
})

.setLngLat([72.835163, 18.920180])
.addto(map);
var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([77.22931, 28.61495])
.addto(map);
var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([77.25880, 28.553501])
.addto(map);

var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([88.342785, 22.546170])
.addto(map);
