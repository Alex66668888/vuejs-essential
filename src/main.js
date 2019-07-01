// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App'
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
import router from './router'
// 我们通过引入 ./directives/index.js，运行其中的代码，就可以使用其内部注册的所有指令了
import './directives'
// 我们通过引入 ./components/index.js，执行其中代码，就可以使用其内部注册的所有组件了。
import './components'
// 引入 store/index.js 的默认值
import store from './store'

// 设置 false 以防止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 vue 实例
new Vue({
	// 一个在页面上已存在的 DOM 元素，作为 Vue 实例的挂载元素，这里是 '#app'，我们可以从 index.html 找到该元素
  el: '#app', 
	router,
	// 注入 store
	store,
	// 包含用到组件的对象，这里是 { App }，App 是从 App.vue 引入的默认值
	// { App } 是 { App: App } 的缩写，ES6（ECMAScript 6）允许在对象中直接写变量，此时的属性名为变量名，属性值为变量的值。
  components: { App },
	// 一个会替换挂载元素的字符串模板，因为我们在 components 定义过 App 组件，所以可以在这里使用 '<App/>'
  template: '<App/>'
})
