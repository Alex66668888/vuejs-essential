<template>
	<!-- v-show 是一个条件渲染指令，它只切换元素 CSS 属性的 display，这里当 show 值为 true 时，我们就显示该元素。 -->
  <div v-show="show" :class="`alert alert-${type} alert-dismissible`">
    <button @click="close" type="button" class="close"><span>×</span></button>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Message',
	// props 是用来传递数据的
  props: {
    // 是否显示消息框
    show: {
      type: Boolean,
      default: false
    },
    // 消息框的类型
    type: {
      type: String,
      default: 'success'
    },
    // 消息
    msg: {
      type: String,
      default: ''
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.$nextTick(() => {
          this.$el.scrollIntoView(true)
        })
      }
    }
  },
  methods: {
    close() {
			// $emit 用于触发当前实例上的事件，其第一个参数是事件名称，
			// 后面还可以附加若干参数。当点击关闭按钮时，
			// 我们触发一个 'update:show' 的事件，并附带一个参数 false，用来关闭消息提示
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>