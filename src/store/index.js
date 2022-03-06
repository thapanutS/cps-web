import { createStore } from "vuex";

export default createStore({
  state: {
    eventSelected: {
      id: "4",
      name: "Kick-off Startup by SU Entrepreneur Club",
      img: "imgsrc",
      description:
        "แชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้องแชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้องแชร์ประสบการณ์จากรุ่นพี่สู่รุ่นน้อง",
      tags: ["Hackathon", "Workshop"],
      location: "สถานที่อบรมคือ Zoom",
      status: "OPEN",
      point: 300,
      registerEnd: "12/12/21",
      eventStart: "06/03/22",
      eventEnd: "07/03/22",
    },
    user: {
      activeEvent: ["1", "2", "3"],
      historyEvent: ["1", "2", "3"],
    },
  },
  mutations: {},
  actions: {},
  getters: {
    isRegister(state) {
      let status = false;
      state.user.activeEvent.forEach((element) => {
        if (state.eventSelected.id === element) {
          status = true;
        }
      });
      state.user.historyEvent.forEach((element) => {
        if (state.eventSelected.id === element) {
          status = true;
        }
      });
      return status;
    },
  },
  modules: {},
});
