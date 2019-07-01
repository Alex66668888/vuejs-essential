<template>
	<div class="navbar navbar-default topnav">
		<div class="container">
			
			<div class="navbar-header">
				
				<button type="button" class="navbar-toggle" @click="toggleNav">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>				
				
				<router-link to="/" class="navbar-brand">
					<!--  使用 Mustache 语法 （双大括号）进行数据绑定 -->
					<span class="title">{{ logo.title }}</span>
					
					<!-- src 和 alt 都是 HTML 特性，不能使用 Mustache 语法，而要使用 v-bind 指令，:src 是 v-bind:src 的缩写 -->
					<img :src="logo.src" :alt="logo.title" />
				</router-link>
				
			</div>
			
			<!-- 'collapse' 和 'navbar-collapse' 是默认要应用的类名，只有当 showCollapsedNav 返回 true 时才添加 'in' 这个类名 -->
			<div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
				<ul class="nav navbar-nav">
				  <li v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
					<a href="#" @click="changeNavIndex(index)">{{ item }}</a>
				  </li>
				</ul>
				
				<!-- 入口组件 -->
				<div class="navbar-right">
					<TheEntry/>
				</div>				
				
			</div>
						
		</div>
	</div>
</template>

<script>
	
	// 引入 TheEntry.vue 的默认值
	import TheEntry from '@/components/layouts/TheEntry'
	
	// export 用于从模块中导出函数、对象或原始值，以便其他程序使用 import 引入它们
	export default {
		// 组件的名称
		name: 'TheHeader',
		
		// 添加 components 选项，并注册 TheEntry
		components:{
			TheEntry
		},
		
		// 数据对象，在组件里必须是返回一个初始数据对象的函数，我们可以在这里添加所需的数据
		data() {
			return {
				logo: {
					// src 的值是用反引号（`）标识的模板字符串，我们只需将变量放在 ${} 的大括号之中
					src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
					title: 'VuejsCaff'					
				},
				navList: ['社区', '头条', '问答', '教程'],
				activeNavIndex: 0,
				// 添加一个是否显示折叠导航的开关 showCollapsedNav
				showCollapsedNav: false
			}
		},
		
		// 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用，
		// 所以我们能从数据对象 data 中访问 this.uploadsUrl
		beforeCreate() {
			// 在当前实例上添加一个 uploadsUrl 属性
			this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
		},
		
		// ES6 允许我们简写对象内的方法，因此下面两种写法是等价的：
		// beforeCreate: function beforeCreate() {
		//   this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
		// }
		
		methods: {
			
			changeNavIndex(index) {
				this.activeNavIndex = index
			},
			
			toggleNav() {
				this.showCollapsedNav = !this.showCollapsedNav
			}
			
		}
		
	}
</script>

<!-- 添加 scoped 属性，则样式只在当前组件起作用 -->
<style scoped>
	.title {
		display: none;
	}
	.navbar-default .navbar-nav > .active > a {
		background: rgba(0,0,0,.03);
	}
</style>
