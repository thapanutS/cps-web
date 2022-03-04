<template>
  <div class="profile">
    <div class="flex flex-col items-center py-10">
      <img src="@/assets/logo/cps-logo.png" width="250" alt="cps-logo" />
      <div>
        <img
          src="@/assets/profile/profile-default.png"
          width="150"
          alt="profile-default"
          class="mt-6 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
    <div class="container px-5">
      <form method="#" action="#" class="">
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
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg focus:outline-none focus:bg-blue-100 focus:ring-0"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Firstname</span
          >
          <input
            type="text"
            name="firstname"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx"
            v-model="form.firstname"
            :rules="firstnameRules"
            @keypress="onlyText($event)"
          />
        </div>

        <div class="mt-7">
          <span
            class="block flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Lastname
          </span>
          <input
            type="test"
            name="lastname"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx"
            v-model="form.lastname"
            @keypress="onlyText($event)"
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
          <!-- <input
            type="number"
            name="Phone"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="08x-xxx-xxxx"
          /> -->
          <input 
            type="tel" 
            name="Phone"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            v-mask="'###-###-####'"
            placeholder="08x-xxx-xxxx"
            @change="(event)=> {this.form.phone = event.target.value.replace(/-/g,'')}"
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
            class="peer mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx_x@silpakorn.edu"
          />
          <p class="peer-invalid:visible flex justify-star mt-2 text-red-600 invisible text-sm">
            Please provide a valid email address.
          </p>
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
// import Config from "~/config";
const REGEX_TEXT = /^[a-zA-Z]*$/
// const REGEX_EMAIL = /^([a-zA-Z0-9\._]+)$/
// const REGEX_PHONE = /^[1-9]([0-9 ]{10})*$/
// const REGEX_NUMBER = /^[0-9]*$/
export default {
  data() {
    return {
      form: {
        uid: "",
        pictureUrl: "",
        displayName: "",
        firstname: "",
        lastname: "",
        studentId: "",
        email: "",
        phone: "",
        role: "STAFF",
        address: "",
        major: "",
        historyEvent: [],
        activeEvent: [],
        point: 0,
        achievement: [],
      },

      firstnameRules: [() => this.firstnameValidator],
      lastnameRules: [() => this.lastnameValidator],
      overlay: false,
    };
  },
  computed: {
    formValue() {
      return this.form;
    },
  },
  async created() {
    // await this.fetchData();
  },
  methods: {
    // fetchData() {
    //   this.initialData();
    // },
    // async initialData() {
    // await this.$liff.init(this.$config.line.liff.index)
    // if (!Config.devTest) {
    // const profile = await this.$liff.getProfile()
    // const accessToken = await this.$liff.getAccessToken()
    // this.$axios.defaults.headers.common.authorization = accessToken
    // if (profile) {
    // this.$store
    //   .dispatch('registerEmployee/checkEmployeeByUid', profile.userId)
    //   .then((res) => {
    //     if (res === true) {
    //       this.$router.push('/')
    //     }
    //   })
    // this.$store.dispatch('registerEmployee/setRegister', {
    //   pictureUrl: profile.pictureUrl,
    //   displayName: profile.displayName,
    //   uid: profile.userId,
    // })
    // // set data to form
    // this.form.uid = profile.userId
    // this.form.pictureUrl = profile.pictureUrl
    // this.form.displayName = profile.displayName
    // }
    // } else {
    // this.$store.dispatch('registerEmployee/setRegister', {
    //   pictureUrl: 'https://image.flaticon.com/icons/png/512/64/64572.png',
    //   displayName: 'User',
    //   uid: 'Ufceef4ed15c12beabc51edfff6cctest7',
    // })
    // // set data to form
    // this.form.pictureUrl =
    //   'https://image.flaticon.com/icons/png/512/64/64572.png'
    // this.form.displayName = 'User'
    // this.form.uid = 'Ufceef4ed15c12beabc51edfff6cctest7'
    // }
    // },
    setFormInput(field, event) {
      const obj = {};
      if(field === 'phone'){
        obj[field] = event.target.value.replace(/-/g,'');
        console.log(`${field} : `,obj[field]);
      }
      if(field !== 'phone'){
        obj[field] = event.target.value;
      }
      
      this.form = obj[field];
    },
    onlyText(event) {
      if (!REGEX_TEXT.test(event.key)) {
        return event.preventDefault()
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
  min-height: 160vh;
  background: #cbe2e0;
  .logo {
    margin-top: 5vh;
  }
  .textareaforn {
    min-height: 200px !important;
  }
}
</style>
