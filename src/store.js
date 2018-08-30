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
    game: {},
    oppCards: [],
    oppCard: {},
    playerCards: [],
    playerCard: {}
  },


  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setOppCards(state, data) {
      debugger
      state.oppCards = data
    },
    setOppCard(state, data) {
      state.oppCard = data
    },
    setPlayerCards(state, data) {
      state.playerCards = data
    },
    setPlayerCard(state, data) {
      state.playerCard = data
    },
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
    },
    setOppCards({ commit, dispatch }, data) {
      commit('setOppCards', data)
    },
    setPlayerCards({ commit, dispatch }, data) {
      commit('setPlayerCards', data)
    },
    setOppCard({ commit, dispatch }, data) {
      commit('setOppCard', data)
    },
    setPlayerCard({ commit, dispatch }, data) {
      commit('setPlayerCard', data)
    }
  }
})
