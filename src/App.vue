<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo" />
      <h1>Pinia Tasks {{ taskStore.name }}</h1>
    </header>

    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTasksStore } from "./store/TasksStore";
import TaskDetails from "./components/TaskDetails.vue";

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTasksStore();
    return { taskStore };
  },
};
</script>
