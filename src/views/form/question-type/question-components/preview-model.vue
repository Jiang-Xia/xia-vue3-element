<template>
  <div class="dim-container">
    <template v-for="(item,index) in fieldTemp">
      <LongText
        v-if="item.type==='long_text'"
        :key="String('LongText_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <ShortText
        v-if="item.type==='short_text'"
        :key="String('ShortText_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <MultipleChoice
        v-if="item.type==='multiple_choice'"
        :key="String('MultipleChoice_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <MultipleDropdown
        v-if="item.type==='multiple_dropdown'"
        :key="String('LongText_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <SingleChoice
        v-if="item.type==='single_choice'"
        :key="String('SingleChoice_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <SingleDropdown
        v-if="item.type==='single_dropdown'"
        :key="String('SingleDropdown_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
      <Desp
        v-if="item.type==='desp'"
        :key="String('LongText_'+index)"
        :dim-layout="item"
        :dim-data="dimData"
        @modify="modifyHandle"
      />
    </template>
  </div>
</template>

<script>
import LongText from './long-text'
import ShortText from './short-text'
import MultipleChoice from './multiple-choice'
import MultipleDropdown from './multiple-dropdown'
import SingleChoice from './single-choice'
import SingleDropdown from './single-dropdown'
import Desp from './desp'
export default {
  components: {
    ShortText,
    LongText,
    MultipleChoice,
    MultipleDropdown,
    SingleChoice,
    SingleDropdown,
    Desp
  },
  provide() {
    return {
      dimData: this.dimData,
      isEditing: this.isEditing
    }
  },
  props: {
    dimData: {
      default: () => {},
      type: Object
    },
    isEditing: {
      default: () => false,
      type: Boolean
    },
    fieldTemp: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {

    }
  },
  watch: {
    dimData(n) {
      // console.log(n)
    },
    fieldTemp: {
      handler: function(n) {
        console.log(n)
      },
      immediate: true
    }
  },
  methods: {
    modifyHandle() {

    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/scss/_mixins";
.dim-container{
  border-radius: 5px;
  border:1px solid #ccc;
  padding: .5rem 1rem;
  margin-left: .5rem;
  display: flex;
  flex-wrap: wrap;
  .question-wrap{
    margin-top: 1rem;
  }
  .question-heading{
    font-size: 14px;
    margin: .8rem  0 .4rem;
  }
  .control-wrap{
    margin-left: .5rem;
  }
}
</style>
