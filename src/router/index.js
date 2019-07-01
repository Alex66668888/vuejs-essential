import Vue from 'vue'
import Router from 'vue-router'

// 使用 vue-router 路由
Vue.use(Router)

const routes = [
	{
		// 路由的路径
		path: '/auth/register',
		// 路由的名称
		name: 'Register',
		// 对应的视图组件
		// 使用下面的方法指定组件，可以实现路由懒加载，即当路由被访问时才加载对应的组件
		component: () => import('@/views/auth/Register')
	}
]

const router = new Router({
	// mode：路由模式，默认值 'hash' 使用井号（ # ）作路由，
	// 值 'history' 可利用 History API 来完成页面跳转且无须重新加载
	mode: 'history',
	routes
})

export default router