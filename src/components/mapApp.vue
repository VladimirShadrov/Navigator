<template>
  <div class="map"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'map-app',
});
</script>

<style scoped>
.map {
  background: purple;
  height: 500px;
  width: 100%;
}
</style>
