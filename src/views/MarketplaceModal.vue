<template>
  <!-- Hire me modal -->
  <transition name="fade">
    <div v-show="modal6" class="fixed inset-0 mx-auto py-20 z-30 w-5/6">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal6"
        @click="showModal6()"
        class="
          bg-filter bg-white bg-opacity-20
          fixed
          inset-0
          w-full
          h-full
          z-20
        "
      ></div>
      <!-- Modal content -->
      <main class="flex flex-col items-center justify-center ">
        <transition name="fade-up-down">
          <div v-show="modal6" class="modal-wrapper flex items-center z-30">
            <div
              class="
                modal6
                mx-5
                bg-primary-dark
                shadow-lg
                flex-row
                rounded-lg
                relative
              "
            >
              <div class="absolute inset-y-2 py-3 top-0 right-0">
                <button
                  class="px-4 font-bold text-gray-400"
                  @click="showModal6()"
                >
                  <i data-feather="x"></i>
                </button>
              </div>
              
              <div class="p-3 text-left my-6">
                <Marketplace class="justify-self-center content-center"/>
              </div>
            
            <!-- <img src="../assets/TestNFT.svg" alt=""> -->
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import feather from "feather-icons";
import Marketplace from "./Marketplace.vue"

export default {
  props: ["showModal6", "modal6"],
  data() {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
  components: {
    Marketplace
  }
};
</script>

<style scoped>
.bg-gray-800-opacity {
  background-color: #2d374850;
}
/* @media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
} */
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
