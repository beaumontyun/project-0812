<template>
  <div class="grid grid-cols-3 mb-10">
    <div>
      <router-link to="/smart-profile">
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
      </router-link>
    </div>
    <div>
      <router-link to="/governance-token">
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
        </p></router-link
      >
    </div>
    <div>
      <router-link to="*">
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
      </router-link>
    </div>
  </div>
</template>

<style>
</style>
