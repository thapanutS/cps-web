<template>
  <div>
    <img id="poster" src="@/assets/Poster.png" alt="" />
    <div class="card_container">
      <div>
        <div>{{ topic }}</div>
        <div>
          {{ description }}
        </div>
        <div>{{ registerEnd }}</div>
      </div>
      <div>{{ point }} pt</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkshopCard",
  props: ["topic", "description", "registerEnd", "point"],
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
