<template>
    <div class="player-cards">
        <div class="row">
            <div v-for="card in playerCards" :key="card.id" :class="{active: activePlayerCard == card}">
                <img :src='card.img' @click="setPlayerCard(card)" style="width:160px; height:160px">
                <div>
                {{card.name}}
                </div>
                <div>
                Attack: {{card.attack}}
                </div>
                <div>
                Defense: {{card.defense}}
                </div>
                <div>
                Health: {{card.health}}
                </div>
            </div>    
        </div>
    </div>
</template>


<script>
export default {
  name: "PlayerCards",
  data() {
    return {};
  },

  //   mounted() {
  //     this.$store.dispatch("getPlayerCards");
  //   },

  computed: {
    playerCards() {
      return this.$store.state.game.players[0].hand;
    },
    activePlayerCard(){
      return this.$store.state.playerCard
        },
    setPlayerDead(){
      return this.$store.state.playerDead
    }
  },
  methods: {
    setPlayerCard(playerCard) {
      this.$store.dispatch("setPlayerCard", playerCard);
    },
  }
};
</script>

<style>
.active {
    outline: 1px solid red
}
</style>


