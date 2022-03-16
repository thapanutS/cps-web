import { createStore } from "vuex";
import user from "../store/user";
import event from "../store/event";
import item from "../store/item";
import claim from "../store/claim";

export default createStore({
  modules: { user, event, item, claim },
});
