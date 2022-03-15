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
        <div class="flex space-x-2 justify-center"></div>
        <ItemCard
          :img="item.img"
          :name="item.name"
          :count="item.totalItem"
          :point="item.point"
          @update:claim="claimItem(item.name)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Swal from "sweetalert2";
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

    onMounted(() => {
      fetchData();
    });

    const claimItem = (itemName) => {
      Swal.fire({
        title: `คุณแน่ใจว่าต้องการแลก ${itemName} ?`,
        text: "เมื่อแลกแล้วไม่สามารถยกเลิกได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, แลกเลย!",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "ทำการแลกของเรียบร้อย!",
            "ตรวจสอบรายละเอียดที่รายการเคลม.",
            "success"
          );
        }
      });
    };
    return { studentId, name, itemList, claimItem };
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
