<template>
  <div class="register">
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
    <div class="container px-3 pt-3">
      <div class="flex flex-row bg-white rounded-xl shadow-lg">
        <div class="w-2/5 py-4 pl-3 pr-5">
          <img
            v-if="userProfile.pictureUrl"
            :src="userProfile.pictureUrl"
            width="150"
            alt=""
            class="object-cover rounded-full shadow-lg"
          />
          <img
            v-else
            src="@/assets/profile/profile-default.png"
            width="150"
            alt=""
            class="object-cover rounded-full shadow-lg"
          />
        </div>
        <div class="w-3/5 py-4 pr-3 flex flex-col items-start">
          <div class="text-2xl font-bold">
            {{ userProfile.displayName }}
          </div>
          <div class="flex flex-row justify-start w-full mt-1">
            <div class="w-1/4 flex">Major</div>
            <div class="w-3/4 text-ellipsis whitespace-nowrap overflow-hidden">
              {{ userProfile.major }}
            </div>
          </div>
          <div class="flex flex-row justify-start w-full">
            <div class="w-1/4 flex">Name</div>
            <div class="w-3/4 text-ellipsis whitespace-nowrap overflow-hidden">
              {{ `${userProfile.firstName} ${userProfile.lastName}` }}
            </div>
          </div>
          <div class="flex flex-row justify-start w-full">
            <div class="w-2/4 flex">Student ID</div>
            <div class="text-ellipsis whitespace-nowrap overflow-hidden">
              {{ userProfile.studentId }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="actionBox flex flex-col py-4 px-4 mt-3 bg-white rounded-xl shadow-lg h-full overscroll-auto"
      >
        <div class="customBox">
          <div class="w-full">
            <div
              class="flex w-2/5 items-center justify-center h-8 font-bold bg-secondary text-white shadow-lg rounded-xl"
            >
              Addresss
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="h-20 overflow-y-auto text-sm">
                {{ userProfile.address }}
              </div>
            </div>
          </div>
          <div class="achivement-box w-full mt-3">
            <div
              class="flex w-2/5 items-center justify-center font-bold h-8 bg-secondary text-white shadow-lg rounded-xl"
            >
              Achivement
            </div>
            <div
              class="achivement-content py-4 px-4 mt-3 flex flex-row text-left bg-gray rounded-xl"
            >
              <div class="block items-center h-28 w-full overflow-auto">
                <div class="inline-block my-2 items-center w-1/2">
                  <div
                    class="achivement-image w-1/2 p-3 bg-white rounded-full shadow-lg"
                  >
                    <img src="@/assets/achivement/beginer.png" />
                  </div>
                  <p class="achivement-description">สมาชิกใหม่</p>
                </div>
                <div class="inline-block my-2 items-center w-1/2">
                  <div
                    class="achivement-image w-1/2 p-3 bg-white rounded-full shadow-lg"
                  >
                    <img src="@/assets/achivement/coins.png" />
                  </div>
                  <p class="achivement-description">มีคะแนนครบ 100 Points</p>
                </div>
                <div class="inline-block my-2 items-center w-1/2">
                  <div
                    class="achivement-image w-1/2 p-3 bg-white rounded-full shadow-lg"
                  >
                    <img src="@/assets/achivement/bronze-medal.png" />
                  </div>
                  <p class="achivement-description">
                    เข้าร่วมกิจกรรมครบ 25 ครั้ง
                  </p>
                </div>
                <div class="inline-block my-2 items-center w-1/2">
                  <div
                    class="achivement-image w-1/2 p-3 bg-white rounded-full shadow-lg"
                  >
                    <img src="@/assets/achivement/silver-medals.png" />
                  </div>
                  <p class="achivement-description">
                    เข้าร่วมกิจกรรมครบ 50 ครั้ง
                  </p>
                </div>
                <div class="inline-block my-2 items-center w-1/2">
                  <div
                    class="achivement-image w-1/2 p-3 bg-white rounded-full shadow-lg"
                  >
                    <img src="@/assets/achivement/gold-medal.png" />
                  </div>
                  <p class="achivement-description">
                    เข้าร่วมกิจกรรมครบ 75 ครั้ง
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-3">
            <div
              class="flex w-2/4 items-center justify-center h-8 font-bold bg-secondary text-white shadow-lg rounded-xl"
            >
              Active Workshop
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="action-workshop h-24 text-sm overflow-y-auto">
                <div
                  v-for="(item, index) in activeEvent"
                  :key="index"
                  class="action-box pb-3 flex items-center my-3"
                >
                  <b
                    class="box1 text-center text-ellipsis whitespace-nowrap overflow-hidden"
                  >
                    {{ item.name }}
                  </b>
                  <div class="box2 text-center">
                    {{ formatDate(item.eventStart, item.eventEnd) }}
                  </div>
                  <div class="box3 text-center">
                    <span style="color: green">{{ item.point }}</span> Points
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full mt-3">
            <div
              class="flex w-2/4 items-center justify-center h-8 font-bold bg-secondary text-white shadow-lg rounded-xl"
            >
              History Workshop
            </div>
            <div class="py-4 px-4 mt-3 text-left bg-gray rounded-xl">
              <div class="action-workshop h-24 text-sm overflow-y-auto">
                <div
                  v-for="(item, index) in historyEvent"
                  :key="index"
                  class="action-box pb-3 flex items-center my-3"
                >
                  <b
                    class="box1 text-center text-ellipsis whitespace-nowrap overflow-hidden"
                  >
                    {{ item.name }}
                  </b>
                  <div class="box2 text-center">
                    {{ formatDate(item.eventStart, item.eventEnd) }}
                  </div>
                  <div class="box3 text-center">
                    <span style="color: green">{{ item.point }}</span> Points
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import moment from "moment";
import { ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Layout from "@/components/Layout.vue";
import lineUtils from "@/utils/line.js";
import config from "../../config";
export default {
  components: { Loading, Layout },
  setup() {
    const isLoading = ref(false);
    const store = useStore();
    const userProfile = computed(
      () =>
        store.state.user.userProfile ||
        JSON.parse(localStorage.getItem(`Profile`))
    );
    const activeEvent = computed(() => store.state.user.eventActiveList);
    const historyEvent = computed(() => store.state.user.eventHistoryList);
    const isLoadingStatus = computed(() => isLoading.value);

    const fetchData = async (userProfile) => {
      isLoading.value = true;
      const userID = !config.dev_status
        ? userProfile.value.uid
        : "Ua28a9b8f51a7009c0361e8b9c3df674a";
      !config.dev_status ? await lineUtils.initAndLogin() : "";
      await store.dispatch("user/getEventActiveByUid", userID);
      await store.dispatch("user/getEventHistoryByUid", userID);
      isLoading.value = false;
    };
    fetchData(userProfile);

    const formatDate = (eventStart, eventEnd) => {
      return `${moment(eventStart).format("DD")}
      \n-\n
      ${moment(eventEnd).format("DD MMM YYYY")}`;
    };

    return {
      isLoading,
      fetchData,
      userProfile,
      activeEvent,
      historyEvent,
      formatDate,
      isLoadingStatus,
    };
  },
};
</script>
<style lang="scss" scoped>
.register {
  height: 100%;
  min-height: 95vh;
  background: #cbe2e0;
  .actionBox {
    height: 67vh;
    .customBox {
      overflow-y: auto;
      .achivement-box {
        .achivement-content {
          height: 9rem;
          .achivement-image {
            margin: 0 auto !important;
          }
          .achivement-description {
            margin-top: 0.25rem; /* 4px */
            font-size: 0.75rem; /* 12px */
            line-height: 1rem; /* 16px */
            text-align: center !important;
          }
        }
      }
      .action-workshop {
        .action-box {
          border-bottom: 1px solid #bbb;
          margin-bottom: -1px;
          &:last-child {
            border-bottom: 0px;
          }
          .box1 {
            width: 38%;
          }
          .box2 {
            width: 37%;
            color: blue;
          }
          .box3 {
            width: 25%;
          }
        }
      }
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #15c5b5;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #15c5b5;
  }
}
</style>
