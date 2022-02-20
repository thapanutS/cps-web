template
<template>
  <div>
    <img id="poster" src="@/assets/Poster.png" alt="" />
    <div class="card_container">
      <div>
        <div>{{ topic || "Kick-off Startup by SU Entrepreneur Club" }}</div>
        <div>
          {{
            description ||
            "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ"
          }}
        </div>
        <div>{{ registerEnd || "เหลือเวลารับสมัครอีก 3 วัน" }}</div>
      </div>
      <div>{{ point || "300 pt" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    topic: String,
    description: String,
    registerEnd: String,
    point: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card_container {
  display: flex;
  text-align: left;
  background: pink;
  border-radius: 8px;
  box-shadow: 2px;
}
#poster {
  height: 50vh;
}
</style>
