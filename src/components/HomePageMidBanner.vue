<template>
  <div class="w-full ">
    <div class="bg-midbg-color flex justify-between rounded-t-md">
      <div class="md:w-full flex justify-between mx-5 my-3">
        <div
          class="
            text-primary-light
            font-bold
            text-left
            w-1/2
            select-none
            leading-relaxed
          "
        >
          <div class="flex text-shadow-sm">
            <img src="../assets/Flag.svg" alt="Flag" />
            <div class="ml-3 grid grid-rows-2">
              <p class="text-5xl mt-5">MileStones</p>
              <div class="flex">
                <p class="text-black text-2xl font-bold">3200</p>
                <p class="ml-1 text-primary-white text-2xl">registers so far!</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            text-quaternary-light
            font-bold
            text-left
            w-1/2
            leading-relaxed
            mt-2
          "
        >
          <p class="select-none text-shadow-sm">
            All we need is your support to make this happen! Support us for free
            by registering your email with us
          </p>
          <form action="" class="pt-3">
            <input
              type="text"
              class="
                mr-3
                pl-3
                w-4/6
                py-1
                rounded-full
                text-black
                caret-pink-500
              "
              placeholder="enter your email to register interest"
            />
            <button
              class="
                px-3
                bg-button-color
                rounded-full
                text-white
                border-2
                font-bold
                border-white
              "
            >
              Register now
            </button>
          </form>
        </div>
      </div>
    </div>
    <HomePageBottomBanner />
    <HomePagePartner />
  </div>
</template>

<script>
import HomePageBottomBanner from "./HomePageBottomBanner.vue";
import HomePagePartner from "./HomePagePartner.vue";
export default { components: { HomePageBottomBanner, HomePagePartner } };
</script>

<style>
</style>