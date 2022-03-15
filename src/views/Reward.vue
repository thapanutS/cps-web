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
      <div class="mt-2" v-for="item in itemList" :key="item._id">
        <ItemCard
          :img="item.img"
          :name="item.name"
          :count="item.totalItem"
          :point="item.point"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Reward",
  components: {
    ItemCard,
  },
  setup() {
    const store = useStore();
    const studentId = ref("07610451");
    const name = ref("Piyabute Chairiboon");

    const fetchData = async () => {
      await store.dispatch("item/fetchItemList");
    };

    const itemList = computed(() => store.state.item.itemList);
    fetchData();
    return { studentId, name, itemList };
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
