import { defineStore } from "pinia";

export const useTasksStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: true },
      { id: 2, title: "play game", isFav: false },
    ],
    name: "Yoshi",
  }),
});
