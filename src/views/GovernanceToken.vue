<template>
  <div class="h-screen container sm:mx-auto">
    <div class="grid grid-cols-2 gap-x-5">
      <!-- Title and text -->
      <div class="grid grid-rows-5">
        <!-- title -->
        <div class="flex row-span-1">
          <img src="../assets/GovernanceIcon.svg" alt="Cat" class="mr-3" id="icon" />
          <div class="text-left font-bold">
            <ul>
              <li class="text-quaternary-light text-4xl text-shadow-md">
                governance tokens
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
        <img src="../assets/GovernanceToken.svg" alt="">
          <ul class="list-disc">
            <li>Help us form and shape your DAO (Decentralised Autonomous Organisation)</li>
            <li>
              Have your say on this project and directly benefit from your choices
            </li>
            <li>
              Owning the right to propose and vote on policy, protocol and the future of Hands Off
            </li>
            <li>Earn benefits from the success of the platform</li>
          </ul>
        </div>
      </div>

      <!-- Screenshot -->
      <div class="mt-10">
        <img
          src="../assets/Banner2.svg"
          alt=""
          class="h-5/6 w-auto"
        />
        <p class="text-primary-light text-left border-b-2 border-white w-1/2 ml-3">photography by Andre Benz</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GovernanceToken",
};
</script>

<style scoped>
#icon {
    width: 84px;
    height: 84px;
}
</style>