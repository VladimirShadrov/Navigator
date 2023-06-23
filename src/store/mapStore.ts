import { defineStore } from 'pinia';

export const useMapStore = defineStore('mapStore', {
  state: () => ({
    isNewMarker: false,
    currentMarkerCoordinates: {},
    markersCollection: [],
  }),
  actions: {
    setNewMarkerValue(value: boolean) {
      this.isNewMarker = value;
    },
    setMarkerCoofdinates(value: Coordinates) {
      this.currentMarkerCoordinates = value;
    },
    // saveMarker(value: Coordinates) {
    //     this.markersCollection.push(value)
    // }
  },
});

interface Coordinates {
  Lat: number;
  Lng: number;
}
