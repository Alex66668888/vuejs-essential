<template>
  <div class="navbar-right">
    <div class="nav navbar-nav github-login">
			
      <a href="#" class="btn btn-default login-btn">
        <i class="fa fa-user"></i> 登 录
      </a>
			
			<!-- <router-link> 组件支持用户在具有路由功能的应用中导航，
			* 通过 <router-link> 上的 to 属性可以指定目标地址，这里
			* 是一个字符串 /auth/register，对应路由配置中的 path -->
			<router-link to="/auth/register" class="btn btn-default login-btn">
				<i class="fa fa-user-plus"></i> 注 册
			</router-link>
			
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheEntry'
}
</script>

<style scoped>

</style>