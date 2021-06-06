import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../page/SearchPlace.vue'),
    children: [{
        path: '/test',
        name: 'conttestent',
        component: () =>
        import('../page/ShowPlaceDetail.vue')
    }]

}, {
    path: '/SearchPlace',
    name: 'SearchPlace',
    component: () =>
        import('../page/SearchPlace.vue')
}, {
    path: '/test',
    name: 'test',
    component: () =>
        import('../page/ShowPlaceDetail.vue')
}, ]

const router = new VueRouter({
    routes
})

export default router