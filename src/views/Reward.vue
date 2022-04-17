<template>
  <div class="reward bg-quaternary">
    <!-- POINT BAR -->
    <Layout />
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
import Layout from "@/components/Layout.vue";
import lineUtils from "@/utils/line.js";
import config from "../../config";
export default {
  name: "Reward",
  components: {
    ItemCard,
    UserInfoBar,
    Loading,
    Layout,
  },
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const itemList = computed(() => store.state.item.itemList);
    const userProfile = computed(
      () =>
        store.state.user.userProfile ||
        JSON.parse(localStorage.getItem(`Profile`))
    );
    const isLoadingStatus = computed(() => isLoading.value);
    const fetchData = async (userProfile) => {
      isLoading.value = true;
      await store.dispatch("item/fetchItemList");
      const userID = !config.dev_status
        ? userProfile.value.uid
        : "Ua28a9b8f51a7009c0361e8b9c3df674a";
      !config.dev_status ? await lineUtils.initAndLogin() : "";
      await store.dispatch("user/getUserProfile", userID);
      isLoading.value = false;
    };
    fetchData(userProfile);
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
          isLoading.value = true;
          let userID = null;
          if (!config.dev_status) {
            userID = userProfile.value.uid;
          } else {
            userID = "Ua28a9b8f51a7009c0361e8b9c3df674a";
          }
          const claimCreated = await store.dispatch(
            "claim/createClaimRequest",
            {
              uid: userID,
              itemId: item._id,
            }
          );
          fetchData(userProfile);
          if (claimCreated === "SUCCESSFUL") {
            isLoading.value = false;
            Swal.fire(
              "ทำการแลกของเรียบร้อย!",
              "ตรวจสอบรายละเอียดที่รายการเคลม.",
              "success"
            );
          } else {
            isLoading.value = false;
            Swal.fire(
              "ทำการแลกของไม่สำเร็จ!",
              "Point สำหรับการแลกไม่เพียงพอ",
              "error"
            );
          }
        }
      });
    };
    return {
      isLoading,
      itemList,
      userProfile,
      claimItem,
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
.point-bar {
  border-bottom: 1px solid #c7c7c7;
  img {
    width: 4vw;
  }
}
</style>
