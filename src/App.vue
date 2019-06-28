<template>
  <div id="wrap">
		<!-- 等同于 <the-header></the-header> -->
    <TheHeader/>
  </div>
</template>

<script>
	// 在使用 import 引入模块时，我们使用了 @ 符号，该别名指向的是 src 目录，
	// 你可以从 webpack 配置文件 build/webpack.base.conf.js 找到其定义
	import TheHeader from '@/components/layouts/TheHeader'

	export default {
		name: 'App',
		components: {
			// 进行局部注册
			TheHeader
		}
	}
</script>

<style lang="scss">
	$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
	$fa-font-path: "~font-awesome/fonts/";
	@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
	@import "~font-awesome/scss/font-awesome";
</style>