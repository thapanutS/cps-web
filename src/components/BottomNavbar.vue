<template>
  <div>
    <div
      id="b-nav"
      class="flex justify-between fixed bottom-0 w-full py-3 px-4 bg-white"
    >
      <div>
        <router-link to="/" @click="currentPage('HOME')">
          <HomeIcon
            :class="[`h-5 w-5`, isHome ? `text-primary` : `text-quaternary`]"
          />
        </router-link>
      </div>

      <router-link to="/reward" @click="currentPage('REWARD')">
        <GiftIcon
          :class="[`h-5 w-5`, isReward ? `text-primary` : `text-quaternary`]"
        />
      </router-link>

      <router-link to="/claim" @click="currentPage('CLAIM')">
        <ClipboardIcon
          :class="[`h-5 w-5`, isRank ? `text-primary` : `text-quaternary`]"
        />
      </router-link>

      <router-link to="/profile" @click="currentPage('PROFILE')">
        <UserCircleIcon
          :class="[`h-5 w-5`, isProfile ? `text-primary` : `text-quaternary`]"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  UserCircleIcon,
  GiftIcon,
  HomeIcon,
  ClipboardIcon,
} from "@heroicons/vue/outline";

export default {
  data() {
    return {
      isHome: false,
      isRank: false,
      isReward: false,
      isProfile: false,
    };
  },
  components: {
    UserCircleIcon,
    GiftIcon,
    HomeIcon,
    ClipboardIcon,
  },
  methods: {
    currentPage(page) {
      if (page === "HOME") {
        this.isHome = true;
        this.isRank = false;
        this.isReward = false;
        this.isProfile = false;
      } else if (page === "RANK") {
        this.isHome = false;
        this.isRank = true;
        this.isReward = false;
        this.isProfile = false;
      } else if (page === "REWARD") {
        this.isHome = false;
        this.isRank = false;
        this.isReward = true;
        this.isProfile = false;
      } else if (page === "PROFILE") {
        this.isHome = false;
        this.isRank = false;
        this.isReward = false;
        this.isProfile = true;
      }
    },
  },
};
</script>
