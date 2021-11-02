<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-40"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/4">
        <div class="p-2 border-2">
          <h2 class="">
            <slot name="title"> </slot>
          </h2>

          <main>
            <slot name="body"> </slot>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  },
};
</script>

<style>
</style>