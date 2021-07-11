import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //注册、登录、忘记密码
    {
        path: '/',
        name: 'Login',
        component: () =>
            import('../page/Shared/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        component: () =>
            import('../page/Shared/Register.vue')
    },
    {
        path: '/ForgetPassword',
        name: 'ForgetPassword',
        component: () =>
            import('../page/Shared/ForgetPassword.vue')
    },
    //学生页面
    {
        path: "/StuFrame",
        component: () =>
            import('../page/Student/StudentFrame.vue'),
        children: [{
            path: "Main",
            name: "StudentFrameMain",
            component: () =>
                import('../page/Student/StudentMain.vue')
        },
        {
            path: "testMain",
            name: "testStudentFrameMain",
            component: () =>
                import('../page/Grandsman/GroundsmanHome.vue')
        }, {
            path: "Favorite",
            name: "StudentFrameFavorite",
            component: () =>
                import('../page/Student/StudentFavorite.vue')
        }, {
            path: "ViewOrgs",
            name: "ViewOrgs",
            component: () =>
                import('../page/Shared/check_organ.vue')
        }, {
            path: "ViewSites",
            name: "ViewSites",
            component: () =>
                import('../page/Shared/check_site.vue')
        }, {
            path: "ActivityInfo/:ID",
            name: "StuActivityInfo",
            component: () =>
                import('../page/Shared/ActivityInfo.vue')
        }, {
            path: "ViewActivities",
            name: "ViewActivities",
            component: () =>
                import('../page/Shared/check_activity.vue')
        }, {
            path: "Map",
            name: "StudentMap",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowMap.vue')
        },
        {
            path: "Announcement",
            name: "StuAnnouncement",
            component: () =>
                import('../page/Shared/AnnouncementList.vue')
        },
        {
            path: "Favorite",
            name: "StudentFrameFavorite",
            component: () =>
                import('../page/Student/StudentFavorite.vue')
        }, {
            path: "ShowPlaceDetail",
            name: "StuShowPlaceDetail",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowPlaceDetail.vue')
        }, {
            path: "ViewOrgs",
            name: "ViewOrgs",
            component: () =>
                import('../page/Shared/check_organ.vue')
        }, {
            path: "ViewSites",
            name: "ViewSites",
            component: () =>
                import('../page/Shared/check_site.vue')
        }, {
            path: "Map",
            name: "StudentMap",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowMap.vue')
        },
        {
            path: "ShowSchedule/:groundID",
            name: "ShowScheduleforStu",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowSchedule.vue')
        }
        ]
    },
    //系统管理员！！！！！！！！
    //这个界面估计要删了
    {
        path: "/SystemAdminHomePage",
        name: "SystemAdminHomePage",
        component: () =>
            import('../page/SystemAdmin/SystemAdminHomePage.vue')
    },
    //这两个中间要删了
    {
        path: "/SysAdminFrame",
        name: "SystemAdminFrame",
        meta: {
            title: "系统管理员",
        },
        component: () =>
            import('../page/SystemAdmin/SystemAdminFrame.vue'),
        children: [{
            path: "GroupVerifyList",
            name: "SystemAdminGroupVerifyList",
            meta: {
                title: "审核注册",
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminGroupVerifyList.vue')
        },
        {
            path: "MaintainUserInfo",
            name: "SystemAdminMaintainUserInfo",
            meta: {
                title: "维护信息",
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminMaintainUserInfo.vue')
        },
        {
            path: "AccountModify",
            name: "SystemAdminAccountModify",
            meta: {
                title: "查看信息",
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminAccountModify.vue')
        },
        {
            path: "GroupVerify",
            name: "SystemAdminGroupVerify",
            meta: {
                title: "审核组织",
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminGroupVerify.vue')
        },
        {
            path: "Announcement",
            name: "AnnouncementforSystem",
            meta: {
                title: "发布公告",
            },
            component: () =>
                import('../page/Shared/AnnouncementList.vue')
        }
        ]
    },
    // 组织页面
    {
        path: '/OrgFrame',
        name: 'OrgFrame',
        component: () =>
            import('../page/Organization/OrganizationFrame.vue'),
        children: [{
            path: 'CheckSite',
            name: 'OrgCheckSite',
            props: {
                membertype: false
            },
            component: () =>
                import('../page/Shared/ShowPlaceDetail.vue')
        }, {
            path: "Main",
            name: "OrganizationFrameMain",
            component: () =>
                import('../page/Organization/OrganizationMain.vue')
        }, {
            path: 'CheckActivity',
            name: 'CreditActivityWindow',
            component: () =>
                import('../page/Shared/check_activity.vue')
        }, {
            path: "OrgAccountModify",
            name: "OrganizationAccountModify",
            component: () =>
                import('../page/Organization/OrganizationAccountModify.vue')
        }, {
            path: 'CheckOrgan',
            name: 'CreditOrganWindow',
            component: () =>
                import('../page/Shared/check_organ.vue')
        }, {
            path: 'CreditScore',
            name: 'CreditScoreWindow',
            component: () =>
                import('../page/Organization/ViewCreditScore.vue')
        }, {
            path: 'Appointment',
            name: 'AppointmentWindow',
            component: () =>
                import('../page/Organization/ViewAppointment.vue')
        }, {
            path: "OrgFavorite",
            name: "FavoriteWindow",
            component: () =>
                import('../page/Organization/OrganizationFavorite.vue')
        },
        {
            path: "Announcement",
            name: "AnnouncementforOrg",
            component: () =>
                import('../page/Shared/AnnouncementList.vue')
        },
        {
            path: 'FinishActivity',
            name: 'FinishWindow',
            component: () =>
                import('../page/Organization/ViewFinishActivity.vue')
        }, {
            path: 'RecordDetails',
            name: 'RecordWindow',
            component: () =>
                import('../page/Organization/RecordDetails.vue')
        }, {
            path: 'Pending',
            name: 'PendingWindow',
            component: () =>
                import('../page/Organization/PendingReview.vue')
        }, {
            path: 'Rejected',
            name: 'RejectedWindow',
            component: () =>
                import('../page/Organization/AppointmentRejected.vue')
        }, {
            path: 'FeedBack',
            name: 'FeedBackWindow',
            component: () =>
                import('../page/Organization/SiteFeedback.vue')
        }, {
            path: 'ApplySite',
            name: 'ApplySiteWindow',
            component: () =>
                import('../page/Organization/ApplyForSite.vue')
        },

        {
            path: 'ShowMap',
            name: 'ShowMapforOrg',
            props: {
                membertype: false,
            },
            component: () =>
                import('../page/Shared/ShowMap.vue')
        }, {
            path: 'ShowSchedule/:groundID',
            name: 'ShowScheduleforOrg',
            props: {
                membertype: false,
            },
            component: () =>
                import('../page/Shared/ShowSchedule.vue')
        }
        ]
    },
    //场地管理员
    {
        path: '/GroundsAdmin',
        component: () =>
            import('../page/Grandsman/GroundsmanFrame'),
        children: [{
            path: "Main",
            name: "GroundAdminMain",
            meta: {
                title: "场地管理员",
            },
            component: () =>
                import('../page/Grandsman/GroundsmanHome.vue')
        },
        {
            path: "ScoringActivityList",
            name: "ScoringActivityList",
            meta: {
                title: "活动评价列表",
            },
            component: () =>
                import('../page/Grandsman/ScoringActivityList.vue'),
        },
        {
            path: "Announcement",
            name: "AnnouncementforGround",
            meta: {
                title: "公告",
            },
            component: () =>
                import('../page/Shared/AnnouncementList.vue'),
        },
        {
            path: "ScoringActivity/:ID",
            name: "ScoringActivity",
            meta: {
                title: "活动评价",
            },
            component: () =>
                import('../page/Grandsman/ScoringActivity'),
        },
        {
            path: "ReleaseGroundAnnouncement",
            name: "ReleaseGroundAnnouncement",
            meta: {
                title: "发布场地公告",
            },
            component: () =>
                import('../page/Grandsman/ReleaseGroundAnnouncement'),
        },
        {
            path: "ReviewActivityList",
            name: "ReviewActivityList",
            meta: {
                title: "活动审核列表",
            },
            component: () =>
                import('../page/Grandsman/ReviewActivityList'),
        },
        {
            path: "GroundList",
            name: "GroundList",
            meta: {
                title: "所有场地",
            },
            component: () =>
                import('../page/Grandsman/GroundList'),
        },
        {
            path: "ActivityInfo/:ID",
            name: "OrgActivityInfo",
            meta: {
                title: "审批活动",
            },
            component: () =>
                import('../page/Grandsman/ActivityInfo'),
        },
        {
            path: "FeedbackActivityList",
            name: "FeedbackActivityList",
            meta: {
                title: "活动反馈列表",
            },
            component: () =>
                import('../page/Grandsman/FeedbackActivityList'),
        },
        {
            path: "FeedbackInfo/:ID",
            name: "FeedbackInfo",
            meta: {
                title: "反馈详情",
            },
            component: () =>
                import('../page/Grandsman/FeedbackInfo'),
        },
        {
            path: "AddCourse",
            name: "AddCourse",
            meta: {
                title: "导入课表",
            },
            component: () =>
                import('../page/Grandsman/AddCourse'),
        },
        {
            path: "GroundInfo/:ID",
            name: "GroundInfo",
            meta: {
                title: "场地信息",
            },
            component: () =>
                import('../page/Grandsman/GroundInfo'),
        },
        ]
    },
    {
        path: "*",
        component: () =>
            import('../page/Shared/404.vue')
    }
]


const router = new VueRouter({
    mode: "history",
    routes
})

export default router