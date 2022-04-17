<template>
  <div
    class="card-container bg-white flex items-center justify-between mx-2 rounded"
  >
    <div>
      <img :src="img" alt="" class="rounded-l" />
    </div>
    <div>
      <div class="my-1">{{ name }}</div>
      <div class="my-1 claim-date">Claim date : {{ formatDate(claimDate) }}</div>
    </div>
    <div class="mr-2">
      <div
        :class="[
          `status`,
          ` px-2 py-1`,
          `rounded`,
          `text-white`,
          [status.toLowerCase()],
        ]"
      >
        {{ status.toLowerCase() }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ClaimCard",
  props: ["img", "name", "claimDate", "status"],
  setup() {
    const formatDate = (claimDate) => {
      return `${moment(claimDate).format("DD MMM YYYY")}`;
    };
    return {
      formatDate,
    };
  },
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
.claim-date {
  font-size: 12px;
}
.status {
  font-size: 12px;

  text-transform: capitalize;

  &.waiting {
    background-color: #5a959a;
  }
  &.confirmed {
    background-color: green;
  }
  &.rejected {
    background-color: #af032b;
  }
}
</style>
