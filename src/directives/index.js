import Vue from 'vue'
import validator from './validator'


// 注册全局指令需要使用 Vue.directive，第一个参数 'validator' 是指令名称，
// 第二个参数 validator 是指令对象或者指令函数，我们这里是指令对象。
// 全局注册的好处是，可以在实例内部的所有组件中使用，而不用在每个组件内部单独引用和注册。
Vue.directive('validator', validator)