<template>
  <div class="gameBoard container">
    <div v-if="!game.id">
      <h1>Create a Game</h1>
      <form @submit="startGame">
        <input type="text" v-model="gameConfig.playerName" placeholder="Name" required>
        <input type="number" v-model="gameConfig.opponents" placeholder="Opp." min="1" max="1" required>
        <input type="number" v-model="gameConfig.set" placeholder="Deck" min="1" max="4" required>
        <button type="submit">Go</button>
      </form>
    </div>
    <div v-if="game.id">
          <OppCards/>
        <!-- {{game.players[0].name}} -->        
    </div>
    <div v-if="game.id">
          <!-- {{game.players[1].name}} -->                    
          <PlayerCards/>      
    </div>
    <div v-if="playerCardId && opponentCardId && !game.winner">
        <button @click="attackOpponent">Play your Card</button>
    </div>
    <div v-if="game.winner">
        <h3>The Winner is "{{game.winner.name}}"</h3>
        <button @click="newGame">New Game</button>
    </div>
  </div>
    
  
</template>

<script>
import OppCards from "@/components/OppCards";
import PlayerCards from "@/components/PlayerCards";

export default {
  name: "GameBoard",
  data() {
    return {
      gameConfig: {
        playerName: this.playerName,
        opponents: this.opponents,
        set: this.set
      }      
    };
  },
  mounted() {
    this.$store.dispatch("getGame");
    this.$store.dispatch("setGameId");
    this.$store.dispatch("setPlayerDead");
    this.$store.dispatch("setOppDead")
   },
  methods: {
    
    startGame() {
      let gameConfig = {
        oppCards: this.oppCards,
        playerCards: this.playerCards
      }
      this.$store.dispatch("startGame", this.gameConfig);
    },
    attackOpponent() {
      let attackConfig = {
        playerId: this.game.players[0].id,
        playerCardId: this.playerCardId,
        opponentId: this.opponentId,
        opponentCardId: this.opponentCardId,
        gameId: this.game.id   
      }
      this.$store.dispatch('attackOpponent', attackConfig)    
    },
    newGame(){
      this.$store.dispatch('clearWinner', false),
      this.$store.dispatch('clearGameId', '')
    }
  },
  computed: {
    game() {
      return this.$store.state.game;
    },
    playerCardId() {
      return this.$store.state.playerCard.id
    },
    opponentCardId() {
      return this.$store.state.oppCard.id
    },
    opponentId(){
      return this.$store.state.game.players[1].id
    },
    
    

    // props: []
  },
  components: {
    OppCards,
    PlayerCards
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
