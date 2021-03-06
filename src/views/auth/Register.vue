<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 floating-box">
			
			<!-- 消息组件 -->
			<Message :show.sync="msgShow" :type="msgType" :msg="msg"/>			
			
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">请注册</h3>
        </div>

				<!-- 我们先在外层元素上，添加 data-validator-form 属性，使其成为所有验证项的父级： -->
				<div class="panel-body" data-validator-form>
					<div class="form-group">
						<label class="control-label">用户名</label>
						<input v-model.trim="username" v-validator:input.required="{ regex: /^[a-zA-Z]+\w*\s?\w*$/, error: '用户名要求以字母开头的单词字符' }" type="text" class="form-control" placeholder="请填写用户名">
					</div>
					<div class="form-group">
						<label class="control-label">密码</label>
						<input id="password" v-model.trim="password" v-validator.required="{ regex: /^\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }" type="password" class="form-control" placeholder="请填写密码">
					</div>
					<div class="form-group">
						<label class="control-label">确认密码</label>
						<input v-model.trim="cpassword" v-validator.required="{ target: '#password' }" type="password" class="form-control" placeholder="请填写确认密码">
					</div>
					<div class="form-group">
						<label class="control-label">图片验证码</label>
						<input v-model.trim="captcha" v-validator.required="{ title: '图片验证码' }" type="text" class="form-control" placeholder="请填写验证码">
					</div>
					<div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
						<div class="captcha vcenter" v-html="captchaTpl"></div>
					</div>
					<button type="submit" class="btn btn-lg btn-success btn-block" @click="register">
						<i class="fa fa-btn fa-sign-in"></i> 注册
					</button>
				</div>
				
      </div>
    </div>
  </div>
</template>

<script>
import createCaptcha from '@/utils/createCaptcha'
import ls from '@/utils/localStorage'

export default {
  name: 'Register',
  data() {
    return {
      captchaTpl: '', // 验证码模板
      username: '', // 用户名
      password: '', // 密码
      cpassword: '', // 确认密码
      captcha: '', // 验证码
      msg: '', // 消息
      msgType: '', // 消息类型
      msgShow: false // 是否显示消息，默认不显示	
    }
  },
  created() {
    this.getCaptcha()
  },
  methods: {
		
    getCaptcha() {
      const { tpl, captcha } = createCaptcha(6)

      this.captchaTpl = tpl
      this.localCaptcha = captcha
    },
		
		// 注册
		register(e) {
			// 实例的 $nextTick 方法用于在下次 DOM 更新循环结束之后执行延迟回调
			this.$nextTick(() => {
				const target = e.target.type === 'submit' ? e.target : e.target.parentElement

				if (target.canSubmit) {
					this.submit()
				}
			})
		},
		// 向 localStorage 提交数据
		submit() {
			// 检查验证码是否匹配
			if (this.captcha.toUpperCase() !== this.localCaptcha) {
				this.showMsg('验证码不正确')
				// 重新获取验证码
				this.getCaptcha()
			} else {
				// 表单里的用户信息
				const user = {
					name: this.username,
					password: this.password,
					// 根据用户名，从线上返回一张头像
					avatar: `https://api.adorable.io/avatars/200/${this.username}.png`
				}
				// localStorage 的用户信息
				const localUser = this.$store.state.user

				if (localUser) {
					// 检查是否重名
					if (localUser.name === user.name) {
						this.showMsg('用户名已存在')
					} else {
						this.login(user)
					}
				} else {
					this.login(user)
				}
			}
		},
		// 登陆
		login(user) {
			// 保存用户信息
			this.$store.dispatch('login', user)
			this.showMsg('注册成功', 'success')
		},
		
    showMsg(msg, type = 'warning') {
      this.msg = msg
      this.msgType = type
      this.msgShow = false

      this.$nextTick(() => {
        this.msgShow = true
      })
    }		
		
  }
}
</script>

<style scoped>
.thumbnail { width: 170px; margin-top: 10px; cursor: pointer;}
.thumbnail .captcha { height: 46px; background: #E1E6E8;}
.captcha { font-size: 24px; font-weight: bold; user-select: none;}
</style>