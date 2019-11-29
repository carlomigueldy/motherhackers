import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import login from '../views/auth/login'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
    ],
})