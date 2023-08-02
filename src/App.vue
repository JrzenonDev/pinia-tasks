<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo" />
      <h1>Pinia Tasks {{ taskStore.name }}</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTasksStore } from "./store/TasksStore";
import TaskDetails from "./components/TaskDetails.vue";
import { ref } from "vue";

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTasksStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
};
</script>
