<template>
  <div class="gameBoard">
    <div v-if="!game.id">
      <h1>Create a Game</h1>
      <form @submit.prevent="startGame">
        <input type="text" v-model="gameConfig.playerName" placeholder="Name" required>
        <input type="number" v-model="gameConfig.opponents" min="1" required>
        <input type="number" v-model="gameConfig.set" min="1" max="4" required>
        <button type="submit">Go</button>
      </form>
    </div>
    <div v-if="game.id">
      {{game.players[0].name}}
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data() {
    return {
      gameConfig: {}
    };
  },
  mounted(){
    this.$store.dispatch('getGame')
  },
  methods: {
    startGame(){
      this.$store.dispatch('startGame', this.gameConfig)
    }
  },
  computed: {
    game(){
      return this.$store.state.game
    }
  }
  
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
