<template>
    <h1>Aprendiendo slots</h1>
    <button @click="openModal">Abrir modal</button>

    <modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
        <!-- <h2>Título del modal</h2>
        <p>Lorem do Lorem irure id et elit duis nulla in. Ullamco proident sunt nulla amet nisi aute aute sint minim excepteur Lorem.</p>
        <button>Salir</button> -->
        <template v-slot:header>
            <h2>Título del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem do Lorem irure id et elit duis nulla in. Ullamco proident sunt nulla amet nisi aute aute sint minim excepteur Lorem.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>
    </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal'
export default {
    components: { Modal },
    setup() {
        const isOpen = ref(false)
        return {
            isOpen,

            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>