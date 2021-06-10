import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../page/IdentitySelection.vue')

    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../page/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('../page/Register.vue')
    },
    {
        path: "/StudentFrame",
        component: () =>
            import ('../page/StudentFrame.vue'),
        children: [{
            path: "Main",
            name: "StudentFrameMain",
            component: () =>
                import ('../page/StudentMain.vue')
        }, {
            path: "Favorite",
            name: "StudentFrameFavorite",
            component: () =>
                import ('../page/StudentFavorite.vue')
        }, {
            path: "ShowMap",
            name: "ShowMap",
            component: () =>
                import ('../page/ShowMap.vue')
        }, {
            path: "ShowPlaceDetail",
            name: "ShowPlaceDetail",
            component: () =>
                import ('../page/ShowPlaceDetail.vue')
        }, {
            path: "ShowSchedule",
            name: "ShowSchedule",
            component: () =>
                import ('../page/ShowSchedule.vue')
        }]
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router