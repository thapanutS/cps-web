<template>
  <div class="card-container">
    <div id="poster">
      <img
        src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0"
        alt=""
      />
    </div>
    <div class="flex justify-between text-left px-3 mt-2">
      <div>
        <div id="topic">{{ topic }}</div>
        <div id="description">
          {{ description }}
        </div>
        <div class="flex my-2">
          <div id="register-end">
            เหลือเวลารับสมัครอีก {{ registerEnd }} วัน
          </div>
          <div :class="`mx-2 px-2 event guild`">{{ type }}</div>
        </div>
      </div>
      <div id="point">{{ point }} pt</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkshopCard",
  props: ["topic", "description", "registerEnd", "point", "type"],
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.card-container {
  background: white;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 1px 2px #e6e6e6;
  font-size: 12px;
}
#poster {
  display: flex;
  justify-content: center;
}
#poster img {
  object-fit: cover;
  width: 100%;
  height: 150px;
  border-radius: 8px 8px 8px 8px;
}
#topic {
  font-weight: 500;
}
#register-end {
  font-size: 8px;
}
#point {
  color: #3ebe4b;
  font-size: 8px;
  font-weight: 600;
}
.event {
  border-radius: 18px 18px 18px 18px;
  font-size: 8px;
  &.guild {
    background-color: #e1f8b0;
  }
}
</style>
