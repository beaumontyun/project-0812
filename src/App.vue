<template>
  <div class="pt-0.5">
    <AppHeader class="w-full"/>

    <transition name="fade" mode="out-in">
			<router-view class="h-full pb-10" />
		</transition>
    <!-- <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
    <i data-feather="chevron-up"></i>
  </back-to-top> -->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import feather from "feather-icons";

export default {
  components: {
    AppHeader,
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: #8AA79E; */
  background: #8AA79E;
  color: #2c3e50;
}

/* .vue-back-to-top {
  @apply p-2 bg-indigo-500 hover:bg-indigo-600 text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
} */

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
