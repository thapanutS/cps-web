import axios from "axios";

// initial state
const state = () => ({
  userProfile: {},
  eventList: {},
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
  async getEventListByUid({ commit }, uid) {
    const eventList = await axios.get(
      `${process.env.VUE_APP_API_URL}/event/list/${uid}`
    );
    commit("setEventList", eventList.data);
  },
  async checkRegister(uid) {
    try {
      await axios.get(`${process.env.VUE_APP_API_URL}/user/${uid}`);
      return true;
    } catch (error) {
      return false;
    }
  },

  setVertifyInfo(state, vertifyInfo) {
    console.log("setVertifyInfo : ", vertifyInfo);
    state.lineVertifyInfo = vertifyInfo; /// for data from vertify ID token (Line)
    console.log("State Line Vertify Info : ", state.lineVertifyInfo);
  },
};

// mutations
const mutations = {
  setUserProfile(state, userProfile) {
    state.userProfile = userProfile; // for data from register
  },
  setLineProfile(state, lineProfile) {
    console.log('setLineProfile in Mutations : ',lineProfile);
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
