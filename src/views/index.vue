<template>
  <div>
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
    <!-- <b>Index Page</b> -->
    <div class="flex items-center h-screen">
      <img src="@/assets/logo/cps-logo.png" alt="cps-logo" />
    </div>
  </div>
</template>

<script>
import lineUtils from "@/utils/line.js";
import config from "../../config";
import { mapGetters } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      uid: "",
      displayName: "",
      pictureUrl: "",
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      userProfile: "user/getUserProfile",
    }),
  },
  methods: {
    async fetchData() {
      await lineUtils.init();
      if (!config.dev_status) {
        await lineUtils.login();
        this.isLoading = true;
        const lineProfile = JSON.parse(
          localStorage.getItem(
            `LIFF_STORE:${config.line.liff_id}:decodedIDToken`
          )
        );
        this.uid = lineProfile.sub;
      } else {
        this.isLoading = true;
        (this.uid = "Ua28a9b8f51a7009c0361e8b9c3df674a"),
          (this.displayName = "Book"),
          (this.pictureUrl =
            "https://www.img.in.th/images/33fdad6bd60ea49e0aea95f7eb751d32.png");
      }
      await this.isRegistered();
    },
    async isRegistered() {
      const response = await this.$store.dispatch(
        "user/getUserProfile",
        this.uid
      );
      if (response) {
        if (!config.dev_status) {
          await this.$store.dispatch("user/updateProfile", this.uid);
        }
        console.log("user is registered");
        this.isLoading = false;
        this.$router.push("/homepage");
      } else {
        console.log("user is not registered");
        this.isLoading = false;
        this.$router.push("/register");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
