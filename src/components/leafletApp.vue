<template>
  <div id="leaflet"></div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapStore } from '../store/mapStore';

export default defineComponent({
  name: 'leaflet-app',
  setup() {
    const mapStore = useMapStore();
    const isNewMarker = computed(() => mapStore.isNewMarker);
    let map: any;

    // создание карты и добавление ее на страницу
    const initMap = () => {
      map = new L.Map('leaflet', {
        center: new L.LatLng(55.754142, 37.620212),
        zoom: 15,
        layers: [new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
      });
    };

    // Добавление маркера
    const addMarker = () => {
      const markerIconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
      const myIcon = L.icon({
        iconUrl: markerIconUrl,
      });

      const marker = L.marker(map.getCenter(), { icon: myIcon, draggable: true }).addTo(map);
      marker.on('dragend', function (event) {
        var marker = event.target;
        var position = marker.getLatLng();
        mapStore.setMarkerCoofdinates(position);
      });
    };

    watch(isNewMarker, () => {
      if (isNewMarker.value) {
        addMarker();
        mapStore.setNewMarkerValue(false);
      }
    });

    return {
      initMap,
    };
  },
  mounted() {
    this.initMap();
  },
});
</script>

<style>
#leaflet {
  width: 100%;
  height: 100%;
  position: relative;
}
.leaflet-bottom.leaflet-right {
  display: none;
}
</style>
