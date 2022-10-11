import React, {useState} from 'react'

export default function Globe({coordinates, country}) {

    const [coords, setCoords]=useState(coordinates)
    
    var map;
    

    function init() {
      map = WE.map('map', {
        center: [36.057944835, -112.18688965],
        zoom: 5,
        dragging: true,
        scrollWheelZoom: true
      });

      var baselayer = WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 16,
        attribution: 'WebGLEarth example',
        tms: true
      }).addTo(map);
    }
  
    function panTo(coords) {
        map.panTo(coords);
    }
  
    return (
    <div>Globe</div>
  )
}



