import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Pokedex from '../components/Pokedex.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pokedex',
        name: 'deck',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Pokedex
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
