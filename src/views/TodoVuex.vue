<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>
    <hr>
    <button
      @click="currentTab = 'all'"
      :class="{ 'active' : currentTab === 'all' }">
      Todos</button>
    <button
      @click="currentTab = 'pending'"
      :class="{ 'active' : currentTab === 'pending' }">
      Pendientes</button>
    <button
      @click="currentTab = 'completed'"
      :class="{ 'active' : currentTab === 'completed' }">
      Completados</button>
    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id" :class="{ 'completed': todo.completed }" @dblclick="toggleTodo(todo.id)">
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal">Crear Todo</button>
    <modal v-if="isOpen" @on:close="closeModal">
        <template v-slot:header>
            <h1>Crear todo</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo">
                <input type="text" v-model="textTodo" placeholder="Nueva tarea">
                <br>
                <button type="submit">Crear</button>
            </form>
        </template>
    </modal>
</template>

<script>
import useTodo from '../composables/useTodo'
import Modal from '../components/Modal'

export default {
    components: { Modal },
    setup() {
        const { currentTab, isOpen, textTodo, toggleTodo, openModal, closeModal, pending, getTodosByTab, createTodo } = useTodo()

        return {
            currentTab,
            isOpen,
            textTodo,
            toggleTodo,
            createTodo,
            openModal,
            closeModal,
            pending,
            getTodosByTab
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 300px;
    text-align: left;
}

li {
    cursor: pointer;
}

.active {
    background-color: #3c3e50;
    color: white;
}

.completed {
    text-decoration: line-through;
}
</style>