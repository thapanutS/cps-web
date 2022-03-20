<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import lineUtils from "@/utils/line.js";
export default {
  async setup() {
    const router = useRouter();
    const store = useStore();

    await lineUtils.init();
    await lineUtils.login();

    const lineVertifyInfo = store.state.user.lineVertifyInfo;
    if (lineVertifyInfo) {
      router.push("/");
    } else {
      router.push("/register");
    }

    return {};
  },
};
</script>
