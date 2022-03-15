<template>
  <div
    class="card-container bg-white flex items-center justify-between mx-2 rounded"
  >
    <div>
      <img :src="img" alt="" />
    </div>
    <div>
      <div class="my-1">{{ name }}</div>
      <div class="card-tube rounded-full px-3">เหลือ {{ count }} ชิ้น</div>
    </div>
    <div class="mr-2">
      <div>{{ point }} Points</div>
      <div>
        <button class="bg-secondary text-white rounded px-2">Claim</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["img", "name", "count", "point"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.card-container {
  border: 1px solid #c7c7c7;
  img {
    width: 75px;
    height: 75px;
    border-right: 1px solid #c7c7c7;
  }
}
.card-tube {
  background: #f8c749;
}
</style>
