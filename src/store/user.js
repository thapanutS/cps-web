import axios from "axios";

// initial state
const state = () => ({
  user: {
    activeEvent: ["1", "2", "3"],
    historyEvent: ["1", "2", "3"],
    personalInfo: {},
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
    console.log("Information : ", infomation);
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
