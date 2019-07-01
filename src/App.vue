<template>
  <div id="wrap">
		<!-- 等同于 <the-header></the-header> -->
    <TheHeader/>
		
		<!-- <router-view> 是一个功能组件，它会渲染路径匹配到的视图组件。
		* 添加 <div id="main-container"> 元素，是为了保持样式一致 -->
    <div id="main-container" class="container main-container">
      <router-view/>
    </div>		
		
		<TheFooter/>
  </div>
</template>

<script>
	// 在使用 import 引入模块时，我们使用了 @ 符号，该别名指向的是 src 目录，
	// 你可以从 webpack 配置文件 build/webpack.base.conf.js 找到其定义
	import TheHeader from '@/components/layouts/TheHeader'
	import TheFooter from '@/components/layouts/TheFooter'

	export default {
		name: 'App',
		components: {
			// 进行局部注册
			TheHeader,
			TheFooter
			
		}
	}
</script>

<style lang="scss">
$container-large-desktop: 1200px;
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";

@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import "./styles/extra";
</style>