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

