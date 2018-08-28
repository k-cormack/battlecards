import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    games: [],
    game: {}
  },


  mutations: {
    setGame(state, data) {
      state.game = data
    }
  },


  actions: {
    startGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', { gameConfig })
        .then(res => {
          localStorage.setItem('gameId', res.data.id)
          commit('setGame', res.data)
        })
    },
    getGame({ commit, dispatch }, gameId) {
      let localGameId = localStorage.getItem('gameId')
      if (localGameId) {
        gameId = localGameId
      }

      gameApi.get(gameId).then(res => {
        commit('setGame', res.data.data)
        // localGameId = ''
       
      })

    }
  }
})
