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
    <router-link
      to="/physical-nfts"
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
        hover:underline hover:decoration-2
      "
      aria-label="physical NFTs"
    >
      physical NFTs</router-link
    >
    <router-link
      to="/metaverse-marketing"
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
        hover:underline hover:decoration-2
      "
      aria-label="metaverse & marketing"
      >metaverse & marketing</router-link
    >
    <router-link
      to="/documentation"
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
        hover:underline 
        hover:decoration-2
      "
      aria-label="documentation"
      >
      documentation</router-link
    >
    <router-link
      to="/faq"
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
        hover:underline 
        hover:decoration-2
      "
      aria-label="faq"
      >FAQ</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<style lang="scss" scoped></style>
