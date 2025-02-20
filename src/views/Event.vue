<template>
  <div class="event flex flex-col">
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
    <div class="mx-8">
      <section class="mt-3">
        <div class="text-lg font-bold truncate">{{ getEventDetail.name }}</div>
        <div class="poster mt-3">
          <img :src="getEventDetail.img" class="mx-auto" alt="" />
        </div>
      </section>
      <section class="text-left mt-4 getEventDetail detail">
        <div class="text-base">{{ getEventDetail.description }}</div>
        <div id="point" class="mt-2">
          คะแนนที่ได้ {{ getEventDetail.point }} pt
        </div>
        <div class="date">
          <div class="mt-2">
            กิจกรรมเริ่มวันที่
            {{ formatDate(getEventDetail.eventStart) }} ถึงวันที่
            {{ formatDate(getEventDetail.eventEnd) }}
          </div>
          <div class="mt-2">
            ปิดรับสมัครวันที่ : {{ formatDate(getEventDetail.registerEnd) }}
          </div>
          <div class="mt-2">สถานที่ {{ getEventDetail.location }}</div>
        </div>
      </section>
      <section
        :class="[
          ` rounded py-2 my-2`,
          btnRegisterStatus()
            ? `bg-secondary text-white`
            : `bg-quaternary text-black`,
        ]"
      >
        <button v-if="btnRegisterStatus()" @click="registerEvent()">
          เข้าร่วมกิจกรรม
        </button>
        <button v-else>ปิดลงทะเบียนแล้ว</button>
      </section>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import moment from "moment";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Layout from "@/components/Layout.vue";
export default {
  components: {
    Layout,
    Loading,
  },
  created() {
    this.initailData();
  },
  computed: {
    ...mapGetters({
      eventDetail: "event/getEventDetail",
      userProfileData: "user/getUserProfile",
    }),
    userProfile() {
      return this.userProfile || JSON.parse(localStorage.getItem(`Profile`));
    },
    getEventDetail() {
      return this.eventDetail[0];
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async initailData() {
      console.log("initailData");
      await this.$store.dispatch(
        "event/fetchEventDetail",
        this.$route.params.id
      );
    },
    btnRegisterStatus() {
      const event = this.getEventDetail;
      const checkMember = event.members.find((member) => {
        return member === this.userProfile.uid;
      });

      if (
        event.members.length < event.maxMember &&
        event.status === "opened" &&
        checkMember === undefined
      ) {
        return true;
      }
      return false;
    },
    registerEvent() {
      Swal.fire({
        title: `คุณแน่ใจว่าต้องการเข้าร่วมกิจกรรมนี้ ?`,
        text: "เมื่อเข้าร่วมแล้วไม่สามารถยกเลิกได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ใช่, เข้าร่วมเลย!",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          const registerStatus = await this.$store.dispatch("event/register", {
            uid: this.userProfile.uid,
            eventId: this.$route.params.id,
          });
          if (registerStatus.data === "SUCCESSFUL") {
            console.log("registerStatus  -> ", registerStatus);
            this.isLoading = false;
            Swal.fire(
              "เข้าร่วมกิจกรรมเรียบร้อย!",
              "ตรวจสอบได้ที่รายการกิจกรรมของคุณ.",
              "success"
            );
            this.$router.push("/");
          } else {
            this.isLoading = false;
            Swal.fire(
              "เข้าร่วมกิจกรรมไม่สำเร็จ!",
              "จำนวนผู้เข้าร่วมเต็มแล้ว หรือ คุณเข้าร่วมกิจกรรมนี้แล้ว",
              "error"
            );
          }
        }
      });
    },
    formatDate(date) {
      return `${moment(date).format("DD MMM YYYY")}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  height: 100%;
  min-height: 90vh;
  .poster {
    img {
      width: 28rem;
    }
  }
  .detail {
    font-size: 14px;
    #point {
      color: #3ebe4b;
    }
    .date {
      font-size: 12px;
    }
  }
}
</style>
