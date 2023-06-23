import { defineStore } from 'pinia';

export const useMapStore = defineStore('mapStore', {
  state: () => ({
    isNewMarker: false,
  }),
  actions: {
    setNewMarkerValue(value: boolean) {
      this.isNewMarker = value;
    },
  },
});
