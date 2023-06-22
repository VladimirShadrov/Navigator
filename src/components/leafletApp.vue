<template>
  <div id="leaflet"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default defineComponent({
  name: 'leaflet-app',
  mounted() {
    new L.Map('leaflet', {
      center: new L.LatLng(55.754142, 37.620212),
      zoom: 15,
      layers: [new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    });
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
