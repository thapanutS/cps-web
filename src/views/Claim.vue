<template>
  <div class="claim bg-quaternary">
    <Layout />
    <!-- POINT BAR -->
    <loading
      :active="isLoadingStatus"
      :can-cancel="false"
      :is-full-page="true"
      color="#15C5B5"
      loader="dots"
      :height="60"
      :width="70"
      :lock-scroll="true"
    ></loading>
    <UserInfoBar
      :studentId="userProfile.studentId"
      :firstName="userProfile.firstName"
      :lastName="userProfile.lastName"
      :point="userProfile.point"
    />

    <!-- ITEM LIST  -->
    <section
      :class="[
        `mt-2 pt-2 bg-white overflow-y-scroll`,
        !claimList.length ? `flex justify-center` : ``,
      ]"
      style="height: 82.9vh"
    >
      <div class="mt-2" v-for="claim in claimList" :key="claim._id">
        <ClaimCard
          :img="claim.itemImg"
          :name="claim.itemName"
          :claimDate="claim.claimDate"
          :status="claim.status"
        />
      </div>
      <div v-if="!claimList.length" class="flex justify-center items-center">
        <img src="@/assets/not-found/not-found.png" width="150" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ClaimCard from "@/components/ClaimCard.vue";
import UserInfoBar from "@/components/UserInfoBar.vue";
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Layout from "@/components/Layout.vue";
import lineUtils from "@/utils/line.js";
import config from "../../config";
export default {
  name: "Claim",
  components: {
    ClaimCard,
    Loading,
    UserInfoBar,
    Layout,
  },
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const claimList = computed(() => store.state.claim.claimList);
    const userProfile = computed(
      () =>
        store.state.user.userProfile ||
        JSON.parse(localStorage.getItem(`Profile`))
    );
    const isLoadingStatus = computed(() => isLoading.value);

    const fetchData = async (userProfile) => {
      isLoading.value = true;
      const userID = !config.dev_status
        ? userProfile.value.uid
        : "Ua28a9b8f51a7009c0361e8b9c3df674a";
      !config.dev_status ? await lineUtils.initAndLogin() : "";
      await store.dispatch("claim/fetchClaimListByUid", userID);
      isLoading.value = false;
    };
    fetchData(userProfile);
    return {
      isLoading,
      userProfile,
      claimList,
      isLoadingStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.claim {
  height: 100%;
  min-height: 90vh;
}
</style>
