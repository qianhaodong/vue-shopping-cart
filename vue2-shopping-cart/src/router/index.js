import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '@/views/GoodsList'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'GoodsList',
		component: GoodsList,
		meta: {
			keepAlive: true
		}
	},
	{
		path: '/detail',
		name: 'GoodsDetails',
		component: () => import(/* webpackChunkName: "about" */ '@/views/GoodsDetails')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
