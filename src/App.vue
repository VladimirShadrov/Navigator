<template>
  <div class="app-container">
    <header class="header">
      <div class="container">
        <h1 class="header__title">{{ title }}</h1>
      </div>
    </header>
    <div class="content">
      <div class="container">
        <div class="content__wrapper">
          <div class="map__wrapper">
            <map-app />
          </div>
          <div class="form__wrapper">
            <div class="buttons">
              <button-app :title="'Добавить маркер'" :bg="'lightBlue'" :action="addMarker" :alignment="'start'" />
            </div>
            <div class="form__container">
              <form-app />
            </div>
            <div class="buttons">
              <button-app :title="'Вывести координаты маркеров в консоль'" :bg="'#eb4b4b'" :action="showResult" :alignment="'start'" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container"></div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import buttonApp from './components/buttonApp.vue';
import formApp from './components/formApp.vue';
import mapApp from './components/mapApp.vue';
import { useMapStore } from './store/mapStore';

export default defineComponent({
  name: 'App',
  components: {
    buttonApp,
    formApp,
    mapApp,
  },
  setup() {
    const mapStore = useMapStore();
    const title = 'Навигатор';

    const addMarker = (): void => {
      mapStore.setNewMarkerValue(true);
    };

    const showResult = (): void => {
      if (!mapStore.markersCollection.length) return;

      interface MarkerCoordinates {
        lat: number;
        lng: number;
      }

      interface Result {
        [key: string]: MarkerCoordinates;
      }

      const result: Result = {};
      mapStore.markersCollection.forEach((marker, index) => {
        const fieldName = `Marker_${index + 1}`;
        result[fieldName] = marker.getLatLng();
      });

      console.log('Result: ', result);
    };

    return {
      title,
      addMarker,
      showResult,
    };
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.container {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 8px;
  display: flex;
  justify-content: center;
}
.header {
  padding: 8px 0;
  background: rgb(7, 135, 240);
  color: white;
}
.header__title {
  text-align: center;
}
.content {
  flex-grow: 1;
  display: flex;
  padding: 8px 0;
}
.content__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.map__wrapper {
  order: 1;
  flex-grow: 1;
}
.form__wrapper {
  order: 0;
}
.buttons {
  padding: 8px 0;
}
.footer {
  background: #080808;
  padding: 16px 0;
}

@media (min-width: 768px) {
  .content__wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .map__wrapper {
    order: 0;
    width: 69%;
    flex-grow: 0;
  }
  .form__wrapper {
    order: 1;
    width: 30%;
  }
}
</style>
