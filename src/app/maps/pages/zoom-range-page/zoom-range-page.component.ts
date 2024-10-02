import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import mapboxgl, { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  @ViewChild('map') divMap!: ElementRef

  public zoom: number = 15;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-98.28378735975045, 19.055108820874466)

  ngAfterViewInit(): void {

    if (!this.divMap) throw ' El elemento HTML no fue encontrado'

    console.log(this.divMap)
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      accessToken: 'pk.eyJ1IjoicnViZW5zdWFyZXoyMiIsImEiOiJjbTFzMXlnejYwMXAyMmtvZHppNHJjdGRsIn0.xrm0NjjF6amiT3VsA31SYQ'
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }
  mapListeners(){
    if (!this.map) throw 'Mapa no existe';


    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomed', (ev) => {
      if( this.map!.getZoom() <18 ) return;

      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();

    })


  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value:string){
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }
}
