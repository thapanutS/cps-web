import axios from "axios";
import config from "../../config"

// initial state
const state = () => ({
  itemList: [],
});

// getters
const getters = {
  getItemList(state) {
    return state.itemList;
  },
};

// actions action with data such as call api
const actions = {
  async fetchItemList({ commit }) {
    const itemList = await axios.get(`${config.api.baseUrl}/item`);
    console.log("itemList:", itemList.data);
    commit("setItemList", itemList.data);
  },
};

// mutations
const mutations = {
  setItemList(state, itemList) {
    state.itemList = itemList;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
