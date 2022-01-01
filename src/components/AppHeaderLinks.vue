<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      sm:shadow-none
      text-quaternary-light
      hover:drop-shadow-2xl
    "
  >
    <div
      type="button"
      @click="showModal"
      class="
        antialiased
        block
        text-left text-lg
        font-extrabold
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        hover:text-shadow-sm
        cursor-pointer
      "
      aria-label="physical NFTs"
    >
      <img src="../assets/PhysicalNFTButton.svg" alt="Physical NFT" />
    </div>
    <PhysicalNFTModal
      :showModal="showModal"
      :modal="modal"
      aria-modal="Physical NFT"
    />
    <div
      type="button"
      @click="showModal1"
      class="
        antialiased
        block
        text-left text-lg
        font-extrabold
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        hover:text-shadow-sm
        cursor-pointer
      "
      aria-label="metaverse & marketing"
    >
      <img src="../assets/MetaverseButton.svg" alt="Metaverse & Marketplace" />
    </div>
    <MetaverseModal
      :showModal1="showModal1"
      :modal1="modal1"
      aria-modal="metaverse"
    />
    <div
      type="button"
      @click="showModal2"
      class="
        antialiased
        block
        text-left text-lg
        font-extrabold
        sm:mx-4
        mb-2
        sm:py-2
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        hover:text-shadow-sm
        cursor-pointer
      "
      aria-label="documentation"
    >
      <img src="../assets/DocumentationButton.svg" alt="Documentation" />
    </div>
    <DocumentationModal
      :showModal2="showModal2"
      :modal2="modal2"
      aria-modal="documentation"
    />
    <div
      type="button"
      @click="showModal3"
      class="
        antialiased
        block
        text-left text-lg
        font-extrabold
        sm:mx-4
        mb-2
        sm:py-1
        border-t-2
        pt-3
        sm:pt-2 sm:border-t-0
        border-primary-light
        hover:text-shadow-sm
        cursor-pointer
      "
      aria-label="faq"
    >
      <img src="../assets/FAQButton.svg" alt="FAQ" />
    </div>
    <FAQModal :showModal3="showModal3" :modal3="modal3" aria-modal="FAQ" />
  </div>
</template>

<script>
import PhysicalNFTModal from "../views/PhysicalNFTModal.vue";
import MetaverseModal from "../views/MetaverseModal.vue";
import DocumentationModal from "../views/DocumentationModal.vue";
import FAQModal from "../views/FAQModal.vue";

export default {
  props: ["isOpen"],
  data() {
    return {
      modal: false,
      modal1: false,
      modal2: false,
      modal3: false,
    };
  },
  components: {
    PhysicalNFTModal,
    MetaverseModal,
    DocumentationModal,
    FAQModal,
  },
  methods: {
    showModal() {
      if (this.modal) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
    showModal1() {
      if (this.modal1) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal1 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal1 = true;
      }
    },
    showModal2() {
      if (this.modal2) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal2 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal2 = true;
      }
    },
    showModal3() {
      if (this.modal3) {
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal3 = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal3 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
