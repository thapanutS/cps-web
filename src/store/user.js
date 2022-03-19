import axios from "axios";

// initial state
const state = () => ({
  userProfile: {},
  eventList: {},
  // lineProfile: {}, // get data from line
});

// getters
const getters = {
  getUserProfile() {
    return state.userProfile;
  },
  getEventList() {
    return state.eventList;
  },
  // getLineProfile(state) {
  //   return state.lineProfile;
  // },
};

// actions
const actions = {
  async getUserProfile({ commit }, uid) {
    const user = await axios.get(`${process.env.VUE_APP_API_URL}/user/${uid}`);
    commit("setUserProfile", user.data);
  },
  async createUser({ commit }, infomation) {
    const user = await axios.post(
      `${process.env.VUE_APP_API_URL}/user/create`,
      infomation
    );
    commit("setUserProfile", user.data);
  },
  async setLineProfile({ commit }, lineProfile) {
    console.log("setLineProfile in Store");
    commit("setLineProfile", lineProfile);
  },
  async getEventListByUid({ commit }, uid) {
    const eventList = await axios.get(
      `${process.env.VUE_APP_API_URL}/event/list/${uid}`
    );
    commit("setEventList", eventList.data);
  },
  // async setLineProfile({ commit }, lineProfile) {
  //   console.log("setLineProfile in Store");
  //   commit("setLineProfile", lineProfile);
  // },
};

// mutations
const mutations = {
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile; // for data from register
  },
  setLineProfile(state, lineProfile) {
    state.userProfile = lineProfile; /// for data from line
  },
  setEventList(state, eventList) {
    state.eventList = eventList;

  },
  // setLineProfile(state, lineProfile) {
  //   state.lineProfile = lineProfile;
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
