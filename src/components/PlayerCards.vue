<template>
    <div class="player-cards">
        

    </div>
</template>


<script>
export default {
    name: "PlayerCards",
    data(){
        return{}
    },

    mounted() {
        this.$store.dispatch("getPlayerCards")
    },

    computed: {
        playerCards() {
            return this.$store.state.game.players[0].hand
        }
    },
    methods: {
        setPlayerCards(playerCards) {
            this.$store.dispatch("setplayerCards", playerCards)
        }
    },
    props: ["playerCards"]
}

</script>

<style>

</style>


