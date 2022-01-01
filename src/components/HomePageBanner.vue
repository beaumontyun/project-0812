<template>
  <div class="grid grid-cols-3 mb-10">
    <div>
      <div type="button" @click="showModal4" class="cursor-pointer">
        <img
          src="../assets/Banner1.svg"
          id="banner1"
          alt="Banner 1"
          class="rounded-t-full w-full"
        />
        <p
          class="
            text-primary-light text-left
            border-b-2 border-white
            w-1/2
            ml-3
          "
        >
          smart profile cards
        </p>
      </div>
      <SmartProfileModal :showModal4="showModal4" :modal4="modal4" aria-modal="smart profile" />
    </div>
    <div>
      <div type="button" @click="showModal5" class="cursor-pointer">
        <img
          src="../assets/Banner2.svg"
          id="banner2"
          alt="Banner 2"
          class="rounded-t-full w-full"
        />
        <p
          class="
            text-primary-light text-left
            border-b-2 border-white
            w-1/2
            ml-3
          "
        >
          governance tokens
        </p></div
      >
      <GovernanceTokenModal :showModal5="showModal5" :modal5="modal5" aria-modal="smart profile" />
    </div>
    <div>
      <div type="button" @click="showModal6" class="cursor-pointer">
        <img
          src="../assets/Banner1.svg"
          id="banner3"
          alt="Banner 3"
          class="rounded-t-full w-full"
        />
        <p
          class="
            text-primary-light text-left
            border-b-2 border-white
            w-1/2
            ml-3
          "
        >
          0% commission marketplace
        </p>
      </div>
      <marketplace-modal :showModal6="showModal6" :modal6="modal6" aria-modal="marketplace" />
    </div>
  </div>
</template>

<script>
import SmartProfileModal from "../views/SmartProfileModal.vue"
import GovernanceTokenModal from "../views/GovernanceTokenModal.vue"
import MarketplaceModal from '../views/MarketplaceModal.vue';

export default {
  data() {
    return {
      modal4: false,
      modal5: false,
      modal6: false,
    };
  },
  components: {
    SmartProfileModal,
    GovernanceTokenModal,
    MarketplaceModal
  },
  methods: {
    showModal4() {
      if (this.modal4) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal4 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal4 = true;
      }
    },
    showModal5() {
      if (this.modal5) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal5 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal5 = true;
      }
    },
    showModal6() {
      if (this.modal6) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal6 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal6 = true;
      }
    },
  },
};
</script>
