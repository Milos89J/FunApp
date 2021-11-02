<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center">Counturies</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(country, index) in nCountry"
        :key="country.namenpm"
      >
        <div>{{ country.name }}</div>

        <button
          class="px-2 border rounded bg-red-500 text-small"
          v-on:click="remove(index)"
        >
          Delete
        </button>
      </li>
    </ul>
    <form class="mt-12" @submit.prevent="addCountry">
      <input
        class="border rounded"
        v-model.trim.lazy="newCountry"
        placeholder="Type..."
        ref="newCountryRef"
      />
      <button class="px-2 border rounded bg-green-400" type="submit">
        Add Country
      </button>
    </form>
    <small class="flex text-sm text-blue-900"
      >Total Country in the list is {{ countryCount }}</small
    >
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const newCountryRef = ref("");
    const newCountry = ref("");
    const nCountry = ref([
      { name: "Brasil" },
      { name: "Bolivia" },
      { name: "Burundi" },
      { name: "Nepal" },
      { name: "Burkina Faso" },
      { name: "Ruanda" },
    ]);
    onMounted(() => {
      newCountryRef.value.focus();
    });
   
    function remove(index) {
      nCountry.value = nCountry.value.filter((country, i) => i != index);
    }

    function addCountry() {
      if (newCountry.value != "") {
        nCountry.value.unshift({ name: newCountry.value });
        newCountry.value = "";
      }
    }

    return { nCountry, newCountry, remove, addCountry, newCountryRef };
  },
  computed: {
    countryCount() {
      return this.nCountry.length;
    },
  },
};
</script>

<style>
body {
  background-color: #f3f4f6;
}
</style>