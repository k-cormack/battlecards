<template>
    <div class="opponent-cards">
        <!-- <div class="opp-card" v-for="oppCard in oppCards" :key="oppCard.name">
            {{oppCard.name}}
        </div> -->
        

    </div>
</template>


<script>
export default {
    name: "OppCards",
    data(){
        return{}
    },

    mounted() {
        this.$store.dispatch("getOppCards")
    },

    computed: {
        oppCards() {
            return this.$store.state.game.players[1].hand
        }
    },
    methods: {
        setOppCards(oppCards) {
            this.$store.dispatch("setOppCards", oppCards)
        }
    },
    props: ["oppCards"]
}

</script>

<style>

</style>
