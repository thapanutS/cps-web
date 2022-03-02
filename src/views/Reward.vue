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
      <div class="mt-2" v-for="item in itemList" :key="item.id">
        <ItemCard :name="item.name" :count="item.count" :point="item.point" />
      </div>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  data() {
    return {
      studentId: "07610451",
      name: "Piyabute Chairiboon",
      itemList: [
        {
          id: 1,
          name: "Apple watch",
          count: 6,
          point: 15000,
        },
        {
          id: 2,
          name: "Apple watch",
          count: 6,
          point: 15000,
        },
        {
          id: 3,
          name: "Apple watch",
          count: 6,
          point: 15000,
        },
        {
          id: 4,
          name: "Apple watch",
          count: 6,
          point: 15000,
        },
      ],
    };
  },
  components: {
    ItemCard,
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
