import axios from "axios";
// initial state
const state = () => ({
  eventDetail: {},
  eventList: [],
  myEventList: [],
  registerStatus: null,
});

// getters
const getters = {
  getEventDetail(state) {
    return state.eventDetail;
  },
};

// actions action with data such as call api
const actions = {
  async getAllEvent({ commit }) {
    const eventList = await axios.get(`${process.env.VUE_APP_API_URL}/event`);
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
    commit("setEventDetail", event.data);
  },
  async register({ commit }, payload) {
    const registerStatus = await axios.post(
      `${process.env.VUE_APP_API_URL}/event/register`,
      payload
    );
    commit("setRegisterStatus", registerStatus);
    return registerStatus;
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
  setRegisterStatus(state, registerStatus) {
    state.registerStatus = registerStatus;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
