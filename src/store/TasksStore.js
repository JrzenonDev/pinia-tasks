import { defineStore } from "pinia";

export const useTasksStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: true },
      { id: 2, title: "play game", isFav: false },
    ],
    name: "Yoshi",
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount() {
      return this.tasks.reduce((favTasksCount, currentTask) => {
        return currentTask.isFav ? favTasksCount + 1 : favTasksCount;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
