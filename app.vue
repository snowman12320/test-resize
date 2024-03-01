<template>
  <ClientOnly>
    <VueDragResize
      :is-active="true"
      :w="200"
      :h="200"
      @resizing="dragResize"
      @dragging="dragResize"
    >
      <p>{{ top }} х {{ left }}</p>
      <p>{{ width }} х {{ height }}</p>
    </VueDragResize>
  </ClientOnly>
</template>

<script lang="ts" setup>
import VueDragResize from 'vue3-drag-resize';

const width = ref(0);
const height = ref(0);
const top = ref(0);
const left = ref(0);

function dragResize(newRect) {
  width.value = newRect.width;
  height.value = newRect.height;
  top.value = newRect.top;
  left.value = newRect.left;
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
