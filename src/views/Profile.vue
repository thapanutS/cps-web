<template>
  <div class="profile">
    <div class="flex justify-center mb-10">
      <img src="@/assets/logo/cps-logo.png" width="250" alt="cps-logo" />
    </div>
    <div class="container px-5">
      <form method="#" action="#" class="mt-10">
        <div>
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700"
            >Display</span
          >
          <input
            disabled
            type="text"
            name="display"
            placeholder="Display"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:bg-blue-100 focus:ring-0"
          />
        </div>
        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Name</span
          >
          <input
            type="email"
            name="email"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="Arthit Chaiyp"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >StudentID</span
          >
          <input
            type="number"
            name="studentID"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxxxx"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Phone</span
          >
          <input
            type="number"
            name="studentID"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="063-507-xxxx"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Email</span
          >
          <input
            type="email"
            name="email"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx_x@silpakorn.edu"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Address</span
          >
          <textarea
            type="text"
            name="address"
            class="textareaforn mt-1 p-3 block w-full min-h-full border bg-gray-100 h-11 resize-none rounded-md shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="7/22 M.5, Soi Ta-iat, Chaofa West Rd., T.Chalong A. Phuket 83130 Thailand"
          />
        </div>

        <div class="mt-7">
          <button
            class="bg-primary w-full py-3 rounded-xl font-medium text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  // components: {
  //   Menu,
  //   MenuButton,
  //   MenuItem,
  //   MenuItems,
  //   ChevronDownIcon,
  // },
};
</script>
<style lang="scss" scoped>
.profile {
  height: 100%;
  min-height: 90vh;
  background: #CBE2E0;
  .logo {
    margin-top: 5vh;
  }
  .textareaforn{
    min-height: 200px !important;
  }
}
</style>
