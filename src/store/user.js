import axios from "axios";
import config from "../../config"
// initial state
const state = () => ({
  userProfile: null,
  eventList: null,
});

// getters
const getters = {
  getUserProfile() {
    return state.userProfile;
  },
  getEventList() {
    return state.eventList;
  },
};

// actions
const actions = {
  async getUserProfile({ commit }, uid) {
    const user = await axios.get(`${config.api.baseUrl}/user/${uid}`);
    commit("setUserProfile", user.data);
  },
  async createUser({ commit }, infomation) {
    const user = await axios.post(
      `${config.api.baseUrl}/user/create`,
      infomation
    );
    commit("setUserProfile", user.data);
  },
  async getEventListByUid({ commit }, uid) {
    const eventList = await axios.get(
      `${config.api.baseUrl}/event/list/${uid}`
    );
    commit("setEventList", eventList.data);
  },
};

// mutations
const mutations = {
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile; // for data from register
  },
  setLineProfile(state, lineProfile) {
    state.lineProfile = lineProfile; /// for data from line
  },
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
