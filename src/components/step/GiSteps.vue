<template>
  <div class="gi-steps">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GiSteps',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      steps: []
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.gi-steps {
  width: 100%;
  line-height: 1.5;
  margin-bottom: 20px;
  display: flex;
  .gi-step {
    &:first-child {
      .gi-step-line {
        display: none;
      }
    }
  }
}
</style>
