<template>
  <div
    class="card-container bg-white flex items-center justify-between mx-2 rounded"
  >
    <div class="w-1/4">
      <img :src="img" alt="" />
    </div>
    <div class="w-2/4">
      <div class="my-1 truncate">{{ name }}</div>
      <div class="flex justify-center">
        <div
          class="card-tube rounded-full px-3 whitespace-nowrap flex justify-center"
          style="width: 180px !important"
        >
          เหลือ {{ count }} ชิ้น
        </div>
      </div>
    </div>
    <div class="mr-2 w-1/4">
      <div>{{ point }} Points</div>
      <div>
        <button
          @click="$emit('update:claim')"
          class="bg-secondary text-white rounded px-2"
        >
          Claim
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["img", "name", "count", "point"],
  emits: ["update:claim"],
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
