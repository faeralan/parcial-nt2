import { createWebHistory, createRouter } from 'vue-router';
import Inicio from '../components/Inicio.vue'
import Formulario from '../components/Formulario.vue'
import Gastos from '../components/Gastos.vue'
import Preguntas from '../components/Preguntas.vue'

const routes = [
    { path: '/', name: 'Inicio', component: Inicio },
    { path: '/formulario', name: 'Formulario', component: Formulario },
    { path: '/gastos', name: 'Gastos', component: Gastos },
    { path: '/preguntas', name: 'Preguntas', component: Preguntas }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router