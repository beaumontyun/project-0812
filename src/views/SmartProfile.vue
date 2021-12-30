<template>
  <div class="h-screen container sm:mx-auto">
    <div class="gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img src="../assets/SmartCardIcon.svg" alt="Cat" class="mr-3"/>
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-4xl text-shadow-md">smart profile cards</li>
              <li class="text-primary-light text-2xl">Every creator, investor and collector needs to be able to show the world who they are and what they do quickly and conveniently.</li>
            </ul>
          </div>
        </div>
        <!-- text -->
        <div class="row-span-4 text-primary-light text-left text-2xl font-semibold pt-10">
          <ul class="list-disc">
            <li>
              Have all your contact information in one place
            </li>
            <li>
              Carry your whole portfolio and CV with you at all times
            </li>
            <li>
              Share your profile quickly and contactlessly
            </li>
            <li>Increase your profile and following easily</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmartProfile",
};
</script>

<style>
</style>