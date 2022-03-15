import userStore from "../store/user";
import axios from "axios";
// initial state
const state = () => ({
  eventDetail: {},
  eventList: [],
  myEventList: [],
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
  getEventDetail(state) {
    return state.eventDetail;
  },
};

// actions action with data such as call api
const actions = {
  async getAllEvent({ commit }) {
    const eventList = await axios.get(`${process.env.VUE_APP_API_URL}/event`);
    console.log("eventList:", eventList.data);
    commit("setEventList", eventList.data);
  },
  async getMyEventList({ commit }, uid) {
    const myEventList = await axios.get(
      `${process.env.VUE_APP_API_URL}/event/list/${uid}`
    );
    commit("setMyEventList", myEventList.data);
  },
  async fetchEventDetail({ commit }, _id) {
    const event = await axios.get(
      `${process.env.VUE_APP_API_URL}/event/${_id}`
    );
    console.log("event:", event.data);
    commit("setEventDetail", event.data);
  },
};

// mutations
const mutations = {
  setEventList(state, eventList) {
    state.eventList = eventList;
  },
  setMyEventList(state, myEventList) {
    state.myEventList = myEventList;
  },
  setEventDetail(state, event) {
    state.eventDetail = event;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
