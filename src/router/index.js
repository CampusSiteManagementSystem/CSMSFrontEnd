import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
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
            name: "ShowMapforStu",
            component: () =>
                import ('../page/Shared/ShowMap.vue')
        }, {
            path: "ShowPlaceDetail",
            name: "ShowPlaceDetail",
            component: () =>
                import ('../page/Shared/ShowPlaceDetail.vue')
        }, {
            path: "ShowSchedule",
            name: "ShowScheduleforStu",
            props: {
                membertype: true,
            },
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
    // 组织页面
    {
        path: '/OrganizationFrame',
        name: 'OrganizationFrame',
        component: () =>
            import ('../page/Organization/OrganizationFrame.vue'),
        children: [{
                path: '/CheckSite',
                name: 'CheckSite',
                props: {
                    membertype: false
                },
                component: () =>
                    import ('../page/Shared/ShowPlaceDetail.vue')
            }, { 
                path: "/OrganizationMain",
                name: "/OrganizationFrameMain",
                component: () =>
                    import ('../page/Organization/OrganizationMain.vue')
            }, {
                path: '/CheckActivity',
                name: 'CreditActivityWindow',
                component: () =>
                    import ('../page/Shared/check_activity.vue')
            }, {
                path: "/OrganizationAccountModify",
                name: "OrganizationAccountModify",
                component: () =>
                    import ('../page/Organization/OrganizationAccountModify.vue')
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
                path: "/OrganizationFavorite",
                name: "FavoriteWindow",
                component: () =>
                    import ('../page/Organization/OrganizationFavorite.vue')
            }, {
                path: "/Announcement",
                name: "AnnouncementforOrg",
                component: () =>
                    import ('../page/Shared/AnnouncementList.vue')
            }, {
                path: '/FinishActivity',
                name: 'FinishWindow',
                component: () =>
                    import ('../page/Organization/ViewFinishActivity.vue')
            }, {
                path: '/RecordDetails',
                name: 'RecordWindow',
                component: () =>
                    import ('../page/Organization/RecordDetails.vue')
            }, {
                path: '/Pending',
                name: 'PendingWindow',
                component: () =>
                    import ('../page/Organization/PendingReview.vue')
            }, {
                path: '/Rejected',
                name: 'RejectedWindow',
                component: () =>
                    import ('../page/Organization/AppointmentRejected.vue')
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
            },
            {
                path: '/ShowPlaceDetail',
                name: 'conttestent',
                component: () =>
                    import ('../page/Shared/ShowPlaceDetail.vue')
            }, {
                path: '/ShowMap',
                name: 'ShowMapforOrg',
                component: () =>
                    import ('../page/Shared/ShowMap.vue')
            }, {
                path: '/ShowSchedule',
                name: 'ShowScheduleforOrg',
                component: () =>
                    import ('../page/Shared/ShowSchedule.vue')
            }
        ]
    },
    {
        path: '/wywt',
        name: 'wywtWindow',
        component: () =>
            import ('../page/Shared/SearchPlace.vue')
    },

    //场地管理员
    {
        path: '/Groundsman',
        component: () =>
            // import ('../components/personinfocard')
            import ('../page/Grandsman/GroundsmanFrame'),
        children: [{
                path: "/Home",
                name: "Main",
                component: () =>
                    import ('../page/Grandsman/GroundsmanHome.vue')
            },
            {
                path: "/ScoringActivityList",
                name: "ScoringActivityList",
                component: () =>
                    import ('../page/Grandsman/ScoringActivityList.vue'),
            },
            {
                path: "/Groundsman/Announcement",
                name: "AnnouncementforGround",
                component: () =>
                    import ('../page/Shared/AnnouncementList.vue'),
            },
            {
                path: "/Announcement/:ID",
                name: "AnnouncementInfo",
                component: () =>
                    import ('../page/Shared/AnnouncementInfo.vue'),
            },
            {
                path: "/ScoringActivity/:ID",
                name: "ScoringActivity",
                component: () =>
                    import ('../page/Grandsman/ScoringActivity'),
            },
            {
                path: "/ReleaseGroundAnnouncement",
                name: "ReleaseGroundAnnouncement",
                component: () =>
                    import ('../page/Grandsman/ReleaseGroundAnnouncement'),
            },
            {
                path: "/ReviewActivityList",
                name: "ReviewActivityList",
                component: () =>
                    import ('../page/Grandsman/ReviewActivityList'),
            },
            {
                path: "/GroundList",
                name: "GroundList",
                component: () =>
                    import ('../page/Grandsman/GroundList'),
            },
            {
                path: "/ActivityInfo/:ID",
                name: "ActivityInfo",
                component: () =>
                    import ('../page/Grandsman/ActivityInfo'),
            },
            {
                path: "/FeedbackActivityList",
                name: "FeedbackActivityList",
                component: () =>
                    import ('../page/Grandsman/FeedbackActivityList'),
            },
            {
                path: "/FeedbackInfo/:ID",
                name: "FeedbackInfo",
                component: () =>
                    import ('../page/Grandsman/FeedbackInfo'),
            },
            //   {
            //     path: "/AddCourse/:ID",
            //     name: "AddCourse",
            //     component: () =>
            //       import('../page/Grandsman/AddCourse'),
            //   },
            {
                path: "/GroundInfo/:ID",
                name: "GroundInfo",
                component: () =>
                    import ('../page/Grandsman/GroundInfo'),
            },
            {
                path: "/AddCourseGroundList",
                name: "AddCourseGroundList",
                component: () =>
                    import ('../page/Grandsman/AddCourseGroundList'),
            },
        ]
    },


]


const router = new VueRouter({
    mode: "history",
    routes
})

export default router