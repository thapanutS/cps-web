<template>
  <div>
    <div v-if="!$route.path === '/register'" class="flex justify-center p-2">
      <div class="cps-logo">
        <img src="@/assets/logo/cps-logo.png" alt="cps-logo" />
      </div>
    </div>
    <router-view />
    <BottomNavbar v-if="!$route.path === '/register'" />
  </div>
</template>
<script>
import BottomNavbar from "@/components/BottomNavbar.vue";
export default {
  components: {
    BottomNavbar,
  },
};
</script>
<style>
#app {
  font-family: Roboto, Prompt, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.cps-logo {
  width: 20vw;
}
#b-nav {
  border-top: 1px solid #c7c7c7;
}
#b-nav :active {
  stroke: #000;
}
#b-nav :active {
  stroke: #000;
}
</style>
