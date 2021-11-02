<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 text-center">Model</h1>
      <ModalO v-if="isOneModelOpen" @close="isOneModelOpen = false">
        <template v-slot:title> Model One </template>

        <template v-slot:body>
          <p class="text-purple-500">(M1)</p>
        </template>
      </ModalO>
      <button
        class="border rounded px-2 mx-4 bg-gray-400"
        @click="isOneModelOpen = true"
      >
        Modal(one)
      </button>

      <ModalO v-if="isTwoModelOpen" @close="isTwoModelOpen = false">
        <template #title> Model Two </template>

        <template v-slot:body>
          <p class="text-blue-500">(M2)</p>
        </template>

        <h2 class="">Modal Two</h2>
      </ModalO>
      <button
        class="border rounded px-2 mx-4 bg-gray-400"
        @click="isTwoModelOpen = true"
      >
        Modal(two)
      </button>
    </div>
  </section>
</template>

<script>
import ModalO from "../components/ModalO.vue";
import { ref } from "vue";
export default {
  components: { ModalO },
  setup() {
    const isOneModelOpen = ref(false);
    const isTwoModelOpen = ref(false);
    return { isOneModelOpen, isTwoModelOpen };
  },
};
</script>

<style>
</style>