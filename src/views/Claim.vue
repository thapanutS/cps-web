<template>
  <div class="reward bg-quaternary">
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
    <section class="mt-2 pt-2 bg-white" style="height: 130vh">
      <div class="mt-2" v-for="claim in claimList" :key="claim._id">
        <ClaimCard
          :img="claim.itemImg"
          :name="claim.itemName"
          :claimDate="claim.claimDate"
          :status="claim.status"
        />
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
export default {
  name: "Claim",
  components: {
    ClaimCard,
    Loading,
    UserInfoBar,
  },
  setup() {
    const isLoading = ref(false);

    const store = useStore();
    const fetchData = async () => {
      isLoading.value = true;

      await store.dispatch(
        "user/getUserProfile",
        "Ua28a9b8f51a7009c0361e8b9c3df674a"
      );
      await store.dispatch(
        "claim/fetchClaimListByUid",
        // store.state.user.userProfile.uid
        "Ua28a9b8f51a7009c0361e8b9c3df674a"
      );
      isLoading.value = false;
    };
    const claimList = computed(() => store.state.claim.claimList);
    const userProfile = computed(() => store.state.user.userProfile);
    const isLoadingStatus = computed(() => isLoading.value);

    fetchData();
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
.reward {
  height: 100%;
  min-height: 90vh;
}
</style>
