<template>
<div class="h-full">
  <div class="p-5 mx-10 h-5/6 sm:mx-auto">
    <div class="grid grid-cols-2 gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img src="../assets/CommissionLogo.svg" alt="Cat" class="mr-3" />
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-2xl text-shadow-md">
                0% commission marketplace
              </li>
              <li class="text-primary-light text-xl">
                The only 0% commission NFT marketplace in the world.
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
              We don’t take a commission from you buying or selling
            </li>
            <li>
              That is why this is the best marketplace in the world for people to connect, promote and trade
            </li>
            <li>
              We believe you own what you create and you own what you sell, so we believe you should own what you earn too
            </li>
            <li>Helping you make the most out of what you get</li>
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
            photography by Mael Balland
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Marketplace",
};
</script>