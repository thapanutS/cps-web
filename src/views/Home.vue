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
              :text="filter.type"
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
          <WorkshopCard
            :img="event.img"
            :name="event.name"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :tags="event.tags"
            class="mt-3"
          />
        </div>
      </div>
      <div v-else>
        <div v-for="event in myEventList" :key="event.id">
          <WorkshopCard
            :img="event.img"
            :name="event.name"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :tags="event.tags"
            class="mt-3"
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
import WorkshopCard from "@/components/WorkshopCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import FilterChip from "@/components/FilterChip.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home",
  components: {
    WorkshopCard,
    SearchBar,
    FilterChip,
  },
  setup() {
    const searchValue = ref("");
    const filterList = ref([
      { id: 1, type: "Workshop", isSelected: false },
      { id: 2, type: "Hackathon", isSelected: false },
      { id: 2, type: "Guide", isSelected: false },
      // { id: 3, type: "Workshop", isSelected: false },
      // { id: 4, type: "Workshop", isSelected: false },
      // { id: 5, type: "Workshop", isSelected: false },
    ]);
    let menuType = ref("ALL_EVENT");
    const store = useStore();
    const searchFunction = async () => {};
    const fetchData = async () => {
      await store.dispatch("event/getAllEvent");
      await store.dispatch(
        "event/getMyEventList",
        "Uidasefmavkmaovdioxcvsaxcvrgqvascdasdc" // mock user id
      );
    };

    const eventList = computed(() =>
      store.state.event.eventList.filter((event) => {
        // set isSelected filter
        // event.tags.forEach((tag) => {
        //   filterList.value.forEach((filter) => {
        //     if (
        //       tag.toLowerCase() === filter.type.toLowerCase() &&
        //       filter.isSelected
        //     ) {
        //       console.log("tag", tag);
        //     }
        //   });
        // });

        return event.name
          .toLowerCase()
          .includes(searchValue.value.toLowerCase());
      })
    );
    const myEventList = computed(() => store.state.event.myEventList);
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
