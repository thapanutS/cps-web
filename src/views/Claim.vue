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
      <div class="mt-2" v-for="claim in claimList" :key="claim.id">
        <ClaimCard
          :name="claim.name"
          :claimDate="claim.claimDate"
          :status="claim.status"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ClaimCard from "@/components/ClaimCard.vue";
export default {
  name: "Claim",
  data() {
    return {
      studentId: "07610451",
      name: "Piyabute Chairiboon",
      claimList: [
        {
          id: 1,
          name: "Apple watch",
          claimDate: "12/02/22",
          status: "WAITING",
        },
        {
          id: 2,
          name: "Apple watch",
          claimDate: "12/02/22",
          status: "CONFIRMED",
        },
        {
          id: 3,
          name: "Apple watch",
          claimDate: "12/02/22",
          status: "REJECTED",
        },
        {
          id: 4,
          name: "Apple watch",
          claimDate: "12/02/22",
          status: "CONFIRMED",
        },
      ],
    };
  },
  components: {
    ClaimCard,
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
