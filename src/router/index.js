import Vue from 'vue'
import VueRouter from 'vue-router'
import { GETIdentity } from '../API/http'
import store from '../state/state'
Vue.use(VueRouter)
import { Message } from 'element-ui'


const routes = [
    //注册、登录、忘记密码
    {
        path: '/',
        name: 'Login',
        meta: {
            title: "登录",
            requireAuth: false
        },
        component: () =>
            import('../page/Shared/Login.vue')
    },
    {
        path: '/Register/:type',
        name: 'Register',
        props: true,
        meta: {
            title: "注册",
            requireAuth: false
        },
        component: () =>
            import('../page/Shared/Register.vue'),
        beforeEnter: (to, from, next) => {
            from;
            if (to.params.type === '1' || to.params.type === '3') {
                next();
            } else {
                next(false);
            }
        }
    },
    {
        path: '/ForgetPassword/:type',
        name: 'ForgetPassword',
        props: true,
        meta: {
            title: "忘记密码",
            requireAuth: false,
        },
        component: () =>
            import('../page/Shared/ForgetPassword.vue'),
        beforeEnter: (to, from, next) => {
            from;
            if (to.params.type === '1' || to.params.type === '3') {
                next();
            } else {
                next(false);
            }
        }
    },
    //学生页面
    {
        path: "/StuFrame",
        component: () =>
            import('../page/Student/StudentFrame.vue'),
        meta: {
            title: '学生',
            requireAuth: true,
            roles: ['student']
        },
        children: [{
            path: "AccountModify",
            name: "StuAccountModify",
            component: () =>
                import('../page/Student/StuAccountModify.vue'),
            meta: {
                title: '个人信息',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "ModifyPassword",
            name: "StuModifyPassword",
            component: () =>
                import('../page/Shared/ModifyPassword.vue'),
            meta: {
                title: '修改密码',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "Main",
            name: "StudentFrameMain",
            component: () =>
                import('../page/Student/StudentMain.vue'),
            meta: {
                title: '主页',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "Favorite",
            name: "StudentFrameFavorite",
            component: () =>
                import('../page/Student/StudentFavorite.vue'),
            meta: {
                title: '收藏',
                requireAuth: true,
                roles: ['student']
            }
        },

        {
            path: "ShowSchedule/:groundId",
            name: "ShowScheduleforStuFav",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowSchedule.vue'),
            meta: {
                title: '场地详情',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "ViewSites",
            name: "ViewSites",
            component: () =>
                import('../page/Shared/check_site.vue'),
            meta: {
                title: '查看场地',
                requireAuth: true,
                roles: ['student']
            }
        }, {
            path: "ViewActivities/:ID",
            name: "ViewActivities",
            component: () =>
                import('../page/Shared/check_activity.vue'),
            meta: {
                title: '查看活动',
                requireAuth: true,
                roles: ['student']
            }
        }, {
            path: "Map",
            name: "StudentMap",
            props: {
                membertype: true,
            },

            component: () =>
                import('../page/Shared/ShowMap.vue'),
            meta: {
                title: '地图',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "Announcement",
            name: "StuAnnouncement",
            component: () =>
                import('../page/Shared/AnnouncementList.vue'),
            meta: {
                title: '公告',
                requireAuth: true,
                roles: ['student']
            }
        },
        {
            path: "ShowPlaceDetail",
            name: "StuShowPlaceDetail",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowPlaceDetail.vue'),
            meta: {
                title: '场地列表',
                requireAuth: true,
                roles: ['student']
            },
            children: [{
                path: "ShowSchedule/:groundId",
                name: "ShowScheduleforStu",
                props: {
                    membertype: true,
                },
                component: () =>
                    import('../page/Shared/ShowSchedule.vue'),
                meta: {
                    title: '场地详情',
                    requireAuth: true,
                    roles: ['student']
                }
            },]

        }, {
            path: "ViewOrgs",
            name: "ViewOrgs",
            component: () =>
                import('../page/Shared/check_organ.vue'),
            meta: {
                title: '查看组织',
                requireAuth: true,
                roles: ['student']
            }
        }, {
            path: "ViewSites",
            name: "ViewSites",
            component: () =>
                import('../page/Shared/check_site.vue'),
            meta: {
                title: '查看场地',
                requireAuth: true,
                roles: ['student']
            }
        },
        ]
    },

    //系统管理员
    {
        path: "/SysAdminFrame",
        name: "SystemAdminFrame",
        meta: {
            title: "系统管理员",
            requireAuth: true,
            roles: ['systemAdministrator']
        },
        component: () =>
            import('../page/SystemAdmin/SystemAdminFrame.vue'),
        children: [{
            path: "SysAdminHomePage",
            name: "SystemAdminHomePage",
            meta: {
                title: "主页",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminHomePage.vue')
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
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminGroupVerifyList.vue')
        },
        {
            path: "MaintainUserInfo",
            name: "SystemAdminMaintainUserInfo",
            meta: {
                title: "维护信息",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminMaintainUserInfo.vue')
        },
        {
            path: "AccountModify",
            name: "SystemAdminAccountModify",
            meta: {
                title: "查看信息",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminAccountModify.vue')
        },
        {
            path: "GroupVerify",
            name: "SystemAdminGroupVerify",
            meta: {
                title: "审核组织",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminGroupVerify.vue')
        },
        {
            path: "AddUser",
            name: "SystemAdminAddUser",
            meta: {
                title: "添加用户",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/AddUser.vue')
        },
        {
            path: "AddUserTest",
            name: "SystemAdminAddUserTest",
            meta: {
                title: "添加用户",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/AddUserTest.vue')
        },
        {
            path: "UserModify",
            name: "SystemAdminUserModify",
            meta: {
                title: "修改信息",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminUserModify.vue')
        },
        {
            path: "StuModify",
            name: "SystemAdminStudentModify",
            meta: {
                title: "修改信息",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAdminStudentModify.vue')
        },
        {
            path: "SystemAnnouncement",
            name: "AnnouncementforSystem",
            meta: {
                title: "发布公告",
                requireAuth: true,
                roles: ['systemAdministrator']
            },
            component: () =>
                import('../page/SystemAdmin/SystemAnnouncement.vue')
        },
        {
            path: "Announcement",
            name: "SysAnnouncement",
            component: () =>
                import('../page/Shared/AnnouncementList.vue'),
            meta: {
                title: '公告',
                requireAuth: true,
                roles: ['systemAdministrator']
            }
        },
        ]
    },
    // 组织页面
    {
        path: '/OrgFrame',
        name: 'OrgFrame',
        meta: {
            title: '组织',
            requireAuth: true,
            roles: ['organization']
        },
        component: () =>
            import('../page/Organization/OrganizationFrame.vue'),
        children: [{
            path: 'CheckSite',
            name: 'OrgCheckSite',
            meta: {
                title: '所有场地',
                requireAuth: true,
                roles: ['organization']
            },
            props: {
                membertype: false
            },
            component: () =>
                import('../page/Shared/ShowPlaceDetail.vue'),
            children: [{
                path: 'ShowSchedule/:groundId',
                name: 'ShowScheduleforOrg',
                meta: {
                    title: '场地使用详情',
                    requireAuth: true,
                    roles: ['organization']
                },
                props: {
                    membertype: false,
                },
                component: () =>
                    import('../page/Shared/ShowSchedule.vue')
            },]

        },
        {
            path: "ModifyPassword",
            name: "OrgModifyPassword",
            component: () =>
                import('../page/Shared/ModifyPassword.vue'),
            meta: {
                title: '修改密码',
                requireAuth: true,
                roles: ['organization']
            }
        }, {
            path: "Main",
            name: "OrganizationFrameMain",
            meta: {
                title: '组织主页',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/OrganizationMain.vue')
        }, {
            path: 'CheckActivity/:ID',
            name: 'CreditActivityWindow',
            meta: {
                title: '所有活动',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Shared/check_activity.vue')
        }, {
            path: "OrgAccountModify",
            name: "OrganizationAccountModify",
            meta: {
                title: '组织详细信息',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/OrganizationAccountModify.vue')
        }, {
            path: 'CheckOrgan',
            name: 'CreditOrganWindow',
            meta: {
                title: '所有组织',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Shared/check_organ.vue')
        }, {
            path: 'CreditScore',
            name: 'CreditScoreWindow',
            meta: {
                title: '信用分记录',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/ViewCreditScore.vue')
        }, {
            path: 'Appointment',
            name: 'AppointmentWindow',
            meta: {
                title: '预约记录',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/ViewAppointment.vue')
        }, {
            path: "OrgFavorite",
            name: "FavoriteWindow",
            meta: {
                title: '收藏',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/OrganizationFavorite.vue')
        },
        {
            path: "Announcement",
            name: "AnnouncementforOrg",
            meta: {
                title: '公告',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Shared/AnnouncementList.vue')
        },
        {
            path: 'FinishActivity',
            name: 'FinishWindow',
            meta: {
                title: '活动反馈',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/ViewFinishActivity.vue')
        }, {
            path: 'RecordDetails',
            name: 'RecordWindow',
            meta: {
                title: '已通过',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/RecordDetails.vue')
        }, {
            path: 'Pending',
            name: 'PendingWindow',
            meta: {
                title: '待审核',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/PendingReview.vue')
        }, {
            path: 'Rejected',
            name: 'RejectedWindow',
            meta: {
                title: '被驳回',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/AppointmentRejected.vue')
        }, {
            path: 'FeedBack',
            name: 'FeedBackWindow',
            meta: {
                title: '场地反馈',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/SiteFeedback.vue')
        }, {
            path: 'ApplySite',
            name: 'ApplySiteWindow',
            meta: {
                title: '预约场地',
                requireAuth: true,
                roles: ['organization']
            },
            component: () =>
                import('../page/Organization/ApplyForSite.vue')
        },
        {
            path: "ViewActivities/:ID",
            name: "ViewActivitiesForOrg",
            component: () =>
                import('../page/Shared/check_activity.vue'),
            meta: {
                title: '查看活动',
                requireAuth: true,
                roles: ['organization']
            }
        },
        {
            path: 'ShowMap',
            name: 'ShowMapforOrg',
            meta: {
                title: '组织详细信息',
                requireAuth: true,
                roles: ['organization']
            },
            props: {
                membertype: false,
            },
            component: () =>
                import('../page/Shared/ShowMap.vue')
        },
        ]
    },
    //场地管理员
    {
        path: '/GroundsAdmin',
        meta: {
            title: '场地管理员',
            requireAuth: true,
            roles: ['groundsMan']
        },
        component: () =>
            import('../page/Grandsman/GroundsmanFrame'),
        children: [{
            path: "AccountModify",
            name: "GroundsmanAccountModify",
            component: () =>
                import('../page/Grandsman/GroundsmanAccountModify.vue'),
            meta: {
                title: '个人信息',
                requireAuth: true,
                roles: ['groundsMan']
            }
        },
        {
            path: "ShowSchedule/:groundId",
            name: "ShowScheduleforGroundAdmin",
            props: {
                membertype: true,
            },
            component: () =>
                import('../page/Shared/ShowSchedule.vue'),
            meta: {
                title: '场地详情',
                requireAuth: true,
                roles: ['groundsMan']
            }
        },
        {
            path: "Map",
            name: "GroundsmanMap",
            component: () =>
                import('../page/Grandsman/MapForGroundsman.vue'),
            meta: {
                title: '地图',
                requireAuth: true,
                roles: ['groundsMan']
            }
        },
        {
            path: "AddGround/:PositionName",
            name: "AddGround",
            component: () =>
                import('../page/Grandsman/AddGround.vue'),
            meta: {
                title: '添加场地',
                requireAuth: true,
                roles: ['groundsMan']
            }
        },
        {
            path: "ModifyPassword",
            name: "GroundsmanModifyPassword",
            component: () =>
                import('../page/Shared/ModifyPassword.vue'),
            meta: {
                title: '修改密码',
                requireAuth: true,
                roles: ['groundsMan']
            }
        },
        {
            path: "Main",
            name: "GroundAdminMain",
            meta: {
                title: "主页",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/GroundsmanHome.vue')
        },
        {
            path: "ScoringActivityList",
            name: "ScoringActivityList",
            meta: {
                title: "活动评价列表",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/ScoringActivityList.vue'),
        },
        {
            path: "Announcement",
            name: "AnnouncementforGround",
            meta: {
                title: "公告",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Shared/AnnouncementList.vue'),
        },
        {
            path: "ScoringActivity/:ID",
            name: "ScoringActivity",
            meta: {
                title: "活动评价",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/ScoringActivity'),
        },
        {
            path: "ReleaseGroundAnnouncement",
            name: "ReleaseGroundAnnouncement",
            meta: {
                title: "发布场地公告",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/ReleaseGroundAnnouncement'),
        },
        {
            path: "ReviewActivityList",
            name: "ReviewActivityList",
            meta: {
                title: "活动审核列表",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/ReviewActivityList'),
        },
        {
            path: "GroundList",
            name: "GroundList",
            meta: {
                title: "所有场地",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/GroundList'),
        },
        {
            path: "ActivityInfo/:ID",
            name: "OrgActivityInfo",
            meta: {
                title: "审批活动",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/ActivityInfo'),
        },
        {
            path: "FeedbackActivityList",
            name: "FeedbackActivityList",
            meta: {
                title: "活动反馈列表",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/FeedbackActivityList'),
        },
        {
            path: "FeedbackInfo/:ID",
            name: "FeedbackInfo",
            meta: {
                title: "反馈详情",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/FeedbackInfo'),
        },
        {
            path: "AddCourse",
            name: "AddCourse",
            meta: {
                title: "导入课表",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/AddCourse'),
        },
        {
            path: "GroundInfo/:ID",
            name: "GroundInfo",
            meta: {
                title: "场地信息",
                requireAuth: true,
                roles: ['groundsMan']
            },
            component: () =>
                import('../page/Grandsman/GroundInfo'),
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
            import("../test.vue"),
        meta: {
            requireAuth: false,
        }
    },
    {
        path: "/error",
        component: () =>
            import('../page/Shared/404.vue'),
        meta: {
            requireAuth: false,
        }
    },
    {
        path: "*",
        name: "404page",
        component: () =>
            import('../page/Shared/404.vue'),
        meta: {
            requireAuth: false,
        }
    }
]


const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth === false) {
        if (to.meta.title) {
            document.title = to.meta.title
        }
        next();
    } else {
        GETIdentity()
            .then((data) => {
                const id = localStorage.getItem('uuid');
                const type = localStorage.getItem('uutype');
                if (id === data.accountNumber && type === data.role) { //身份正确
                    store.state.ID = id;
                    store.state.membertype = type;
                    if (to.meta.roles.some(role => { //拥有权限
                        return role === type;
                    })) {
                        if (to.meta.title) {
                            document.title = to.meta.title
                        }
                        next();
                    } else {
                        next(false);
                    }
                } else {
                    localStorage.removeItem("uuid");
                    localStorage.removeItem("uutype");
                    localStorage.removeItem("uutoken");
                    next(next({ path: '/', replace: true }));
                }
            })
            .catch(() => {
                Message("身份验证失败，无法完成跳转");
                next(false);
            })
    }
})

export default router