import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import photogrammetry from '../views/photogrammetry'

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
            path: '/photogrammetry',
            name: 'photogrammetry',
            component: photogrammetry,
        }
    ],
})