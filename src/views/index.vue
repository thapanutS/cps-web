<template>
  <div><b>Index Page</b></div>
</template>

<script>
import lineUtils from "@/utils/line.js";
export default {
  created() {
    console.log("Create starting");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      console.log("Line init");
      await lineUtils.init();
      this.isRegistered();
    },
    async isRegistered() {
      await lineUtils.login();
      const lineProfile = localStorage.getItem(
        `LIFF_STORE:${process.env.VUE_APP_LINE_LIFF_ID}:decodedIDToken`
      );
      const decode =  await lineUtils.getDecodedIDToken();
      console.log("decode : ",decode);
      console.log("lineProfile : ", JSON.parse(lineProfile));
      // if (lineProfile) {
      //   const registerStatus = await this.$store.dispatch(
      //     "user/checkRegister",
      //     // "Ua28a9b8f51a7009c0361e8b9c3df674c"
      //     lineProfile.sub
      //   );
      //   registerStatus
      //     ? this.$router.push("/homepage")
      //     : this.$router.push("/register");
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
