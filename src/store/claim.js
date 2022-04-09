import axios from "axios";
import config from "../../config"

const state = () => ({
  claimList: null,
  claimCreated: null,
});

const getters = {
  getClaimList(state) {
    return state.claimList;
  },
  getClaimCreated(state) {
    return state.claimCreated;
  },
};

const actions = {
  async fetchClaimListByUid({ commit }, uid) {
    const claimList = await axios.get(
      `${config.api.baseUrl}/claim/${uid}`
    );
    commit("setClaimList", claimList.data);
    return claimList;
  },
  async createClaimRequest({ commit }, payload) {
    const claimCreated = await axios.post(
      `${config.api.baseUrl}/claim/create`,
      {
        uid: payload.uid,
        itemId: payload.itemId,
        status: "WAITING",
        claimDate: "22",
      }
    );
    commit("setClaimCreated", claimCreated.data);
    console.log("createClaimRequest res:", claimCreated.data);
    return claimCreated.data;
  },
};

const mutations = {
  setClaimList(state, claimList) {
    state.claimList = claimList;
  },
  setClaimCreated(state, claimCreated) {
    state.claimCreated = claimCreated;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
