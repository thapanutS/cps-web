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
        isRegister ? `bg-quaternary text-black` : `bg-secondary text-white`,
      ]"
    >
      <button v-if="isRegister">ลงทะเบียนแล้ว</button>
      <button v-else @click="joinEvent">เข้าร่วมกิจกรรม</button>
    </section>
  </div>
</template>

<script>
// import { ref } from "vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
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
      // access a state in computed function
      eventDetail: computed(() => store.state.event.eventDetail),
      activeEvent: computed(() => store.state.user.activeEvent),
      historyEvent: computed(() => store.state.user.historyEvent),
      // // access a getter in computed function
      isRegister: computed(() => store.getters.isRegister),
      joinEvent: () => {
        console.log("Join Event");
        // waiting for commit and connect with api in store
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
