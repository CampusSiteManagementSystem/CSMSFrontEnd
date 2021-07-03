import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ('../page/OrganizationFrame.vue'),
        children:[{
            path: '/CheckSite',
            name: 'CreditSiteWindow',
            component: () =>
                import ('../page/check_site.vue')
        },{
            path: '/CheckActivity',
            name: 'CreditActivityWindow',
            component: () =>
                import ('../page/check_activity.vue')
        },{
            path: '/CheckOrgan',
            name: 'CreditOrganWindow',
            component: () =>
                import ('../page/check_organ.vue')
        },{
            path: '/CreditScore',
            name: 'CreditScoreWindow',
            component: () =>
                import ('../page/ViewCreditScore.vue')
        },{
            path: '/Appointment',
            name: 'AppointmentWindow',
            component: () =>
                import ('../page/ViewAppointment.vue')
        },{
            path: '/RecordDetails',
            name: 'RecordWindow',
            component: () =>
                import ('../page/RecordDetails.vue')
        },{
            path: '/Pending',
            name: 'PendingWindow',
            component: () =>
                import('../page/PendingReview.vue')
        },{
            path: '/Rejected',
            name: 'RejectedWindow',
            component: () =>
                import('../page/AppointmentRejected.vue')
        },{
            path: '/FeedBack',
            name: 'FeedBackWindow',
            component: () =>
                import ('../page/SiteFeedback.vue')
        },{
            path: '/ApplySite',
            name: 'ApplySiteWindow',
            component: () =>
                import ('../page/ApplyForSite.vue')
        },{
            path: '/ShowMap',
            name: 'ShowMap',
            component: () =>
            import('../page/ShowMap.vue')
        },{
            path: '/ShowPlaceDetail',
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
        }]
},{
    path: '/wywt',
    name: 'wywtWindow',
    component: () =>
        import ('../page/SearchPlace.vue')
}]


const router = new VueRouter({
    routes
})

export default router