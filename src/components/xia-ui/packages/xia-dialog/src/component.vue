<template>
  <transition
    name="fade"
    @after-enter="afterEnter"
    @after-leave="aftetLeave"
  >
    <div
      v-show="opened"
      class="xia-dialog__wrapper"
    >
      <div
        class="xia-dialog"
        :style="{marginTop,width}"
      >
        <div class="xia-dialog__header">
          <slot name="header" />
          {{ title }}
          <button
            v-if="showClose"
            type="button"
            class="el-dialog__headerbtn"
            @click="handleClose"
          >
            <i class="fas fa-times" />
          </button>
        </div>
        <div class="xia-dialog__body">
          <slot />
        </div>
        <div class="xia-dialog__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ref, emit, watch, onMounted } from 'vue'
export default {
  name: 'XiaDialog',
  props: {
    title: {
      default: '标题',
      type: String
    },
    marginTop: {
      default: '',
      type: [String, Number]
    },
    showClose: {
      default: true,
      type: Boolean
    },
    width: {
      default: '',
      type: String
    }
  },
  setup(props, ctx) {
    const handleClose = () => {
      opened.value = false
    }
    const afterEnter = () => {
      ctx.emit('open')
    }
    const aftetLeave = () => {
      ctx.emit('close')
    }
    const opened = ref(false)
    onMounted(() => {
      opened.value = true
    })
    return {
      handleClose,
      afterEnter,
      aftetLeave,
      opened
    }
  }
}
</script>
<style lang="scss">
.xia-dialog__wrapper{
  background-color: rgba($color: #000000, $alpha: .5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.xia-dialog{
  background-color: #fff;
  margin: 10vh auto 0;
  width: 50%;
  border-radius: 3px;
}
.xia-dialog__header{
  padding: 20px 20px 10px 20px;
  border-radius: 3px 3px 0 0;
}
.el-dialog__headerbtn{
  float: right;
  background-color: transparent;
  cursor: pointer;
}
.xia-dialog__body{
  padding: 20px;
}
.xia-dialog__footer{
  padding: 20px 20px 10px 20px;
  border-radius: 0 0 3px 3px;
}
</style>
