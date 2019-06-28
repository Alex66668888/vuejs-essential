<template>
	<div class="navbar navbar-default topnav">
		<div class="container">
			<div class="navbar-header">
				<a href="/" class="navbar-brand">
					<!--  使用 Mustache 语法 （双大括号）进行数据绑定 -->
					<span class="title">{{ logo.title }}</span>
					
					<!-- src 和 alt 都是 HTML 特性，不能使用 Mustache 语法，而要使用 v-bind 指令，:src 是 v-bind:src 的缩写 -->
					<img :src="logo.src" :alt="logo.title" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	// export 用于从模块中导出函数、对象或原始值，以便其他程序使用 import 引入它们
	export default {
		// 组件的名称
		name: 'TheHeader',
		
		// 数据对象，在组件里必须是返回一个初始数据对象的函数，我们可以在这里添加所需的数据
		data() {
			return {
				logo: {
					// src 的值是用反引号（`）标识的模板字符串，我们只需将变量放在 ${} 的大括号之中
					src: `${this.uploadsUrl}sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg`,
					title: 'VuejsCaff'					
				}
			}
		},
		
		// 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用，
		// 所以我们能从数据对象 data 中访问 this.uploadsUrl
		beforeCreate() {
			// 在当前实例上添加一个 uploadsUrl 属性
			this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
		}
		
		// ES6 允许我们简写对象内的方法，因此下面两种写法是等价的：
		// beforeCreate: function beforeCreate() {
		//   this.uploadsUrl = 'https://vuejscaffcdn.phphub.org/uploads/'
		// }
	}
</script>

<!-- 添加 scoped 属性，则样式只在当前组件起作用 -->
<style scoped>
	.title {
		display: none;
	}
</style>
