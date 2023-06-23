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
          <div class="map">
            <map-app />
          </div>
          <div class="form__wrapper">
            <div class="buttons">
              <button-app :title="'Добавить маркер'" :bg="'lightBlue'" :action="addMarker" :alignment="'start'" />
            </div>
            <div class="form__container">
              <form-app />
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
import { defineComponent, inject } from 'vue';
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

    return {
      title,
      addMarker,
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
  max-width: 1500px;
  margin: 0 auto;
}
.header {
  padding: 16px 0;
  background: rgb(7, 135, 240);
  color: white;
}
.header__title {
  text-align: center;
}
.content__wrapper {
  display: flex;
}
.map {
  width: 80%;
  padding-right: 16px;
}
.form__wrapper {
  width: 20%;
  padding-left: 16px;
}
.buttons {
  padding: 8px;
}
.footer {
  background: #080808;
  padding: 16px 0;
}
</style>
