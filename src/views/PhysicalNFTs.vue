<template>
  <div class="h-screen container sm:mx-auto">
    <div class="grid grid-cols-2 gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img src="../assets/PhysicalNFTCat.svg" alt="Cat" class="mr-3"/>
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-4xl text-shadow-md">physical NFTs</li>
              <li class="text-primary-light text-2xl">More than just the digital. We make the digital, physical.</li>
            </ul>
          </div>
        </div>
        <!-- text -->
        <div class="row-span-4 text-primary-light text-left text-2xl font-semibold pt-10">
          <ul class="list-disc">
            <li>
              By bringing the online to the offline we can open up a world where
              the power and security of NFTs is applicable to any and everything
            </li>
            <li>
              We can connect physical pieces of art, clothing and accessories to
              the blockchain turning them into digital collectables
            </li>
            <li>
              We can give digital NFTs a physical form. Giving them a whole new
              dimension and form to showcase your collectables
            </li>
            <li>We give the power of NFTs to any and all creators</li>
          </ul>
        </div>
      </div>

      <!-- Screenshot -->
      <div class="mt-10">
        <img src="../assets/PhysicalNFTBanner.svg" alt="" class="h-5/6 w-auto">
        <p class="text-primary-light text-left border-b-2 border-white w-1/2 ml-3">photography by Clem Onojeghuo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhysicalNFTs",
};
</script>

<style>
</style>