import axios from "axios";

// initial state
const state = () => ({
  user: {
    personalInfo: {
      uid: "Ua28a9b8f51a7009c0361e8b9c3df674a",
    },
  },
});

// getters
const getters = {
  getPersonalInfo(state) {
    return state.personelInfo;
  },
};

// actions
const actions = {
  async getPersonalInfo({ commit }, uid) {
    const personalInfo = await axios.get(
      `${process.env.VUE_APP_API_URL}/user/${uid}`
    );
    commit("setPersonalInfo", personalInfo.data);
  },
  async createUser({ commit }, infomation) {
    const personalInfo = await axios.post(
      `${process.env.VUE_APP_API_URL}/user/create`,
      infomation
    );
    commit("setPersonalInfo", personalInfo.data);
  },
};

// mutations
const mutations = {
  setPersonalInfo(state, personalInfo) {
    state.personalInfo = personalInfo;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
