import { createStore } from "vuex";
import user from "../store/user";
import event from "../store/event";
export default createStore({
  modules: { user, event },
});
