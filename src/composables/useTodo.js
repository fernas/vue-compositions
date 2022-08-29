import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')
    const isOpen = ref(false)
    const textTodo = ref('')

    const createTodo = () => {
        store.commit('createTodo', textTodo.value)
        isOpen.value = false
        textTodo.value = ''
    }

    return {
        currentTab,
        isOpen,
        textTodo,

        toggleTodo: (id) => store.commit('toggleTodo', id),
        createTodo,
        openModal: () => isOpen.value = true,
        closeModal: () => isOpen.value = false,

        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),

        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
    }
}

export default useTodos