<template>
  <div></div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import lineUtils from "@/utils/line.js";
export default {
  async setup() {
    const store = useStore();
    const router = useRouter();

    await lineUtils.init();
    await lineUtils.login();

    const lineProfile = localStorage.getItem(
      `LIFF_STORE:${process.env.VUE_APP_LINE_LIFF_ID}:decodedIDToken`
    );

    const registerStatus = await store.dispatch(
      "user/checkRegister",
      lineProfile.sub
    );

    if (registerStatus === false) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  },
};
</script>

<style lang="scss" scoped></style>
