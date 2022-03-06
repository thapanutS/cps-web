<template>
  <div class="event flex flex-col">
    <section class="mt-3">
      <div>{{ eventData.name }}</div>
      <div class="poster mt-3">
        <img src="@/assets/poster.png" alt="" />
      </div>
    </section>
    <section class="text-left mt-4 detail">
      <div id="description">{{ eventData.description }}</div>
      <div id="point" class="mt-2">{{ eventData.point }} pt</div>
      <div class="date">
        <div class="mt-2">
          กิจกรรมเริ่มวันที่ {{ eventData.eventStart }} ถึงวันที่
          {{ eventData.eventEnd }}
        </div>
        <div class="mt-2">ปิดรับสมัครวันที่ {{ eventData.registerEnd }}</div>
        <div class="mt-2">{{ eventData.location }}</div>
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
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    return {
      // access a state in computed function
      eventData: computed(() => store.state.eventSelected),
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
    width: 300px;
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
