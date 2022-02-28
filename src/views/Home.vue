<template>
  <div class="home">
    <section class="d-flex">
      <div class="flex-grow-1"><SearchBar /></div>
      <div class="flex-grow-0 px-0 py-0 align-center">
        <input type="button" id="filter" value="ตัวกรอง" />
      </div>
    </section>

    <section class="menu">
      <input
        type="button"
        @click="menuType = `ALL_EVENT`"
        value="กิจกรรมที่เปิดรับสมัคร"
        class="menu-btn mx-4"
      />
      <input
        type="button"
        @click="menuType = `MY_EVENT`"
        value="กิจกรรมที่เข้าร่วม"
        class="menu-btn mx-4"
      />
    </section>

    <section>
      <div v-if="menuType === `ALL_EVENT`">
        <WorkshopCard
          :topic="topic"
          :description="description"
          :registerEnd="registerEnd"
          :point="point"
          :type="eventType"
        />
        <WorkshopCard
          :topic="topic"
          :description="description"
          :registerEnd="registerEnd"
          :point="point"
          :type="eventType"
        />
      </div>
      <div v-else>
        <WorkshopCard
          :topic="topic"
          :description="description"
          :registerEnd="registerEnd"
          :point="point"
          :type="eventType"
        />
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkshopCard from "@/components/WorkshopCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    WorkshopCard,
    SearchBar,
  },
  setup() {
    const topic = ref("Kick-off Startup by SU Entrepreneur Club");
    const description = ref(
      "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ"
    );
    const registerEnd = ref("เหลือเวลารับสมัครอีก 3 วัน");
    const point = ref("300");
    const menuType = ref("ALL_EVENT");
    const eventType = ref("แนะแนว");

    return {
      topic,
      description,
      registerEnd,
      point,
      menuType,
      eventType,
    };
  },
};
</script>

<style scoped>
#filter {
  width: 60px;
  height: 100%;
  min-height: 30px;

  color: white;
  background-color: #404041;
  border-radius: 18px 18px 18px 18px;
  font-size: 12px;
}
.menu {
  height: 30px;
}
.menu .menu-btn {
  font-size: 12px;
}
.menu .menu-btn:hover {
  border-bottom: 2px solid #15c5b5;
}
</style>
