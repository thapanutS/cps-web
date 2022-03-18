<template>
  <div>
    <section
      class="flex items-center justify-between px-4 py-3 bg-white point-bar sticky top-0 z-1"
    >
      <p class="student-id">{{ studentId }}123</p>
      <p class="name px-2 w-6/12">{{ firstName + " " + lastName }}</p>
      <div class="flex items-center">
        <p class="mr-2">
          <b>{{ point }}</b>
        </p>
        <img src="@/assets/reward/token.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["studentId", "firstName", "lastName", "point"],
};
</script>

<style lang="scss" scoped>
.point-bar {
  border-bottom: 1px solid #c7c7c7;
  img {
    width: 4vw;
  }
  .name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .student-id {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
