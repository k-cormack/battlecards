<template>
    <div class="opponent-cards">
      <div class="row">
        <div v-for="card in oppCards" :key="card.id" :class="{active: activeOppCard == card}">
            <img src='..\assets\cardBack.jpg' @click="setOppCard(card)" style="width:160px; height:160px" v-if="!card.visible">
            <div v-else>
                <img :src='card.img' @click="setOppCard(card)" style="width:160px; height:160px">
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


            <!-- <img src='cardBack.img' @click="flipCard(card)"> -->
        </div>    
      </div>   
    </div>
</template>


<script>
export default {
    name: "OppCards",
    data(){
        return{}
    },

    // mounted() {
    //     this.$store.dispatch("getOppCards")
    // },

    computed: {
        oppCards() {
            return this.$store.state.game.players[1].hand
        },
        activeOppCard(){
            return this.$store.state.oppCard
        }
    },
    methods: {
        setOppCard(oppCard) {
            this.$store.dispatch("setOppCard", oppCard)
        }
    },
    // flipCard(card) {
    //     this.$store.dispatch("flipCard", card.img)
    // }
    setOppDead(){
      return this.$store.state.oppDead.value
    }

}

</script>

<style>
.active {
    outline: 1px solid red
}
</style>
