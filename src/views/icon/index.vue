<template>
  <div class="icons-container">
    <!-- emoji -->
    <section class="section-container">
      <svg-icon icon-class="approval-config" />
      <span
        v-for="(v,i) in emojis"
        :key="i"
        style="padding:0.5rem;"
      >{{ v }}</span>
      <span
        v-for="(v,i) in emojis2"
        :key="i"
        style="padding:0.5rem;"
      >{{ lib[v].char }}</span>
    </section>
  </div>
</template>

<script>
import emoji from 'emojilib'
export default {
  setup() {
    const emojis = emoji.fitzpatrick_scale_modifiers
    const emojis2 = emoji.ordered
    const lib = emoji.lib
    emoji.length = 30
    emojis2.length = 20
    return {
      emojis,
      emojis2,
      lib
    }
  }
}
</script>
<style scoped lang="scss">
.icons-container{
  .section-container{

  }
}
</style>
