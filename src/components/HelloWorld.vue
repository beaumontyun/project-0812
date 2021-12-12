<template>
  <div class="px-20 flex grid grid-cols-2">
    <p class="font-extrabold text-4xl flex items-start">EARN WHAT YOU MAKE</p>
    <div>
      <p class="text-left">
        We are looking for contributors who can work with us exclusively to
        create high quality content that customers can’t find anywhere else,
        helping them tell compelling stories. In return, we offer great
        benefits.
      </p>
      <form action="" class="grid grid-cols-3 pt-2">
        <input
          type="text"
          placeholder="Sign up for newsletter"
          class="col-span-2 w-full flex items-start border-4 border-light-blue-500 border-opacity-100 px-2 rounded-lg"
        />
        <button class="flex text-center justify-items-center px-2">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style>
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
</style>