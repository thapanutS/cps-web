import axios from "axios";
import config from "../../config";
// initial state
const state = () => ({
  userProfile: null,
  eventList: null,
});

// getters
const getters = {
  getUserProfile() {
    console.log('getUserProfile ->> : ',state.userProfile);
    return state.userProfile;
  },
  getEventList() {
    return state.eventList;
  },
};

// actions
const actions = {
  // async getUserProfile(uid) {
    async getUserProfile({ commit }, uid) {
      let response = null;
    try {
      response = await axios.get(`${config.api.baseUrl}/user/${uid}`);
      console.log("response : ", response.data);
      commit("setUserProfile", response.data);
    } catch (error) {
      console.log(error);
    }
    return response;
  },
  async setUserProfile({ commit }, profile) {
    commit("setUserProfile", profile);
  },
  // async createUser(infomation) {
  async createUser({ commit }, infomation) {
    console.log("infomation : ",infomation);
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
    console.log("state.userProfile [Updated] : ", state.userProfile);
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
