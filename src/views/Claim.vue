<template>
  <div class="reward bg-quaternary">
    <!-- POINT BAR -->
    <UserInfoBar
      :studentId="personalInfo.studentId"
      :firstName="personalInfo.firstName"
      :lastName="personalInfo.lastName"
      :point="personalInfo.point"
    />

    <!-- ITEM LIST  -->
    <section class="mt-2 pt-2 bg-white h-screen">
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
export default {
  name: "Claim",
  components: {
    ClaimCard,
    UserInfoBar,
  },
  setup() {
    const store = useStore();
    const fetchData = async () => {
      await store.dispatch(
        "user/getPersonalInfo",
        "Ua28a9b8f51a7009c0361e8b9c3df674a"
      );
      await store.dispatch(
        "claim/fetchClaimListByUid",
        store.state.user.personalInfo.uid
      );
    };
    const claimList = computed(() => store.state.claim.claimList);
    const personalInfo = computed(() => store.state.user.personalInfo);
    fetchData();
    return {
      personalInfo,
      claimList,
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
