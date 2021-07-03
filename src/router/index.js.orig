import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../page/Shared/IdentitySelection.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../page/Shared/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import ('../page/Shared/Register.vue')
    },
    //学生页面
    {
        path: '/ForgetPassword',
        name: 'ForgetPassword',
        component: () =>
            import ('../page/Shared/ForgetPassword.vue')
    },
    {
        path: "/StudentFrame",
        component: () =>
            import ('../page/Student/StudentFrame.vue'),
        children: [{
            path: "Main",
            name: "StudentFrameMain",
            component: () =>
                import ('../page/Student/StudentMain.vue')
        }, {
            path: "Favorite",
            name: "StudentFrameFavorite",
            component: () =>
                import ('../page/Student/StudentFavorite.vue')
        }, {
            path: "ShowMap",
            name: "ShowMap",
            component: () =>
                import ('../page/Shared/ShowMap.vue')
        }, {
            path: "ShowPlaceDetail",
            name: "ShowPlaceDetail",
            component: () =>
                import ('../page/Shared/ShowPlaceDetail.vue')
        }, {
            path: "ShowSchedule",
            name: "ShowSchedule",
            component: () =>
                import ('../page/Shared/ShowSchedule.vue')
        }]
    },
    //系统管理员
    {
        path: "/SystemAdminHomePage",
        name: "SystemAdminHomePage",
        component: () =>
            import ('../page/SystemAdmin/SystemAdminHomePage.vue'),
    },
    {
        path: "/SystemAdminFrame",
        name: "SystemAdminFrame",
        component: () =>
            import ('../page/SystemAdmin/SystemAdminFrame.vue'),
        children: [{
                path: "SystemAdminGroupVerifyList",
                name: "SystemAdminGroupVerifyList",
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminGroupVerifyList.vue')
            },
            {
                path: "SystemAdminMaintainUserInfo",
                name: "SystemAdminMaintainUserInfo",
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminMaintainUserInfo.vue')
            },
            {
                path: "SystemAdminAccountModify",
                name: "SystemAdminAccountModify",
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminAccountModify.vue')
            },
            {
                path: "SystemAdminGroupVerify",
                name: "SystemAdminGroupVerify",
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminGroupVerify.vue')
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
            import ('../page/Organization/OrganizationFrame.vue'),
        children: [{
            path: '/CheckSite',
            name: 'CreditSiteWindow',
            component: () =>
                import ('../page/Shared/check_site.vue')
        }, {
            path: '/CheckActivity',
            name: 'CreditActivityWindow',
            component: () =>
                import ('../page/Shared/check_activity.vue')
        }, {
            path: '/CheckOrgan',
            name: 'CreditOrganWindow',
            component: () =>
                import ('../page/Shared/check_organ.vue')
        }, {
            path: '/CreditScore',
            name: 'CreditScoreWindow',
            component: () =>
                import ('../page/Organization/ViewCreditScore.vue')
        }, {
            path: '/Appointment',
            name: 'AppointmentWindow',
            component: () =>
                import ('../page/Organization/ViewAppointment.vue')
        }, {
            path: '/RecordDetails',
            name: 'RecordWindow',
            component: () =>
                import ('../page/Organization/RecordDetails.vue')
        }, {
            path: '/FeedBack',
            name: 'FeedBackWindow',
            component: () =>
                import ('../page/Organization/SiteFeedback.vue')
        }, {
            path: '/ApplySite',
            name: 'ApplySiteWindow',
            component: () =>
                import ('../page/Organization/ApplyForSite.vue')
        }, {
            path: '/ShowMap',
            name: 'ShowMap',
            component: () =>
                import ('../page/Shared/ShowMap.vue')
        }, {
            path: '/ShowPlaceDetail',
            name: 'conttestent',
            component: () =>
                import ('../page/Shared/ShowPlaceDetail.vue')
        }, {
            path: '/ShowMap',
            name: 'ShowMap',
            component: () =>
                import ('../page/Shared/ShowMap.vue')
        }, {
            path: '/ShowSchedule',
            name: 'ShowSchedule',
            component: () =>
                import ('../page/Shared/ShowSchedule.vue')
        }]
    }, {
        path: '/wywt',
        name: 'wywtWindow',
        component: () =>
            import ('../page/Shared/SearchPlace.vue')
    }
]


const router = new VueRouter({
    mode: "history",
    routes
})

export default router