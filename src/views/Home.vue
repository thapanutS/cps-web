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
            :poster="event.img"
            :topic="event.name"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :type="event.tags"
            class="mt-3"
          />
        </div>
      </div>
      <div v-else>
        <div v-for="event in myEventList" :key="event.id">
          <WorkshopCard
            :poster="event.poster"
            :topic="event.topic"
            :description="event.description"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :type="event.eventType"
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
      { id: 1, type: "แนะแนว", isSelected: true },
      { id: 2, type: "Hackathon", isSelected: false },
      { id: 3, type: "Workshop", isSelected: false },
      { id: 4, type: "Workshop", isSelected: false },
      { id: 5, type: "Workshop", isSelected: false },
      { id: 6, type: "Workshop", isSelected: false },
      { id: 7, type: "Workshop", isSelected: false },
      { id: 8, type: "Workshop", isSelected: false },
      { id: 9, type: "Workshop", isSelected: false },
      { id: 10, type: "Workshop", isSelected: false },
      { id: 11, type: "Workshop", isSelected: false },
      { id: 12, type: "Workshop", isSelected: false },
      { id: 13, type: "Workshop", isSelected: false },
    ]);
    const allEventList = ref([
      {
        id: 1,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
      {
        id: 2,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
      {
        id: 3,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
      {
        id: 4,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
      {
        id: 5,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
    ]);
    const myEventList = ref([
      {
        id: 1,
        poster:
          "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/274674131_1121160405326217_4015574869830408627_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeErPUYiqm9lWirJCea4LEtjutwOGMOy8Ta63A4Yw7LxNoH7gbrHHjDvwTioCIpAyYGBFNkHLRB8pVFz4KCItqH1&_nc_ohc=rfk8GTPCibEAX-9CjAH&_nc_ht=scontent.fbkk22-2.fna&oh=00_AT9eD5LQG77I9i1GZrWkawz-4m0-FPz0zHT7XazyNmf2Ow&oe=62208DF0",
        topic: "Kick-off Startup by SU Entrepreneur Club",
        description:
          "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง โดยนักศึกษาผู้ประกอบการ",
        registerEnd: 3,
        point: 300,
        eventType: "แนะแนว",
      },
    ]);
    const menuType = ref("ALL_EVENT");
    const dialogm1 = ref("");
    const dialog = ref(false);
    const isFilter = ref(false);
    const store = useStore();
    const searchFunction = async () => {
      await store.dispatch("event/getAllEvent");
    };
    const fetchData = async () => {
      await store.dispatch("event/getAllEvent");
    };

    const eventList = computed(() => store.state.event.eventList);
    fetchData();
    console.log("eventList", eventList);
    return {
      searchValue,
      menuType,
      allEventList,
      myEventList,
      dialog,
      dialogm1,
      isFilter,
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
