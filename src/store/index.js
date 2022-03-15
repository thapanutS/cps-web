import { createStore } from "vuex";
import user from "../store/user";
import event from "../store/event";
import item from "../store/item";

export default createStore({
  modules: { user, event, item },
});
