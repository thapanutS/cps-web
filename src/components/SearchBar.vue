<template>
  <div>
    <div class="search">
      <input type="text" placeholder="ค้นหาข้อมูล" />
      <div class="icon"><v-icon color="#FFFFFF">mdi-magnify</v-icon></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["input"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  display: flex;
  background-color: #f1f1f1;
  border-radius: 24px 24px 24px 24px;
}
.search input {
  text-align: center;
  width: 100%;
  outline: none;
  font-size: 12px;
}
.search .icon {
  background-color: #15c5b5;
  border-radius: 50%;
  align-content: center;
  width: 30px;
  height: 30px;
}
</style>
