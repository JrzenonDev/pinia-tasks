<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>
      <div v-for="task in favs">
        <TaskDetails :task="task" />
      </div>
    </div>

    <button @click="taskStore.$reset">reset</button>
  </main>
</template>

<script>
import { useTasksStore } from "./store/TasksStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTasksStore();

    const { tasks, loading, favs, totalCount, favCount } =
      storeToRefs(taskStore);

    // fetch tasks
    taskStore.getTasks();
    const filter = ref("all");
    return { taskStore, filter, tasks, loading, favs, totalCount, favCount };
  },
};
</script>
