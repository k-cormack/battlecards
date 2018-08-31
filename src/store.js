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
    // oppCards: [],
    oppCard: {},
    // playerCards: [],
    playerCard: {},
    gameId:{},
    // cardImg: {}
    playerDead: {},
    oppDead: {},
    winner: {}
  },


  mutations: {
    setGame(state, data) {
      state.game = data,
      state.playerDead = data.players[0].dead,
      state.oppDead = data.players[1].dead
    },
    // setOppCards(state, data) {
    //   state.oppCards = data
    // },
    setOppCard(state, data) {
      state.oppCard = data
    },
    // setPlayerCards(state, data) {
    //   state.playerCards = data
    // },
    setPlayerCard(state, data) {
      state.playerCard = data
    },
    setGameId(state, data) {
      state.gameId = data
    },
    // flipCard(state, data) {
    //   state.cardImg = data
    // }
    setPlayerDead(state, data) {
      state.playerDead = data
    },
    setOppDead(state, data) {
      state.oppDead = data
    },
    checkWinner(state, data){
      state.winner = data 
    },
    clearGameId(state, data){
      state.gameId = data
      state.game = {}
    },
    clearWinner(state, data){
      state.winner = data
    }

  },


  actions: {
    startGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', { gameConfig })
        .then(res => {
          localStorage.setItem('gameId', res.data.id)
        commit('setGame', res.data)
        // commit('setPlayerDead', res.data.players[0].dead)
        // commit('setOppDead', res.data.players[1].dead)
      })
    },
    getGame({ commit, dispatch }, gameId) {
      let localGameId = localStorage.getItem('gameId')
      if (localGameId) {
        gameId = localGameId
        gameApi.get(gameId).then(res => {
          commit('setGame', res.data.data)
          commit('checkWinner', res.data.data.winner)
          
        })
      }
    },
    setGameId({ commit, dispatch}, gameId) {
      commit('setGameId', gameId)
    },

    attackOpponent({commit, dispatch}, attackConfig) {
      gameApi.put('/'+ attackConfig.gameId, attackConfig)
      .then(res => {
        dispatch('getGame', attackConfig.gameId)
      })
    },
    setOppCard({ commit, dispatch }, data) {
      commit('setOppCard', data)
    },
    setPlayerCard({ commit, dispatch }, data) {
      commit('setPlayerCard', data)
    },
    // flipCard({commit, dispatch}, image) {
    //   commit('flipCard', image)
    // }
    setPlayerDead({commit, dispatch}, dead) {
      commit('setPlayerDead', dead)
    },
    setOppDead({commit, dispatch}, dead){
      commit('setOppDead', dead)
    },
    checkWinner({commit, dispatch}, data){
      commit('checkWinner', data)
    },
    clearWinner({commit, dispatch}, data){
      commit('clearWinner', data)
    },
    clearGameId({commit, dispatch}, data){
      commit('clearGameId', data)
      localStorage.setItem('gameId', '')
    }
  }
})
