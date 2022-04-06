<template>
  <div class="card-container">
    <div id="poster">
      <img :src="img" alt="" />
    </div>
    <div class="flex justify-between text-left px-3 mt-2">
      <div>
        <div id="topic">{{ nameEvent }}</div>
        <div id="description">
          {{ description }}
        </div>
        <div class="flex my-2">
          <div id="register-end">
            เหลือเวลารับสมัครอีก {{ registerEnd }} วัน
          </div>
          <div
            v-for="item in tagsList"
            :key="item.id"
            :class="[`mx-1 px-2 event`, item.tag.toLowerCase()]"
          >
            <!-- {{ item.tagName }} -->
          </div>
        </div>
      </div>
      <div id="point">{{ point }} pt</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkshopCard",
  props: ["nameEvent", "img", "description", "registerEnd",  "point"],
  mounted() {
    this.customTagList();
  },
  data() {
    return {
      tagsList: [],
    };
  },
  methods: {
    customTagList() {
      console.log("Props : ", this.nameEvent);
      console.log("Props : ", this.img);
      let tagsList = [];
    this.tags.forEach((tag, index) => {
      let tagName = ""
      if (tag === `SKILL`) {
        tagName = "พัฒนาทักษะ"
      } else if (tag === "CONTEST") {
        tagName = "ประกวดแข่งขัน"
      } else if (tag === "GUIDE") {
        tagName = "แนะแนว"
      } else if (tag === "CRAM") {
        tagName = "ติวสอบ"
      } else if (tag === "LANGUAGE") {
        tagName = "พัฒนาภาษา"
      } else {
        tagName = "กิจกรรมอื่นๆ"
      }
      tagsList.push({
        id: index,
        tag: tag,
        tagName: tagName,
      });
    });
    },
  },
  // props: ["nameEvent", "img", "description", "registerEnd", "point", "tags"],
  // setup(props) {
  //   let tagsList = [];
  //   props.tags.forEach((tag, index) => {
  //     let tagName = "",
  //     if (tag === `SKILL`) {
  //       tagName = "พัฒนาทักษะ"
  //     } else if (tag === "CONTEST") {
  //       tagName = "ประกวดแข่งขัน"
  //     } else if (tag === "GUIDE") {
  //       tagName = "แนะแนว"
  //     } else if (tag === "CRAM") {
  //       tagName = "ติวสอบ"
  //     } else if (tag === "LANGUAGE") {
  //       tagName = "พัฒนาภาษา"
  //     } else if (tag === "OTHER") {
  //       tagName = "กิจกรรมอื่นๆ"
  //     }
  //     tagsList.push({
  //       id: index,
  //       tag: tag,
  //       tagName: tagName,
  //     });
  //   });
  //   return { tagsList };
  // },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.card-container {
  background: white;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 1px 2px #e6e6e6;
  font-size: 12px;
  padding: 0 5px;
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
  font-size: 14px;
}
#register-end {
  font-size: 10px;
}
#point {
  position: absolute;
  right: 8%;
  color: #3ebe4b;
  font-size: 10 px;
  font-weight: 600;
}
#description {
  display: -webkit-box;
  max-width: max-content;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.event {
  border-radius: 18px 18px 18px 18px;
  font-size: 10px;
  text-transform: capitalize;
  &.skill {
    background-color: #e1f8b0;
  }
  &.contest {
    background-color: orange;
  }
  &.guide {
    background-color: #957dad;
  }
  &.cram {
    background-color: #add3fa;
  }
  &.language {
    background-color: #e0787c;
  }
  &.other {
    background-color: #9acfc4;
  }
}
</style>
