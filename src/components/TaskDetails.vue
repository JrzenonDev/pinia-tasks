<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
      >
        favorites
      </i>
    </div>
  </div>
</template>

<script>
import { useTasksStore } from "../store/TasksStore";
export default {
  props: ["task"],
  setup() {
    const taskStore = useTasksStore();
    return { taskStore };
  },
};
</script>
