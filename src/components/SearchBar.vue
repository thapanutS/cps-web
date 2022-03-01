<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="ค้นหาข้อมูล"
        :value="searchValue"
        @input="$emit('update:searchValue', $event.target.value)"
      />
      <button @click="searchFunction()">
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="-2 -5 24 28"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["searchValue", "searchFunction"],
  emits: ["update:searchValue"],
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

  background-color: transparent;
}
.search .icon {
  background-color: #15c5b5;
  border-radius: 50%;
  align-content: center;
  width: 30px;
  height: 30px;
}
</style>
