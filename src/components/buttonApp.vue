<template>
  <div class="button__wrapper" :style="{ justifyContent: alignment }">
    <button @click="action" class="button" :style="{ background: bg }">{{ title }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'button-app',
  props: {
    title: String,
    bg: String,
    action: Function,
    alignment: String,
  },
});
</script>

<style scoped>
.button__wrapper {
  display: flex;
}
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
