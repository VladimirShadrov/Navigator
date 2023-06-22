<template>
  <div class="field__wrapper">
    <input type="text" class="field" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'field-app',
  props: {
    placeholder: String,
  },
});
</script>

<style scoped>
.field {
  padding: 6px;
  width: 100%;
}
.field__wrapper {
  padding: 16px 0;
  width: 100%;
}
</style>
