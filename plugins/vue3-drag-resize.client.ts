import VueDragResize from 'vue3-drag-resize';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDragResize);
});
