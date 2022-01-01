<template>
<div class="h-full">
  <div class="p-5 mx-10 h-5/6 sm:mx-auto">
    <div class="grid grid-cols-2 gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img src="../assets/PhysicalNFTCat.svg" alt="Cat" class="mr-3" />
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-2xl text-shadow-md">
                physical NFTs
              </li>
              <li class="text-primary-light text-xl">
                More than just the digital. We make the digital, physical.
              </li>
            </ul>
          </div>
        </div>
        <!-- text -->
        <div
          class="
            row-span-4
            text-primary-light text-left text-lg
            font-base
            pt-10
          "
        >
          <ul class="list-disc list-inside">
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
      <div class="mt-0">
        <img
          src="../assets/PhysicalNFTBanner.svg"
          alt=""
          class="h-5/6 w-auto"
        />
        <div class="md:w-5/6 mx-auto">
          <p class="text-primary-light text-left border-b-2 border-white w-1/2">
            photography by Clem Onojeghuo
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "PhysicalNFTs",
};
</script>