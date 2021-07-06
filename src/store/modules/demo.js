/*
 * @Author: 酱
 * @LastEditors: 酱
 * @Date: 2021-03-24 09:43:12
 * @LastEditTime: 2021-07-06 15:13:32
 * @Description:
 * @FilePath: \xia-vue3-element\src\store\modules\demo.js
 */
export default {
  namespaced: true,
  state: {
    stepData: {
      input_list: [
        {
          input: 'input1'
        },
        {
          input: 'input2'
        }
      ],
      select: '1',
      checkbox: true
    }
  },
  mutations: {
    stepData: (state, stepData) => {
      state.stepData = Object.assign(state.stepData, stepData)
    }
  },
  actions: {

  }
}

