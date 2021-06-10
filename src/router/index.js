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
    },{
        path: '/ShowMap',
        name: 'ShowMap',
        component: () =>
        import('../page/ShowMap.vue')
    }, {
        path: '/ShowSchedule',
        name: 'ShowSchedule',
        component: () =>
            import('../page/ShowSchedule.vue')
    },
]

}, {
    path: '/SearchPlace',
    name: 'SearchPlace',
    component: () =>
        import('../page/SearchPlace.vue')
}, ]

const router = new VueRouter({
    routes
})

export default router