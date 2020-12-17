<template>
  <div class="dim-container clearfix">
    <LongText
      v-if="dimData.type==='long_text'"
      :key="String('LongText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <ShortText
      v-if="dimData.type==='short_text'"
      :key="String('ShortText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <MultipleChoice
      v-if="dimData.type==='multiple_choice'"
      :key="String('MultipleChoice_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <MultipleDropdown
      v-if="dimData.type==='multiple_dropdown'"
      :key="String('LongText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <SingleChoice
      v-if="dimData.type==='single_choice'"
      :key="String('SingleChoice_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <SingleDropdown
      v-if="dimData.type==='single_dropdown'"
      :key="String('SingleDropdown_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
    <Desp
      v-if="dimData.type==='desp'"
      :key="String('LongText_'+questionIndex)"
      :dim-data="dimData"
      @modify="modifyHandle"
    />
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
  props: {
    dimData: {
      default: () => {},
      type: Object
    },
    questionIndex: {
      default: () => 0,
      type: Number
    }
  },
  data() {
    return {

    }
  },
  watch: {
    dimData(n) {
      // console.log(n)
    }
  },
  methods: {
    modifyHandle() {

    }
  }
}
</script>
