<template>
  <main>
    <!-- <div
      style="
        height: 500px;
        width: 500px;
        border: 1px solid red;
        position: relative;
      "
    >
      <VueDraggableResizable :w="100" :h="100" :parent="true">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      </VueDraggableResizable>
    </div> -->

    <!-- <vue-draggable-resizable :class-name-handle="'my-handle-class'">
      <p>
        You can provide a default class name for the handle using the
        <b>class-name-handle</b>
        prop.
      </p>
    </vue-draggable-resizable>

    <vue-draggable-resizable
      :class-name-dragging="'my-dragging-class'"
      class-name="my-class"
    >
      <p>
        You can provide a default class name for the component when it's
        dragging using the
        <b>class-name-dragging</b>
        prop.
      </p>
    </vue-draggable-resizable> -->

    <!-- ----- -->

    <!-- <Vue3DraggableResizable> -->
    <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
    <!-- </Vue3DraggableResizable> -->

    <!-- ----- -->

    <!-- <ClientOnly>
      <VueDragResize
        :isActive="true"
        :w="200"
        :h="200"
        v-on:resizing="resize"
        v-on:dragging="resize"
      >
        <h3>Hello World!</h3>
        <p>{{ top }} х {{ left }}</p>
        <p>{{ width }} х {{ height }}</p>
      </VueDragResize>
    </ClientOnly> -->

    <ClientOnly>
      <VueDragResize
        :is-active="true"
        :w="200"
        :h="200"
        class="bg-primary-100 dark:bg-gray-800"
        @resizing="dragResize"
        @dragging="dragResize"
      >
        <h3>Hello World!</h3>
        <p>{{ top }} х {{ left }}</p>
        <p>{{ width }} х {{ height }}</p>
      </VueDragResize>
    </ClientOnly>
  </main>
</template>

<script lang="ts" setup>
// import VueDraggableResizable from 'vue-draggable-resizable';
// import Vue3DraggableResizable from 'vue3-draggable-resizable';

// import VueDragResize from 'vue-drag-resize';

// import VueDragResize from 'vue3-drag-resize';

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

.my-handle-class {
  position: absolute;
  border: 5px solid black;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  box-model: border-box;
  -webkit-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  transition: all 300ms linear;
}

.my-class {
  background-color: green;
  border: 1px solid red;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}

.my-dragging-class {
  background-color: red;
  border: 1px solid black;
}
</style>
