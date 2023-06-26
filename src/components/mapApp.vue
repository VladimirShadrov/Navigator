<template>
  <div class="map">
    <leaflet-app />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import leafletApp from './leafletApp.vue';

export default defineComponent({
  name: 'map-app',
  components: {
    leafletApp,
  },
});
</script>

<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
