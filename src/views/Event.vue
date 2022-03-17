<template>
  <div class="event flex flex-col">
    <section class="mt-3">
      <div>{{ eventDetail.name }}</div>
      <div class="poster mt-3">
        <img :src="eventDetail.img" class="mx-auto" alt="" />
      </div>
    </section>
    <section class="text-left mt-4 detail">
      <div id="description">{{ eventDetail.description }}</div>
      <div id="point" class="mt-2">{{ eventDetail.point }} pt</div>
      <div class="date">
        <div class="mt-2">
          กิจกรรมเริ่มวันที่ {{ eventDetail.eventStart }} ถึงวันที่
          {{ eventDetail.eventEnd }}
        </div>
        <div class="mt-2">ปิดรับสมัครวันที่ {{ eventDetail.registerEnd }}</div>
        <div class="mt-2">{{ eventDetail.location }}</div>
      </div>
    </section>

    <section
      :class="[
        ` rounded py-2 my-2`,
        btnRegisterStatus(eventDetail)
          ? `bg-secondary text-white`
          : `bg-quaternary text-black`,
      ]"
    >
      <button v-if="btnRegisterStatus(eventDetail)" @click="registerEvent()">
        เข้าร่วมกิจกรรม
      </button>
      <button v-else>ปิดลงทะเบียนแล้ว</button>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const fetchData = async () => {
      await store.dispatch("event/fetchEventDetail", route.params.id);
    };
    onMounted(() => {
      fetchData();
    });

    return {
      eventDetail: computed(() => store.state.event.eventDetail),
      userPersonalInfo: computed(() => store.state.user.user.personalInfo),
      btnRegisterStatus: async (eventDetail) => {
        const event = await eventDetail;
        if (event.members.length < event.maxMember && event.status === "OPEN") {
          return true;
        }
        return false;
      },
      registerEvent: () => {
        Swal.fire({
          title: `คุณแน่ใจว่าต้องการเข้าร่วมกิจกรรมนี้ ?`,
          text: "เมื่อเข้าร่วมแล้วไม่สามารถยกเลิกได้",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ใช่, เข้าร่วมเลย!",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.isConfirmed) {
            const registerStatus = store.dispatch("event/register", {
              uid: "Ua28a9b8f51a7009c0361e8b9c3df674a",
              eventId: route.params.id,
            });
            if (registerStatus === "SUCCESSFUL") {
              Swal.fire(
                "เข้าร่วมกิจกรรมเรียบร้อย!",
                "ตรวจสอบได้ที่รายการกิจกรรมของคุณ.",
                "success"
              );
            } else {
              Swal.fire(
                "เข้าร่วมกิจกรรมไม่สำเร็จ!",
                "จำนวนผู้เข้าร่วมเต็มแล้ว หรือ คุณเข้าร่วมกิจกรรมนี้แล้ว",
                "error"
              );
            }
          }
        });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.event {
  height: 100%;
  min-height: 90vh;
  width: 80vw;
  margin: 0 auto;
}
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
</style>
