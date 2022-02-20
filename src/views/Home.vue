<template>
  <div class="home">
    <WorkshopCard />
  </div>
</template>

<script>
// @ is an alias to /src
import WorkshopCard from "@/components/WorkshopCard.vue";

export default {
  name: "Home",
  components: {
    WorkshopCard,
  },
};
</script>
