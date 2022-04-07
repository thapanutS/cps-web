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
      const decodeIDToken =  await lineUtils.getDecodedIDToken();
      console.log("decode : ",decodeIDToken);
      if (decodeIDToken) {
        const registerStatus = await this.$store.dispatch(
          "user/checkRegistered",
          // "Ua28a9b8f51a7009c0361e8b9c3df674c"
          decodeIDToken.sub
        );
        registerStatus
          ? this.$router.push("/homepage")
          : this.$router.push("/register");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
