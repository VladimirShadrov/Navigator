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
    const markerId = ref(1);
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

      const marker = L.marker(map.getCenter(), { icon: myIcon, draggable: true, title: `${markerId.value}` }).addTo(map);
      mapStore.updateMarker(marker);
      markerId.value = markerId.value + 1;
      mapStore.setNewMarker(marker);

      // Слой линий
      const linesLayer = L.layerGroup().addTo(map);

      // Добавляем обработку окончания перемещения маркера
      marker.on('dragend', function (event) {
        const marker = event.target;
        if (Object.values(mapStore.newMarker).length && marker.options.title === mapStore.newMarker.options.title) {
          mapStore.setMarkerCoofdinates(marker.getLatLng());
        }
        mapStore.updateMarker(marker);

        // Удаляем старые линии после перемещения маркеров
        map.eachLayer(function (layer: any) {
          if (layer instanceof L.Polyline) {
            map.removeLayer(layer);
          }
        });

        // Добавляем новые линии на карту
        mapStore.markersCollection.forEach((marker, index, array) => {
          const nextIndex: any = array[index + 1] ? index + 1 : 0;

          const line = L.polyline([marker.getLatLng(), array[nextIndex].getLatLng()], { color: 'blue' });
          linesLayer.addLayer(line);
        });
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
  position: absolute;
  top: 0;
  left: 0;
}
.leaflet-bottom.leaflet-right {
  display: none;
}
</style>
