import axios from "axios";

const state = () => ({
  claimList: null,
});

const getters = {
  getClaimList(state) {
    return state.claimList;
  },
};

const actions = {
  async fetchClaimListByUid({ commit }, uid) {
    const claimList = await axios.get(
      `${process.env.VUE_APP_API_URL}/claim/${uid}`
    );
    console.log("claimList", claimList.data);
    commit("setClaimList", claimList.data);
    return claimList;
  },
};

const mutations = {
  setClaimList(state, claimList) {
    state.claimList = claimList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
