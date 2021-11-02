<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="index">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 660px"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full" style="height: 430px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-900' : 'bg-gray-300'"
          class="w-4 h-4 mx-3 rounded-full z-20 cursor-pointer"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTextShowing">TEKST</h1>
        </transition>
        <button
          @click="isTextShowing = !isTextShowing"
          class="px-2 rounded border bg-blue-400"
        >
          Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-green-200", "bg-green-200", "bg-green-200"],
      interval: "",
      isTextShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
    //if (this.currentSlide === 2) {
    //this.currentSlide = 0;
    // } else {
    // this.currentSlide++;
    //}
    //}, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>