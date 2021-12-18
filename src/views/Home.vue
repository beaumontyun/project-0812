<template>
  <div class="h-full w-full">
    <div class="container w-full hidden md:block mx-auto">
      <div class="md:w-full pb-3">
        <div class="flex items-start w-11/12 sm:w-2/6">
          <img src="../assets/EWYM.svg" alt="Earn what you make" />
        </div>
      </div>
      <div class="md:w-full flex justify-between">
        <div
          class="
            text-quaternary-light
            font-bold
            text-left
            w-1/2
            select-none
          "
        >
          <ul class="list-disc">
            <li>Zero commission on creating, buying & selling</li>
            <li>
              We believe what you create is yours, so you keep what you earn
            </li>
            <li>Creating and bringing NFTs into real life</li>
            <li>
              We can make physical NFTs, helping you combine the digital with
              the physical
            </li>
          </ul>
        </div>
        <div
          class="
            text-quaternary-light
            font-bold
            text-left
            w-1/2
            leading-relaxed
          "
        >
          <p class="select-none">
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
      <HomePageBanner />
      <HomePageMidBanner />
    </div>
  </div>
</template>

<script>
import HomePageBanner from "../components/HomePageBanner.vue";
import HomePageMidBanner from "../components/HomePageMidBanner.vue";

export default {
  name: "Home",
  components: {
    HomePageBanner,
    HomePageMidBanner,
  },
};
</script>
