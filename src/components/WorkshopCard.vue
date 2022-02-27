<template>
  <div>
    <img
      id="poster"
      src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0"
      alt=""
    />
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
  height: 100vh;
}
</style>
