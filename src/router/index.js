import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
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
    },
    //系统管理员
    {
        path: "/SystemAdminHomePage",
        name: "SystemAdminHomePage",
        component: () =>
            import ('../page/SystemAdminHomePage.vue'),
    },
    {
        path: "/SystemAdminFrame",
        name: "SystemAdminFrame",
        component: () =>
            import ('../page/SystemAdminFrame.vue'),
        children: [{
                path: "SystemAdminGroupVerifyList",
                name: "SystemAdminGroupVerifyList",
                component: () =>
                    import ('../page/SystemAdminGroupVerifyList.vue')
            },
            {
                path: "SystemAdminMaintainUserInfo",
                name: "SystemAdminMaintainUserInfo",
                component: () =>
                    import ('../page/SystemAdminMaintainUserInfo.vue')
            },
            {
                path: "SystemAdminAccountModify",
                name: "SystemAdminAccountModify",
                component: () =>
                    import ('../page/SystemAdminAccountModify.vue')
            },
            {
                path: "SystemAdminGroupVerify",
                name: "SystemAdminGroupVerify",
                component: () =>
                    import ('../page/SystemAdminGroupVerify.vue')
            }
        ]
    },
    {
        path: '/Organization',
        name: 'Main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../page/OrganizationFrame.vue'),
        children: [{
            path: '/CheckSite',
            name: 'CreditSiteWindow',
            component: () =>
                import ('../page/check_site.vue')
        }, {
            path: '/CheckActivity',
            name: 'CreditActivityWindow',
            component: () =>
                import ('../page/check_activity.vue')
        }, {
            path: '/CheckOrgan',
            name: 'CreditOrganWindow',
            component: () =>
                import ('../page/check_organ.vue')
        }, {
            path: '/CreditScore',
            name: 'CreditScoreWindow',
            component: () =>
                import ('../page/ViewCreditScore.vue')
        }, {
            path: '/Appointment',
            name: 'AppointmentWindow',
            component: () =>
                import ('../page/ViewAppointment.vue')
        }, {
            path: '/RecordDetails',
            name: 'RecordWindow',
            component: () =>
                import ('../page/RecordDetails.vue')
        }, {
            path: '/FeedBack',
            name: 'FeedBackWindow',
            component: () =>
                import ('../page/SiteFeedback.vue')
        }, {
            path: '/ApplySite',
            name: 'ApplySiteWindow',
            component: () =>
                import ('../page/ApplyForSite.vue')
        }, {
            path: '/ShowMap',
            name: 'ShowMap',
            component: () =>
                import ('../page/ShowMap.vue')
        }, {
            path: '/ShowPlaceDetail',
            name: 'conttestent',
            component: () =>
                import ('../page/ShowPlaceDetail.vue')
        }, {
            path: '/ShowMap',
            name: 'ShowMap',
            component: () =>
                import ('../page/ShowMap.vue')
        }, {
            path: '/ShowSchedule',
            name: 'ShowSchedule',
            component: () =>
                import ('../page/ShowSchedule.vue')
        }]
    }, {
        path: '/wywt',
        name: 'wywtWindow',
        component: () =>
            import ('../page/SearchPlace.vue')
    }
]


const router = new VueRouter({
    mode: "history",
    routes
})

export default router