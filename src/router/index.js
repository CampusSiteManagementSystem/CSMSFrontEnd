import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //注册、登录、忘记密码
    {
        path: '/',
        name: 'Login',
        meta: {
            title: "登录",
        },
        component: () =>
            import ('../page/Shared/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        meta: {
            title: "注册",
        },
        component: () =>
            import ('../page/Shared/Register.vue')
    },
    {
        path: '/ForgetPassword',
        name: 'ForgetPassword',
        meta: {
            title: "忘记密码",
        },
        component: () =>
            import ('../page/Shared/ForgetPassword.vue')
    },
    //学生页面
    {
        path: "/StuFrame",
        component: () =>
            import ('../page/Student/StudentFrame.vue'),
        meta: {
            title: '学生'
        },
        children: [{
                path: "AccountModify",
                name: "StuAccountModify",
                component: () =>
                    import ('../page/Student/StuAccountModify.vue'),
                meta: {
                    title: '个人信息'
                }
            },
            {
                path: "ModifyPassword",
                name: "StuModifyPassword",
                component: () =>
                    import ('../page/Shared/ModifyPassword.vue'),
                meta: {
                    title: '修改密码'
                }
            },
            {
                path: "Main",
                name: "StudentFrameMain",
                component: () =>
                    import ('../page/Student/StudentMain.vue'),
                meta: {
                    title: '主页'
                }
            },
            {
                path: "Favorite",
                name: "StudentFrameFavorite",
                component: () =>
                    import ('../page/Student/StudentFavorite.vue'),
                meta: {
                    title: '收藏'
                }
            },

            {
                path: "ShowSchedule/:groundId",
                name: "ShowScheduleforStuFav",
                props: {
                    membertype: true,
                },
                component: () =>
                    import ('../page/Shared/ShowSchedule.vue'),
                meta: {
                    title: '场地详情'
                }
            },
            {
                path: "ViewSites",
                name: "ViewSites",
                component: () =>
                    import ('../page/Shared/check_site.vue'),
                meta: {
                    title: '查看场地'
                }
            }, {
                path: "ActivityInfo/:ID",
                name: "StuActivityInfo",
                component: () =>
                    import ('../page/Shared/ActivityInfo.vue'),
                meta: {
                    title: '活动详情'
                }
            }, {
                path: "ViewActivities/:ID",
                name: "ViewActivities",
                component: () =>
                    import ('../page/Shared/check_activity.vue'),
                meta: {
                    title: '查看活动'
                }
            }, {
                path: "Map",
                name: "StudentMap",
                props: {
                    membertype: true,
                },

                component: () =>
                    import ('../page/Shared/ShowMap.vue'),
                meta: {
                    title: '地图'
                }
            },
            {
                path: "Announcement",
                name: "StuAnnouncement",
                component: () =>
                    import ('../page/Shared/AnnouncementList.vue'),
                meta: {
                    title: '公告'
                }
            },
            {
                path: "ShowPlaceDetail",
                name: "StuShowPlaceDetail",
                props: {
                    membertype: true,
                },
                component: () =>
                    import ('../page/Shared/ShowPlaceDetail.vue'),
                meta: {
                    title: '场地列表'
                },
                children: [{
                    path: "ShowSchedule/:groundId",
                    name: "ShowScheduleforStu",
                    props: {
                        membertype: true,
                    },
                    component: () =>
                        import ('../page/Shared/ShowSchedule.vue'),
                    meta: {
                        title: '场地详情'
                    }
                }, ]

            }, {
                path: "ViewOrgs",
                name: "ViewOrgs",
                component: () =>
                    import ('../page/Shared/check_organ.vue'),
                meta: {
                    title: '查看组织'
                }
            }, {
                path: "ViewSites",
                name: "ViewSites",
                component: () =>
                    import ('../page/Shared/check_site.vue'),
                meta: {
                    title: '查看场地'
                }
            },
        ]
    },
    //系统管理员！！！！！！！！
    //这个界面估计要删了
    // {
    //     path: "/SystemAdminHomePage",
    //     name: "SystemAdminHomePage",
    //     component: () =>
    //         import('../page/SystemAdmin/SystemAdminHomePage.vue')
    // },
    //这两个中间要删了
    {
        path: "/SysAdminFrame",
        name: "SystemAdminFrame",
        meta: {
            title: "系统管理员",
        },
        component: () =>
            import ('../page/SystemAdmin/SystemAdminFrame.vue'),
        children: [{
                path: "SysAdminHomePage",
                name: "SystemAdminHomePage",
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminHomePage.vue')
            },
            // {
            //     path: "ModifyPassword",
            //     name: "SysAdminModifyPassword",
            //     component: () =>
            //         import('../page/Shared/ModifyPassword.vue'),
            //     meta: {
            //         title: '修改密码'
            //     }
            // },
            // {
            //     path: 'CheckSite',
            //     name: 'OrgCheckSite',
            //     meta: {
            //         title: '所有场地'
            //     },
            //     props: {
            //         membertype: false
            //     },
            //     component: () =>
            //         import('../page/Shared/ShowPlaceDetail.vue')
            // }, 
            // {
            //     path: "Main",
            //     name: "OrganizationFrameMain",
            //     meta: {
            //         title: '组织主页'
            //     },
            //     component: () =>
            //         import('../page/Organization/OrganizationMain.vue')
            // }, 
            // {
            //     path: 'ViewActivities/:ID',
            //     name: 'ViewActivities',
            //     meta: {
            //         title: '查看活动'
            //     },
            //     component: () =>
            //         import('../page/Shared/check_activity.vue')
            // },
            //  {
            //     path: "OrgAccountModify",
            //     name: "OrganizationAccountModify",
            //     meta: {
            //         title: '组织详细信息'
            //     },
            //     component: () =>
            //         import('../page/Organization/OrganizationAccountModify.vue')
            // }, 
            {
                path: 'GroupVerifyList',
                name: 'SystemAdminGroupVerify',
                meta: {
                    title: "审核注册",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminGroupVerifyList.vue')
            },
            {
                path: "MaintainUserInfo",
                name: "SystemAdminMaintainUserInfo",
                meta: {
                    title: "维护信息",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminMaintainUserInfo.vue')
            },
            {
                path: "AccountModify",
                name: "SystemAdminAccountModify",
                meta: {
                    title: "查看信息",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminAccountModify.vue')
            },
            {
                path: "GroupVerify",
                name: "SystemAdminGroupVerify",
                meta: {
                    title: "审核组织",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminGroupVerify.vue')
            },
            {
                path: "AddUser",
                name: "SystemAdminAddUser",
                meta: {
                    title: "添加用户",
                },
                component: () =>
                    import ('../page/SystemAdmin/AddUser.vue')
            },
            {
                path: "UserModify",
                name: "SystemAdminUserModify",
                meta: {
                    title: "修改信息",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminUserModify.vue')
            },
            {
                path: "StuModify",
                name: "SystemAdminStudentModify",
                meta: {
                    title: "修改信息",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAdminStudentModify.vue')
            },
            {
                path: "SystemAnnouncement",
                name: "AnnouncementforSystem",
                meta: {
                    title: "发布公告",
                },
                component: () =>
                    import ('../page/SystemAdmin/SystemAnnouncement.vue')
            }
        ]
    },
    // 组织页面
    {
        path: '/OrgFrame',
        name: 'OrgFrame',
        meta: {
            title: '组织'
        },
        component: () =>
            import ('../page/Organization/OrganizationFrame.vue'),
        children: [{
                path: 'CheckSite',
                name: 'OrgCheckSite',
                meta: {
                    title: '所有场地'
                },
                props: {
                    membertype: false
                },
                component: () =>
                    import ('../page/Shared/ShowPlaceDetail.vue'),
                children: [{
                    path: 'ShowSchedule/:groundId',
                    name: 'ShowScheduleforOrg',
                    meta: {
                        title: '场地使用详情'
                    },
                    props: {
                        membertype: false,
                    },
                    component: () =>
                        import ('../page/Shared/ShowSchedule.vue')
                }, ]

            },
            {
                path: "ModifyPassword",
                name: "OrgModifyPassword",
                component: () =>
                    import ('../page/Shared/ModifyPassword.vue'),
                meta: {
                    title: '修改密码'
                }
            }, {
                path: "Main",
                name: "OrganizationFrameMain",
                meta: {
                    title: '组织主页'
                },
                component: () =>
                    import ('../page/Organization/OrganizationMain.vue')
            }, {
                path: 'CheckActivity/:ID',
                name: 'CreditActivityWindow',
                meta: {
                    title: '所有活动'
                },
                component: () =>
                    import ('../page/Shared/check_activity.vue')
            }, {
                path: "OrgAccountModify",
                name: "OrganizationAccountModify",
                meta: {
                    title: '组织详细信息'
                },
                component: () =>
                    import ('../page/Organization/OrganizationAccountModify.vue')
            }, {
                path: 'CheckOrgan',
                name: 'CreditOrganWindow',
                meta: {
                    title: '所有组织'
                },
                component: () =>
                    import ('../page/Shared/check_organ.vue')
            }, {
                path: 'CreditScore',
                name: 'CreditScoreWindow',
                meta: {
                    title: '信用分记录'
                },
                component: () =>
                    import ('../page/Organization/ViewCreditScore.vue')
            }, {
                path: 'Appointment',
                name: 'AppointmentWindow',
                meta: {
                    title: '预约记录'
                },
                component: () =>
                    import ('../page/Organization/ViewAppointment.vue')
            }, {
                path: "OrgFavorite",
                name: "FavoriteWindow",
                meta: {
                    title: '收藏'
                },
                component: () =>
                    import ('../page/Organization/OrganizationFavorite.vue')
            },
            {
                path: "Announcement",
                name: "AnnouncementforOrg",
                meta: {
                    title: '公告'
                },
                component: () =>
                    import ('../page/Shared/AnnouncementList.vue')
            },
            {
                path: 'FinishActivity',
                name: 'FinishWindow',
                meta: {
                    title: '活动反馈'
                },
                component: () =>
                    import ('../page/Organization/ViewFinishActivity.vue')
            }, {
                path: 'RecordDetails',
                name: 'RecordWindow',
                meta: {
                    title: '已通过'
                },
                component: () =>
                    import ('../page/Organization/RecordDetails.vue')
            }, {
                path: 'Pending',
                name: 'PendingWindow',
                meta: {
                    title: '待审核'
                },
                component: () =>
                    import ('../page/Organization/PendingReview.vue')
            }, {
                path: 'Rejected',
                name: 'RejectedWindow',
                meta: {
                    title: '被驳回'
                },
                component: () =>
                    import ('../page/Organization/AppointmentRejected.vue')
            }, {
                path: 'FeedBack',
                name: 'FeedBackWindow',
                meta: {
                    title: '场地反馈'
                },
                component: () =>
                    import ('../page/Organization/SiteFeedback.vue')
            }, {
                path: 'ApplySite',
                name: 'ApplySiteWindow',
                meta: {
                    title: '预约场地'
                },
                component: () =>
                    import ('../page/Organization/ApplyForSite.vue')
            },

            {
                path: 'ShowMap',
                name: 'ShowMapforOrg',
                meta: {
                    title: '组织详细信息'
                },
                props: {
                    membertype: false,
                },
                component: () =>
                    import ('../page/Shared/ShowMap.vue')
            },
        ]
    },
    //场地管理员
    {
        path: '/GroundsAdmin',
        component: () =>
            import ('../page/Grandsman/GroundsmanFrame'),
        children: [{
                path: "AccountModify",
                name: "GroundsmanAccountModify",
                component: () =>
                    import ('../page/Grandsman/GroundsmanAccountModify.vue'),
                meta: {
                    title: '个人信息'
                }
            },
            {
                path: "ModifyPassword",
                name: "GroundsmanModifyPassword",
                component: () =>
                    import ('../page/Shared/ModifyPassword.vue'),
                meta: {
                    title: '修改密码'
                }
            },
            {
                path: "Main",
                name: "GroundAdminMain",
                meta: {
                    title: "场地管理员",
                },
                component: () =>
                    import ('../page/Grandsman/GroundsmanHome.vue')
            },
            {
                path: "ScoringActivityList",
                name: "ScoringActivityList",
                meta: {
                    title: "活动评价列表",
                },
                component: () =>
                    import ('../page/Grandsman/ScoringActivityList.vue'),
            },
            {
                path: "Announcement",
                name: "AnnouncementforGround",
                meta: {
                    title: "公告",
                },
                component: () =>
                    import ('../page/Shared/AnnouncementList.vue'),
            },
            {
                path: "ScoringActivity/:ID",
                name: "ScoringActivity",
                meta: {
                    title: "活动评价",
                },
                component: () =>
                    import ('../page/Grandsman/ScoringActivity'),
            },
            {
                path: "ReleaseGroundAnnouncement",
                name: "ReleaseGroundAnnouncement",
                meta: {
                    title: "发布场地公告",
                },
                component: () =>
                    import ('../page/Grandsman/ReleaseGroundAnnouncement'),
            },
            {
                path: "ReviewActivityList",
                name: "ReviewActivityList",
                meta: {
                    title: "活动审核列表",
                },
                component: () =>
                    import ('../page/Grandsman/ReviewActivityList'),
            },
            {
                path: "GroundList",
                name: "GroundList",
                meta: {
                    title: "所有场地",
                },
                component: () =>
                    import ('../page/Grandsman/GroundList'),
            },
            {
                path: "ActivityInfo/:ID",
                name: "OrgActivityInfo",
                meta: {
                    title: "审批活动",
                },
                component: () =>
                    import ('../page/Grandsman/ActivityInfo'),
            },
            {
                path: "FeedbackActivityList",
                name: "FeedbackActivityList",
                meta: {
                    title: "活动反馈列表",
                },
                component: () =>
                    import ('../page/Grandsman/FeedbackActivityList'),
            },
            {
                path: "FeedbackInfo/:ID",
                name: "FeedbackInfo",
                meta: {
                    title: "反馈详情",
                },
                component: () =>
                    import ('../page/Grandsman/FeedbackInfo'),
            },
            {
                path: "AddCourse",
                name: "AddCourse",
                meta: {
                    title: "导入课表",
                },
                component: () =>
                    import ('../page/Grandsman/AddCourse'),
            },
            {
                path: "GroundInfo/:ID",
                name: "GroundInfo",
                meta: {
                    title: "场地信息",
                },
                component: () =>
                    import ('../page/Grandsman/GroundInfo'),
            },
            // {
            //     path: "ShowSchedule/:groundId",
            //     name: "ShowScheduleforStu",
            //     props: {
            //         membertype: true,
            //     },
            //     component: () =>
            //         import('../page/Shared/ShowSchedule.vue'),
            //     meta: {
            //         title: '场地详情'
            //     }
            // }
        ]

    },
    {
        path: "/test",
        component: () =>
            import ("../test.vue")
    },
    {
        path: "/error",
        component: () =>
            import ('../page/Shared/404.vue')
    },
    {
        path: "*",
        name: "404page",
        component: () =>
            import ('../page/Shared/404.vue')
    }
]


const router = new VueRouter({
    mode: "history",
    routes
})
export default router