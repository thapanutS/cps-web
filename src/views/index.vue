<template>
  <div></div>
</template>

<script>
import lineUtils from "@/utils/line.js";
export default {
  async create() {
    await this.fetchData();
  },
  methods: {
    fetchData() {
      this.connectingLine();
    },
    async connectingLine() {
      await lineUtils.init();
      await this.isRegistered();
    },
    async isRegistered() {
      await lineUtils.login();
      const lineProfile = localStorage.getItem(
        `${process.env.VUE_APP_LINE_LIFF_ID}:decodedIDToken`
      );
      console.log("lineProfile : ", lineProfile);
      if (lineProfile) {
        const registerStatus = await this.$store.dispatch(
          "user/checkRegister",
          // "Ua28a9b8f51a7009c0361e8b9c3df674c"
          lineProfile.sub
        );
        registerStatus ? $router.push("/") : $router.push("/register");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
