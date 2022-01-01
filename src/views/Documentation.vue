<template>
  <div class="container sm:mx-auto">
    <div class="grid grid-cols-2 gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img
            src="../assets/DocumentationNFTBook.svg"
            alt="Cat"
            class="h-24 mr-3"
          />
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-4xl text-shadow-md">
                documentation
              </li>
              <li class="text-primary-light text-2xl">
                click on the below documents to download.
              </li>
            </ul>
          </div>
        </div>
        <!-- text -->
        <div
          class="
            row-span-4
            text-primary-light text-left text-2xl
            font-semibold
            pt-10
          "
        >
          <ul class="list-disc list-inside">
            <li class="py-2">Summary 1 pager (ready once designed)</li>
            <li class="py-2">Extended summary pages (Pending)</li>
            <li class="py-2">Summary Deck (Pending)</li>
            <li class="py-2">Full Business Profile Deck (Pending)</li>
            <li class="py-2">Summary whitepaper (ready once designed)</li>
            <li class="py-2">Full Whitepaper (Pending)</li>
          </ul>
        </div>
      </div>

      <!-- Screenshot -->
      <div class="mt-10">
        <img src="../assets/DocumentationNFTBanner.svg" alt="" class="h-5/6 w-auto"/>
        <div class="md:w-5/6 mx-auto">
        <p class="text-primary-light text-left border-b-2 border-white w-1/2">photography by Hello Revival</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Documentation",
};
</script>

<style>
</style>