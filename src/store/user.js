import axios from "axios";
import config from "../../config";
// initial state
const state = () => ({
  userProfile: null,
  eventList: null,
  eventActiveList: null,
  eventHistoryList: null,
});

// getters
const getters = {
  getUserProfile() {
    return state.userProfile;
  },

  getEventList() {
    return state.eventList;
  },

  getEventActiveList() {
    return state.eventActiveList;
  },

  getEvenHistoryList() {
    return state.eventHistoryList;
  },
};

// actions
const actions = {
  async getUserProfile({ commit }, uid) {
    let response = null;
    try {
      response = await axios.get(`${config.api.baseUrl}/user/${uid}`);
      localStorage.setItem(`Profile`, JSON.stringify(response.data));
      commit("setUserProfile", response.data);
    } catch (error) {
      console.log(error);
    }
    return response;
  },

  async setUserProfile({ commit }, profile) {
    commit("setUserProfile", profile);
  },

  async createUser({ commit }, infomation) {
    const user = await axios.post(
      `${config.api.baseUrl}/user/create`,
      infomation
    );
    commit("setUserProfile", user.data);
  },

  async getEventByUid({ commit }, uid) {
    const response = await axios.get(
      `${config.api.baseUrl}/event/list/${uid}`
    );
    commit("setEventList", response.data);
  },

  async getEventActiveByUid({ commit }, uid) {
    const response = await axios.get(
      `${config.api.baseUrl}/event/list/active/${uid}`
    );
    console.log('Response EventActive : ',response.data);
    commit("setEventActiveList", response.data);
  },

  async getEventHistoryByUid({ commit }, uid) {
    const response = await axios.get(
      `${config.api.baseUrl}/event/list/history/${uid}`
    );
    console.log('Response EventHistory : ',response.data);

    commit("setEventHistoryList", response.data);
  },
};

// mutations
const mutations = {
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  },

  setEventList(state, eventList) {
    state.eventList = eventList;
  },

  setEventActiveList(state, eventActiveList) {
    state.eventActiveList = eventActiveList;
  },

  setEventHistoryList(state, eventHistoryList) {
    state.eventHistoryList = eventHistoryList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
