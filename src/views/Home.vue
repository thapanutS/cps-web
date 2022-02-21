<template>
  <div class="home">
    <WorkshopCard
      :topic="topic"
      :description="description"
      :registerEnd="registerEnd"
      :point="point"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import WorkshopCard from "@/components/WorkshopCard.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    WorkshopCard,
  },
  setup() {
    const topic = ref("Kick-off Startup by SU Entrepreneur Club");
    const description = ref(
      "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ"
    );
    const registerEnd = ref("เหลือเวลารับสมัครอีก 3 วัน");
    const point = ref("300");

    return {
      topic,
      description,
      registerEnd,
      point,
    };
  },
};
</script>
