import { defineStore } from 'pinia';
import { Marker, LatLng } from 'leaflet';

export const useMapStore = defineStore('mapStore', {
  state: () => ({
    isNewMarker: false,
    markersCollection: [] as Marker[],
    newMarker: {} as Marker,
    newMarkerCoordinates: [] as LatLng[],
  }),
  actions: {
    setNewMarkerValue(value: boolean): void {
      this.isNewMarker = value;
    },
    setNewMarker(marker: Marker): void {
      this.newMarker = marker;
    },
    setMarkerCoofdinates(value: Coordinates) {
      this.newMarkerCoordinates = Object.values(value).map((num) => num.toFixed(6));
    },

    //-----------------------------------------------
    updateMarker(marker: L.Marker) {
      //const coords = marker.getLatLng(); ПОЛУЧИТЬ КООРДИНАТЫ МАРКЕРА
      const index = this.markersCollection.findIndex((m) => m.options.title === marker.options.title);
      if (index !== -1) {
        this.markersCollection.splice(index, 1, marker);
      } else {
        this.addMarker(marker);
      }

      console.log('All markers: ', this.markersCollection);
    },
    addMarker(marker: L.Marker) {
      this.markersCollection.push(marker);
    },
    //------------------------------------------------
  },
});

interface Coordinates {
  Lat: number;
  Lng: number;
}
