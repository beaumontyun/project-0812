<template>
  <div class="h-full w-full">
    <div class="container md:block mx-auto">
      <div class="md:w-full pb-3">
        <div class="flex items-start w-11/12 sm:w-2/6 mx-auto sm:float-left">
          <img src="../assets/EWYM.svg" alt="Earn what you make" />
        </div>
      </div>
      <!-- Desktop version -->
      <div class="md:w-full sm:flex justify-between text-sm pb-10 hidden">
        <div
          class="
            text-quaternary-light
            font-bold
            text-left
            w-1/2
            select-none
            text-shadow-md
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
            text-shadow-md
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
      <!-- Desktop version ends -->

      <!-- Mobile version -->
      <!-- Top banner section -->
      <div class="sm:hidden">
        <img src="../assets/MobileTopBanner.svg" alt="" />
      </div>
      <!-- Sign up section -->
      <div class="sm:hidden">
        <p class="text-sm text-left">
          Simply register below with your email and be first in line to the
          marketplace and all future updates
        </p>
        <form action="" class="grid grid-cols-3 gap-2 pb-3">
          <input
            type="text"
            class="
              mr-3
              pl-3
              w-full
              py-1
              rounded-full
              text-black
              caret-pink-500
              col-span-2
              text-sm
            "
            placeholder="register with your email"
          />
          <button
            class="
              px-3
              bg-button-color
              rounded-full
              text-white
              border-2
              text-sm
              border-white
            "
          >
            Register
          </button>
        </form>
      </div>
      <!-- Mid banner section -->
      <div class="grid grid-row-6 sm:hidden gap-2">
        <img src="../assets/MobileBanner1.svg" alt="" />
        <img src="../assets/MobileBanner2.svg" alt="" />
        <img src="../assets/MobileBanner3.svg" alt="" />

        <!-- Milestones banner section -->
        <img src="../assets/SignupBanner1.svg" alt="" />
        <img src="../assets/SignupBanner2.svg" alt="" />
        <img src="../assets/SignupBanner3.svg" alt="" />
      </div>

      <!-- partner section -->
      <div class="w-4/6 mx-auto pt-10 sm:hidden">
        <img src="../assets/partnership.svg" alt="" class="mx-auto" />
        <div class="py-4">
          <a href="http://www.MetAds.club">
            <img src="../assets/Metads.svg" alt="MetAds" class="m-auto"
          /></a>
          <div class="text-shadow-xl">
            <a href="http://www.MetAds.club">
              <p class="font-bold pb-0">MetAds (UK)</p></a
            >
            <p class="font-semibold">A new age metaverse advertising agency</p>
          </div>
        </div>
        <div class="py-4">
          <a href="http://www.Dekoded.uk">
            <img src="../assets/Dekoded.svg" alt="Dekoded" class="m-auto py-2"
          /></a>
          <div class="text-shadow-xl">
            <a href="http://www.Dekoded.uk">
              <p class="font-bold pb-0">Dekoded (UK)</p></a
            >
            <p class="font-semibold">
              An interactive technologically driven digital agency
            </p>
          </div>
        </div>
        <div class="py-4">
          <a href="http://www.Eclinkmedia.com">
            <img src="../assets/Midas.svg" alt="EC" class="m-auto py-1"
          /></a>
          <div class="text-shadow-xl">
            <a href="http://www.Eclinkmedia.com">
              <p class="font-bold pb-0">EC Link (HK)</p></a
            >
            <p class="font-semibold">
              A boutique media buying agency with a global client base
            </p>
          </div>
        </div>
        <div class="py-4">
          <a href="http://www.Midasanalytics.ai">
            <img src="../assets/Midas.svg" alt="Midas" class="m-auto py-1"
          /></a>
          <div class="text-shadow-xl">
            <a href="http://www.Midasanalytics.ai">
              <p class="font-bold pb-0">Midas Analytics (HK)</p></a
            >
            <p class="font-semibold">
              A data driven analytics and machine intelligence consultancy
            </p>
          </div>
        </div>
        <div class="py-4">
          <a href="http://www.Chantecapartners.co">
            <img
              src="../assets/Chanteca.svg"
              alt="Chanteca"
              class="m-auto py-1"
          /></a>
          <div class="text-shadow-xl">
            <a href="http://www.Chantecapartners.co">
              <p class="font-bold pb-0">Chanteca Partners (CA)</p></a
            >
            <p class="font-semibold">
              A smart garment manufacturer with a large corporate client list
            </p>
          </div>
        </div>
      </div>

      <!-- footer section -->
      <div class="sm:hidden grid grid-cols-2">
        <img src="../assets/logo.svg" alt="">
        <img src="../assets/FAQButton.svg" alt="" class="self-end">
      </div>

      <!-- Mobile version ends -->

      <HomePageBanner class="hidden" />
      <HomePageMidBanner class="hidden" />
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
