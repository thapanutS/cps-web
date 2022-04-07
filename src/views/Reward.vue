<template>
  <div class="reward bg-quaternary">
    <!-- POINT BAR -->
    <loading
      :active="isLoadingStatus"
      :can-cancel="false"
      is-full-page="true"
      color="#15C5B5"
      loader="dots"
      height="60"
      width="70"
    ></loading>
    <UserInfoBar
      :studentId="personalInfo.studentId"
      :firstName="personalInfo.firstName"
      :lastName="personalInfo.lastName"
      :point="personalInfo.point"
    />

    <!-- ITEM LIST  -->
    <section class="mt-2 pt-2 bg-white" style="height: 130vh">
      <div class="mt-2" v-for="item in itemList" :key="item._id">
        <div class="flex space-x-2 justify-center"></div>
        <ItemCard
          :img="item.img"
          :name="item.name"
          :count="item.totalItem"
          :point="item.point"
          @update:claim="claimItem(item)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import UserInfoBar from "@/components/UserInfoBar.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import Swal from "sweetalert2";
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Reward",
  components: {
    ItemCard,
    UserInfoBar,
    Loading,
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
      await store.dispatch("item/fetchItemList");
      isLoading.value = false;
    };

    fetchData();
    const itemList = computed(() => store.state.item.itemList);
    const personalInfo = computed(() => store.state.user.userProfile);
    const isLoadingStatus = computed(() => isLoading.value);
    const claimItem = (item) => {
      Swal.fire({
        title: `คุณแน่ใจว่าต้องการแลก ${item.name} ?`,
        text: "เมื่อแลกแล้วไม่สามารถยกเลิกได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, แลกเลย!",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const claimCreated = await store.dispatch(
            "claim/createClaimRequest",
            {
              uid: "Ua28a9b8f51a7009c0361e8b9c3df674a",
              itemId: item._id,
            }
          );
          fetchData();
          if (claimCreated === "SUCCESSFUL") {
            Swal.fire(
              "ทำการแลกของเรียบร้อย!",
              "ตรวจสอบรายละเอียดที่รายการเคลม.",
              "success"
            );
          } else {
            Swal.fire(
              "ทำการแลกของไม่สำเร็จ!",
              "Point สำหรับการแลกไม่เพียงพอ",
              "error"
            );
          }
        }
      });
    };
    return { isLoading, itemList, personalInfo, claimItem, isLoadingStatus };
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
