<template>
  <div id="app">
    <h1>ToDo App</h1>
    <CreateToDo/>
    <div class="list">
      <ListToDo/>
      <ToDoCount/>
    </div>
  </div>
</template>

<script>

import ToDoCount from '@/components/ToDoCount.vue'
import CreateToDo from '@/components/CreateToDo.vue'
import ListToDo from '@/components/ListToDo.vue'

export default {
  name: 'App',
  components: {
    ToDoCount,
    CreateToDo,
    ListToDo
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .list {
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #000;
  }
</style>
