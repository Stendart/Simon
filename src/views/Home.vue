<template>
  <div class="home">
    <GameSquare v-for="square in squaresConfig"
                :color="square.color"
                :key="square.color"
                :rotation="square.rotate"
                :sound="square.sound">
    </GameSquare>
  </div>
</template>

<script>
import GameSquare from '../components/GameSquare';

export default {
  name: 'Home',
  data() {
    return {
      squaresConfig: [
        {
          color: '#FF5643',
          rotate: 0,
          sound: '1' //'../assets/sound/1.mp3'
        },
        {
          color: '#1e90ff',
          rotate: 90,
          sound: '2'
        },
        {
          color: '#FEEF33',
          rotate: 270,
          sound: '3'
        },
        {
          color: '#BEDE15',
          rotate: 180,
          sound: '4'
        },
      ],
      colors: ['#FF5643', '#1e90ff', '#FEEF33', '#BEDE15'],
    }
  },
  components: {
    GameSquare
  }
}
</script>
<style>
  .home {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
