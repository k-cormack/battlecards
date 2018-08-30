<template>
  <div class="gameBoard container">
    <div v-if="!game.id">
      <h1>Create a Game</h1>
      <form @submit.prevent="startGame">
        <input type="text" v-model="gameConfig.playerName" placeholder="Name" required>
        <input type="number" v-model="gameConfig.opponents" min="1" required>
        <input type="number" v-model="gameConfig.set" min="1" max="4" required>
        <button type="submit">Go</button>
      </form>
    </div>
    <div v-if="game.id" class="row">
      <div class="col">
      
        {{game.players[0].name}}
        <img @click="setPlayerCard(card)" :src="'https://robohash.org/3a3ca071-c281-4b15-9336-8b2c3ae8992b?set=set1'">

      </div>
      <div class="col">
          {{game.players[1].name}}
          <img @click="setOppCard(this.$store.state.oppCard)" :src="'https://robohash.org/3a3ca071-c281-4b15-9336-8b2c3ae8992b?set=set2'">
          <div class="opp-card" v-for="oppCard in oppCards" :key="oppCard.name">
            {{oppCard.name}}
        </div>
      </div>
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
      
    };
  },
  mounted() {
    this.$store.dispatch("getGame");
  },
  methods: {
    
    startGame() {
      let gameConfig = {
        oppCards: this.oppCards,
        playerCards: this.playerCards
      }
      this.$store.dispatch("startGame", this.gameConfig);
    }
  },
  computed: {
    game() {
      return this.$store.state.game;
    }
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
