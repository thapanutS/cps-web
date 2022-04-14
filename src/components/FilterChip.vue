<template>
  <button :class="[`filter px-2`, isSelected ? ` selected` : '']">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "FilterChip",
  props: ["text", "isSelected"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.filter {
  width: max-content;
  min-width: 60px;
  height: 100%;
  min-height: 26px;
  border-radius: 14px 14px 14px 14px;
  font-size: 12px;
  background-color: #f1f1f1;
  color: black;
  &.selected {
    background-color: #404041;
    color: white;
  }
}
</style>
