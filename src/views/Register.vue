<template>
  <div class="profile">
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#15C5B5"
      loader="dots"
      :height="60"
      :width="70"
      :lock-scroll="true"
    ></loading>
    <div class="flex flex-col items-center py-10">
      <img src="@/assets/logo/cps-logo.png" width="250" alt="cps-logo" />
      <div>
        <img
          :src="form.pictureUrl"
          width="150"
          alt=""
          class="mt-6 object-cover rounded-full shadow-lg"
        />
        <!-- <img
          src="@/assets/profile/profile-default.png"
          width="150"
          alt=""
          class="mt-6 object-cover rounded-full shadow-lg"
        /> -->
      </div>
    </div>
    <div class="container px-5">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700"
            >Display</span
          >
          <input
            disabled
            type="text"
            name="display"
            placeholder="Display"
            class="mt-1 px-3 block w-full border bg-white h-11 rounded-xl shadow-lg focus:outline-none focus:bg-white-100 focus:ring-0"
            v-model="form.displayName"
          />
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Firstname</span
          >
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 block w-full border bg-white-100 h-11 rounded-xl shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx"
            v-model="form.firstName"
            @keypress="onlyText($event)"
          />
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Lastname
          </span>
          <input
            type="test"
            name="lastName"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx"
            v-model="form.lastName"
            @keypress="onlyText($event)"
          />
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >StudentID</span
          >
          <input
            type="tel"
            name="studentID"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxxxx"
            v-model="form.studentId"
            @keypress="onlyNumber($event)"
          />
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Major</span
          >
          <Listbox as="div" v-model="selected">
            <ListboxLabel class="block text-sm font-medium text-gray-700" />
            <div class="mt-1 relative">
              <ListboxButton
                class="relative w-full bg-white border border-gray-300 rounded-xl shadow-lg pl-3 pr-10 py-2 text-left cursor-default hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0 sm:text-sm"
              >
                <span class="flex items-center">
                  <span
                    :class="[
                      selected.id == 0 ? 'text-gray-400' : 'text-black',
                      'ml-3 block truncate',
                    ]"
                    >{{ selected.name }}</span
                  >
                </span>
                <span
                  class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                  <SelectorIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>
              <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  <ListboxOption
                    as="template"
                    v-for="(person, index) in major"
                    :key="index"
                    :value="person"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-green-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      ]"
                    >
                      <div class="flex items-center">
                        <span
                          :class="[
                            selected ? 'font-semibold' : 'font-normal',
                            'ml-3 block truncate',
                          ]"
                        >
                          {{ person.name }}
                        </span>
                      </div>
                      <span
                        v-if="selected"
                        :class="[
                          active ? 'text-white' : 'text-green-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        ]"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Email
          </span>
          <input
            type="email"
            name="email"
            class="peer mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="xxxxxx_x@silpakorn.edu"
            v-model="form.email"
          />
          <label class="flex mt-1 justify-start text-xs font-normal"
            >กรุณากรอกเฉพาะอีเมลของมหาวิทยาลัย*
          </label>
          <p
            class="peer-invalid:visible flex justify-star my-1 text-xs text-red-600 invisible"
          >
            Please provide a valid email address.
          </p>
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Phone</span
          >
          <input
            type="tel"
            name="Phone"
            class="mt-1 px-3 block w-full border bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            v-mask="'###-###-####'"
            placeholder="08x-xxx-xxxx"
            v-model="form.phone"
          />
          <!-- v-model="form.phone" -->
        </div>

        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <span
            class="flex justify-start mb-3 text-base font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500"
            >Address</span
          >
          <textarea
            type="text"
            name="address"
            class="textareaforn mt-1 p-3 block w-full min-h-full border bg-gray-100 h-11 resize-none rounded-md shadow-lg hover:bg-white-100 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
            placeholder="7/22 M.5, Soi Ta-iat, Chaofa West Rd., T.Chalong A. Phuket 83130 Thailand"
            v-model="form.address"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 md:mb-0 mt-7">
          <button
            :class="[
              validate() ? 'bg-primary' : 'bg-gray disabled',
              'w-full py-3 rounded-md font-medium text-white shadow-lg hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105',
            ]"
            @click="register()"
            :disabled="!validate()"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import config from "../../config";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const REGEX_TEXT = /^[a-zA-Z]*$/;
const REGEX_NUMBER = /^[0-9]*$/;
const userProfileLine = JSON.parse(
  localStorage.getItem(`LIFF_STORE:${config.line.liff_id}:decodedIDToken`)
);
const userProfileLocal = JSON.parse(localStorage.getItem(`Profile`));
export default {
  name: "RegisterPage",
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      major: [
        {
          id: 1,
          name: "CS",
        },
        {
          id: 2,
          name: "IT",
        },
      ],
      selected: {
        id: 1,
        name: "CS",
      },
      form: {
        uid: userProfileLine ? userProfileLine.sub : userProfileLocal.uid,
        pictureUrl: userProfileLine
          ? userProfileLine.picture
          : userProfileLocal.pictureUrl,
        displayName: userProfileLine
          ? userProfileLine.name
          : userProfileLocal.displayName,
        firstName: "",
        lastName: "",
        studentId: "",
        email: "",
        phone: "",
        role: "STUDENT",
        address: "",
        major: "",
        historyEvent: [],
        activeEvent: [],
        point: 0,
        achievement: [],
      },
    };
  },
  computed: {
    selectedValue() {
      return this.selected;
    },
  },
  methods: {
    validate() {
      if (
        this.form.firstName &&
        this.form.lastName &&
        this.form.studentId &&
        (this.form.email.includes(`@su.ac.th`) ||
          this.form.email.includes(`@silpakorn.edu`)) &&
        this.form.phone &&
        this.form.address
      ) {
        return true;
      }
      return false;
    },
    async register() {
      this.isLoading = true;
      this.form.firstName =
        this.form.firstName.charAt(0).toUpperCase() +
        this.form.firstName.slice(1);
      this.form.lastName =
        this.form.lastName.charAt(0).toUpperCase() +
        this.form.lastName.slice(1);
      this.form.major = this.selectedValue.name;
      await this.$store.dispatch("user/createUser", this.form);
      this.$router.push("/homepage");
    },
    onlyText(event) {
      if (!REGEX_TEXT.test(event.key)) {
        return event.preventDefault();
      }
    },
    onlyNumber(event) {
      if (!REGEX_NUMBER.test(event.key)) {
        return event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
  min-height: 175vh;
  background: #cbe2e0;
  .logo {
    margin-top: 5vh;
  }
  .textareaforn {
    min-height: 200px !important;
  }
  .register-button {
    background-color: gray;
  }
}
</style>
