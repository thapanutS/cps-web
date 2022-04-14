<template>
  <div class="home">
    <Layout />
    <loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#15C5B5"
      loader="dots"
      :height="60"
      :width="70"
      :lock-scroll="true"
    ></loading>
    <div class="sticky top-0 z-1 bg-white">
      <section>
        <div class="flex-1 px-5">
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
    <section class="event-list">
      <div v-if="menuType === `ALL_EVENT` && eventList">
        <div v-for="event in eventList" :key="event.id">
          <EventCard
            :img="event.img"
            :name="event.name"
            :description="event.description"
            :registerStart="event.registerStart"
            :registerEnd="event.registerEnd"
            :point="event.point"
            :tags="event.tags"
            class="mt-3"
            @click="
              () => {
                this.$router.push(`/event/${event._id}`);
              }
            "
          />
        </div>
      </div>
      <div v-if="menuType === `MY_EVENT`">
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
    <!-- <BottomNavbar /> -->
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import SearchBar from "@/components/SearchBar.vue";
import FilterChip from "@/components/FilterChip.vue";
import EventCard from "@/components/EventCard.vue";
import { mapGetters } from "vuex";
import Layout from "@/components/Layout.vue";

export default {
  name: "Test",
  components: {
    EventCard,
    SearchBar,
    FilterChip,
    Loading,
    // BottomNavbar,
    Layout,
  },
  created() {
    this.initailData();
  },
  computed: {
    ...mapGetters({
      eventListData: "event/getEventList",
      myEventListData: "event/getMyEventList",
      userProfileData: "user/getUserProfile",
    }),
    eventList() {
      // return this.eventListData;
      return this.eventListData.filter((event) => {
        // EVENTLIST WITH TAG FILTER
        if (
          this.filterList[0].isSelected ||
          this.filterList[1].isSelected ||
          this.filterList[2].isSelected ||
          this.filterList[3].isSelected ||
          this.filterList[4].isSelected ||
          this.filterList[5].isSelected
        ) {
          let displayEvent = false;
          event.tags.forEach((tag) => {
            for (let index = 0; index < this.filterList.length; index++) {
              if (
                this.filterList[index].isSelected &&
                this.filterList[index].type === tag
              ) {
                displayEvent = true;
              }
            }
          });
          if (displayEvent) {
            return event.name
              .toLowerCase()
              .includes(this.searchValue.toLowerCase());
          }
        } else {
          return event.name
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        }
      });
    },
    myEventList() {
      return this.myEventListData. filter(
        (event) => {
        if (
          this.filterList[0].isSelected ||
          this.filterList[1].isSelected ||
          this.filterList[2].isSelected ||
          this.filterList[3].isSelected ||
          this.filterList[4].isSelected ||
          this.filterList[5].isSelected
        ) {
          let displayEvent = false;
          event.tags.forEach((tag) => {
            for (let index = 0; index < this.filterList.length; index++) {
              if (
                this.filterList[index].isSelected &&
                this.filterList[index].type === tag
              ) {
                displayEvent = true;
              }
            }
          });
          if (displayEvent) {
            return event.name
              .toLowerCase()
              .includes(this.searchValue.toLowerCase());
          }
        } else {
          return event.name
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        }
      });
    },
    userProfile() {
      return this.userProfile || JSON.parse(localStorage.getItem(`Profile`));
    },
  },
  data() {
    return {
      isLoading: false,
      searchValue: "",
      filterList: [
        { id: 0, type: "skill", name: "พัฒนาทักษะ", isSelected: false },
        { id: 1, type: "contest", name: "ประกวดแข่งขัน", isSelected: false },
        { id: 2, type: "guide", name: "แนะแนว", isSelected: false },
        { id: 3, type: "cram", name: "ติวสอบ", isSelected: false },
        { id: 4, type: "language", name: "พัฒนาภาษา", isSelected: false },
        { id: 5, type: "other", name: "กิจกรรมอื่นๆ", isSelected: false },
      ],
      menuType: "ALL_EVENT",
    };
  },
  methods: {
    async initailData() {
      this.isLoading = true;
      await this.$store.dispatch("event/getAllEvent");
      await this.$store.dispatch(`event/getMyEventList`, this.userProfile.uid);
      this.isLoading = false;
    },
    searchFunction() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  // height: 100%;
  min-height: 100vh;
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
