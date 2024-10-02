import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import mapboxgl, { Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {
  @Input() lngLat?: [number,number];
  @ViewChild('map') divMap!: ElementRef
  ngAfterViewInit(){
      if (!this.divMap) throw ' El elemento HTML no fue encontrado'
      if (!this.lngLat) throw ' LngLat no puede ser nulo'
      console.log(this.divMap)
      const map = new mapboxgl.Map({
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.lngLat, // starting position [lng, lat]
        zoom: 15, // starting zoom
        accessToken: 'pk.eyJ1IjoicnViZW5zdWFyZXoyMiIsImEiOiJjbTFzMXlnejYwMXAyMmtvZHppNHJjdGRsIn0.xrm0NjjF6amiT3VsA31SYQ',
        interactive: false
      });

      new Marker()
      .setLngLat (this.lngLat)
      .addTo(map)
    }
}

