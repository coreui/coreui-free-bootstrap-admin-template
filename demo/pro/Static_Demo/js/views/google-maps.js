"use strict";
$(function (){
  if(window.google && window.google.maps) {
    initMap()
  }
});

function initMap() {
  var locations = [
    {
      lat: 37.431489,
      lng: -122.163719,
      label: 'S',
      draggable: false,
      title: 'Stanford',
      www: 'https://www.stanford.edu/'
    },
    {
      lat: 37.394694,
      lng: -122.150333,
      label: 'T',
      draggable: false,
      title: 'Tesla',
      www: 'https://www.tesla.com/'
    },
    {
      lat: 37.331681,
      lng: -122.030100,
      label: 'A',
      draggable: false,
      title: 'Apple',
      www: 'https://www.apple.com/'
    },
    {
      lat: 37.484722,
      lng: -122.148333,
      label: 'F',
      draggable: false,
      title: 'Facebook',
      www: 'https://www.facebook.com/'
    }
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.431489, lng: -122.163719},
    zoom: 11
  });
  var markers = locations.map(function (location, i) {

    var contentString = "<a href=\"" + location.www + "\" target=\"_blank\"><strong>" + location.title + "</strong></a>";
    // const contentString = `<a href="${location.www}" target="_blank"><strong>${location.title}</strong></a>`;
    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });
    var marker = new google.maps.Marker({
      position: location,
      label: location.label,
      map: map,
      title: location.title,
      contentString: contentString
    });
    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
    return marker;
  });
}
