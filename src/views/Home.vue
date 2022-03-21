<template>
  <div class="home">
    <div class="sticky top-0 z-1 bg-white pt-2">
      <!-- SEARCH SECTION -->
      <section>
        <div class="flex-1">
          <SearchBar
            :searchValue="searchValue"
            :searchFunction="searchFunction"
            @update:searchValue="(newValue) => (searchValue = newValue)"
          />
        </div>

        <div class="my-2 py-2 filter-list flex flex-row">
          <div v-for="filter in filterList" :key="filter.id">
            <FilterChip
              class="ml-2"
              :text="filter.name"
              :isSelected="filter.isSelected"
              @click="filter.isSelected = !filter.isSelected"
            />
          </div>
        </div>
      </section>
      <!-- MENU SELECT EVENT LIST -->
      <section class="menu my-2">
        <button
          :class="[
            menuType === `ALL_EVENT` ? `menu-btn selected` : `menu-btn`,
            `mx-4`,
          ]"
          @click="menuType = `ALL_EVENT`"
        >
          กิจกรรมที่เปิดรับสมัคร
        </button>
        <button
          :class="[
            menuType === `MY_EVENT` ? `menu-btn selected` : `menu-btn`,
            `mx-4`,
          ]"
          @click="menuType = `MY_EVENT`"
        >
          กิจกรรมที่เข้าร่วม
        </button>
      </section>
    </div>

    <!-- DISPLAY EVENT LIST -->
    <section class="event-list px-4">
      <div v-if="menuType === `ALL_EVENT`">
        <div v-for="event in eventList" :key="event.id">
          <EventCard
            :img="event.img"
            :name="event.name"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :tags="event.tags"
            class="mt-3"
            @click="$router.push(`/event/${event._id}`)"
          />
        </div>
      </div>
      <div v-else>
        <div v-for="event in myEventList" :key="event.id">
          <EventCard
            :img="event.img"
            :name="event.name"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :tags="event.tags"
            class="mt-3"
            @click="$router.push(`/event/${event._id}`)"
          />
        </div>
      </div>
    </section>

    <!-- DISPLAY FILTER -->
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import EventCard from "@/components/EventCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterChip from "@/components/FilterChip.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import lineUtils from "@/utils/line.js";
export default {
  name: "Home",
  components: {
    EventCard,
    SearchBar,
    FilterChip,
  },
  async setup() {
    const store = useStore();
    await lineUtils.init();
    await lineUtils.login();

    // const lineProfile = await store.state.user.lineProfile;
    // const registerStatus = await store.dispatch(
    //   "user/getEventListByUid",
    //   lineProfile.sub
    // );

    // if (registerStatus === false) {
    //   this.$router.push("/register");
    // }

    const searchValue = ref("");
    const filterList = ref([
      { id: 0, type: "SKILL", name: "พัฒนาทักษะ", isSelected: false },
      { id: 1, type: "CONTEST", name: "ประกวดแข่งขัน", isSelected: false },
      { id: 2, type: "GUIDE", name: "แนะแนว", isSelected: false },
      { id: 3, type: "CRAM", name: "ติวสอบ", isSelected: false },
      { id: 4, type: "LANGUAGE", name: "พัฒนาภาษา", isSelected: false },
      { id: 5, type: "OTHER", name: "กิจกรรมอื่นๆ", isSelected: false },
    ]);
    let menuType = ref("ALL_EVENT");
    const searchFunction = async () => {};
    const fetchData = async () => {
      // await store.dispatch("event/getAllEvent");
      // await store.dispatch(
      //   "event/getMyEventList",
      //   "Ua28a9b8f51a7009c0361e8b9c3df674a" // mock user id
      // );
    };

    const eventList = computed(() =>
      store.state.event.eventList.filter((event) => {
        // EVENTLIST WITH TAG FILTER
        if (
          filterList.value[0].isSelected ||
          filterList.value[1].isSelected ||
          filterList.value[2].isSelected ||
          filterList.value[3].isSelected ||
          filterList.value[4].isSelected ||
          filterList.value[5].isSelected
        ) {
          const displayEvent = ref(false);
          event.tags.forEach((tag) => {
            for (let index = 0; index < filterList.value.length; index++) {
              if (
                filterList.value[index].isSelected &&
                filterList.value[index].type === tag
              ) {
                displayEvent.value = true;
              }
            }
          });
          if (displayEvent.value) {
            return event.name
              .toLowerCase()
              .includes(searchValue.value.toLowerCase());
          }
        } else {
          //EVENTLIST WITHOUT FILTER
          return event.name
            .toLowerCase()
            .includes(searchValue.value.toLowerCase());
        }
      })
    );

    const myEventList = computed(() =>
      store.state.event.myEventList.filter((event) => {
        return event.name
          .toLowerCase()
          .includes(searchValue.value.toLowerCase());
      })
    );

    fetchData();

    return {
      searchValue,
      menuType,
      myEventList,
      filterList,
      eventList,
      searchFunction,
      fetchData,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  min-height: 90vh;
}
.menu {
  height: 30px;
  .menu-btn {
    font-size: 12px;
    font-weight: 600;
    &.selected {
      border-bottom: 2px solid #15c5b5;
    }
  }
}
.filter-list {
  overflow: scroll;
  //hide scollbar but keep function runing
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  max-width: 100vw;
  background: white;
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
}
.filter-list::-webkit-scrollbar {
  display: none;
}
</style>
