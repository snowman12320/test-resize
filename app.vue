<template>
  <div
    style="
      height: 500px;
      width: 500px;
      border: 1px solid red;
      position: relative;
    "
  >
    <vue-draggable-resizable :w="100" :h="100" :parent="true">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    </vue-draggable-resizable>
  </div>
</template>

<script lang="ts" setup>
import VueDraggableResizable from 'vue-draggable-resizable';
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
