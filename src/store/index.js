import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'green'
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    async increaseCounter({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      const data = await res.json()
      commit('increaseCounter', data)
    },
    async decreaseCounter({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      const data = await res.json()
      commit('decreaseCounter', data)
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
  }
})
