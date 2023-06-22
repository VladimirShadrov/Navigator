<template>
  <div class="form">
    <field-app :placeholder="'Текущие координаты'" />
    <button-app :title="'Сохранить координаты'" :bg="'lightseagreen'" :action="savePoint" :alignment="'center'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import buttonApp from './buttonApp.vue';
import fieldApp from './fieldApp.vue';

export default defineComponent({
  name: 'form-app',
  components: {
    buttonApp,
    fieldApp,
  },
  setup() {
    const savePoint = (): void => {
      console.log('Сохранить точку');
    };

    return {
      savePoint,
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
