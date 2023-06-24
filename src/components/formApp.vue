<template>
  <div class="form">
    <field-app :placeholder="'Текущие координаты'" :coordinates="coordinates" />
    <button-app :title="'Сохранить координаты'" :bg="'lightseagreen'" :action="savePoint" :alignment="'center'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import buttonApp from './buttonApp.vue';
import fieldApp from './fieldApp.vue';
import { useMapStore } from '../store/mapStore';
import { Coordinates } from '../store/mapStore';

export default defineComponent({
  name: 'form-app',
  components: {
    buttonApp,
    fieldApp,
  },
  setup() {
    const mapStore = useMapStore();

    const coordinates = computed(() => (mapStore.newMarkerCoordinates.length ? mapStore.newMarkerCoordinates.join(', ') : ''));

    const savePoint = (): void => {
      mapStore.setNewMarker();
      mapStore.setMarkerCoofdinates({} as Coordinates);
    };

    return {
      savePoint,
      coordinates,
    };
  },
});
</script>

<style scoped>
.form {
  padding: 8px;
  border: 1px solid #ccc;
}
</style>
