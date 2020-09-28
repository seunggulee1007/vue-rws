import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';

// 플러그인 사용하기 위해 설정.
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/flexible/workPlan',
		},
		{
			// 유연 근무 계획
			path: '/flexible/workPlan',
			component: () => import('@/views/flexible/WorkPlan.vue'),
		},
		{
			path: '/flexible/setWorkPlan',
			component: () => import('@/views/flexible/SetWorkPlan.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/chart',
			component: () => import('@/views/Chart.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
router.beforeEach((to, from, next) => {
	if (!to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	} else if (to.path == '/login' && store.getters.getToken) {
		next('/');
	}
	next();
});
export default router;
