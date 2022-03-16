<template>
  <div class="reward bg-quaternary">
    <!-- POINT BAR -->
    <section
      class="flex items-center justify-between px-4 py-3 bg-white point-bar sticky top-0 z-1"
    >
      <p>{{ studentId }}</p>
      <p>{{ name }}</p>
      <div class="flex items-center">
        <p class="mr-2">
          <b>100</b>
        </p>
        <img src="@/assets/reward/token.png" alt="" />
      </div>
    </section>

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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ClaimCard from "@/components/ClaimCard.vue";
export default {
  name: "Claim",
  components: {
    ClaimCard,
  },
  setup() {
    const store = useStore();
    const studentId = ref("07610451");
    const name = ref("Piyabute Chairiboon");
    const claimList = computed(() => store.state.claim.claimList);
    const uid = ref("Ua28a9b8f51a7009c0361e8b9c3df674a");
    const fetchClaimList = async () => {
      await store.dispatch("claim/fetchClaimListByUid", uid.value);
    };
    onMounted(() => {
      fetchClaimList();
    });
    return {
      studentId,
      name,
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
.point-bar {
  border-bottom: 1px solid #c7c7c7;
  img {
    width: 4vw;
  }
}
</style>
