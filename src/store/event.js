import userStore from "../store/user";
import axios from "axios";
// initial state
const state = () => ({
  eventSelected: {
    id: "4",
    name: "Kick-off Startup by SU Entrepreneur Club",
    img: "imgsrc",
    description:
      "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้องแชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้องแชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง",
    tags: ["Hackathon", "Workshop"],
    location: "สถานที่อบรมคือ Zoom",
    status: "OPEN",
    point: 300,
    registerEnd: "12/12/21",
    eventStart: "06/03/22",
    eventEnd: "07/03/22",
  },
  eventList: [],
});

// getters
const getters = {
  isRegister(state) {
    let status = false;
    userStore.state.user.activeEvent.forEach((element) => {
      if (state.eventSelected.id === element) {
        status = true;
      }
    });
    userStore.state.user.historyEvent.forEach((element) => {
      if (state.eventSelected.id === element) {
        status = true;
      }
    });
    return status;
  },
};

// actions action with data such as call api
const actions = {
  async getAllEvent({ commit }) {
    const eventList = await axios.get(`${process.env.VUE_APP_API_URL}/event`);
    console.log("eventList:", eventList.data);

    commit("setEventList", eventList.data);
  },
};

// mutations
const mutations = {
  setEventList(state, eventList) {
    state.eventList = eventList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
