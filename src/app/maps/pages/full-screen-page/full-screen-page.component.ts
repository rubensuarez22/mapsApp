import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'

//(mapboxgl as any).accessToken = 'pk.eyJ1IjoicnViZW5zdWFyZXoyMiIsImEiOiJjbTFzMXlnejYwMXAyMmtvZHppNHJjdGRsIn0.xrm0NjjF6amiT3VsA31SYQ'

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map') divMap!: ElementRef



  ngAfterViewInit(): void {

    if (!this.divMap) throw ' El elemento HTML no fue encontrado'

    console.log(this.divMap)
    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      accessToken: 'pk.eyJ1IjoicnViZW5zdWFyZXoyMiIsImEiOiJjbTFzMXlnejYwMXAyMmtvZHppNHJjdGRsIn0.xrm0NjjF6amiT3VsA31SYQ'
    });
  }



}
