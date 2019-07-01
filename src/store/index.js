import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
	// 用户信息，初始值从本地 localStorage 获取
  user: ls.getItem('user')
}

const mutations = {
  UPDATE_USER(state, user) {
    // 改变 user 的值
    state.user = user
    // 将改变后的值存入 localStorage
    ls.setItem('user', user)
  }
}

const actions = {
  login({ commit }, user) {
    // 登录时有传用户信息，就更新下用户信息
    if (user) commit('UPDATE_USER', user)
    // 跳转到首页
    router.push('/')
  }
}

const store = new Vuex.Store({
	// state：共享的状态，我们不能直接更改状态，但是可以像 store.state.user 这样访问一个状态；
  state,
	// mutations：更改状态的方法，我们可以在这里更改状态，
	// 调用方法是像 store.commit('UPDATE_USER', user) 这样提交一个事件类型，这里不能包含异步操作；
  mutations,
	// actions：类似于 mutations，但我们不在这里直接更改状态，而是提交前面的 mutation，调用方法是
	// 像 store.dispatch('login') 这样分发一个事件，这里可以包含异步操作
  actions
})

export default store