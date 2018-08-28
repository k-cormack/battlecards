<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <GameBoard msg="Welcome to BATTLE-CARDS!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GameBoard from '@/components/GameBoard.vue'

export default {
  name: 'home',
  components: {
    GameBoard
  }
}
</script>
