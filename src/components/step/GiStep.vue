<template>
  <div class="gi-step" :class="{ active: getActive >= index + 1 }">
    <div class="gi-step-line" :class="{ 'active-line': getActive >= index + 2 }" />
    <div class="gi-step-main">
      <div class="gi-step-icon">{{ index + 1 }}</div>
      <div class="gi-step-title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GiStep',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      index: -1
    }
  },
  computed: {
    getActive() {
      return this.$parent.active
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this)
  },
  created() {
    // console.log(this.$parent.active)
  },
  beforeUnmount() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.gi-step {
  width: 150px;
  display: flex;
  align-items: center;
  position: relative;
  color: #8c8c8c;
  &:last-of-type {
    .gi-step-line {
      display: none;
    }
  }
  &.active {
    .gi-step-main {
      .gi-step-icon {
        color: #fff;
        background: #409eff;
        border-color: #409eff;
      }
      .gi-step-title {
        color: #409eff;
      }
    }
  }
  &-line {
    width: 100%;
    height: 1px;
    background: #8c8c8c;
    position: absolute;
    left: 0;
    top: 50%;
    &.active-line {
      background: #409eff;
    }
  }
  &-main {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #fff;
    z-index: 9;
  }
  &-icon {
    width: 20px;
    height: 20px;
    border: 1px solid #8c8c8c;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  &-title {
    font-size: 14px;
    flex-shrink: 0;
    margin-left: 5px;
  }
}
</style>
