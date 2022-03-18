import axios from "axios";

// initial state
const state = () => ({
  userProfile: {},
  lineProfile: {},
});

// getters
const getters = {
  getUserProfile() {
    return state.userProfile;
  },
  getLineProfile(state) {
    return state.lineProfile;
  },
};

// actions
const actions = {
  async getUserProfile({ commit }, uid) {
    const user = await axios.get(`${process.env.VUE_APP_API_URL}/user/${uid}`);
    console.log("getUserProfile : ", user.data);
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
};

// mutations
const mutations = {
  setUserProfile(state, userProfile) {
    console.log("setUserProfile : ", userProfile);
    state.userProfile = userProfile;
    console.log("state.userProfile : ", state.userProfile);
  },
  setLineProfile(state, lineProfile) {
    state.lineProfile = lineProfile;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
