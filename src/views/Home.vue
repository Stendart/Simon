<template>
  <div class="home">
    <div class="game__field">
      <GameSquare v-for="(square, index) in squaresConfig"
                  :color="square.color"
                  :key="square.color"
                  :rotation="square.rotate"
                  :sound="square.sound"
                  :squareNumber="index+1"
                  :eventClickNumber="eventClickNumber"
                  :soundDelay="soundDelay">
      </GameSquare>
    </div>

    <button class="game__start_btn" @click="gameRound">Start</button>
  </div>
</template>

<script>
import GameSquare from '../components/GameSquare';

export default {
  name: 'Home',
  data() {
    return {
      numRound: 1,
      soundDelay: 1000,
      arrClicks: [],
      eventClickNumber: 0,
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
    }
  },
  methods: {
    generateClick() {
      const randomNum = Math.random() * (4 - 1) + 1
      const numPart = Math.round(randomNum)
      this.arrClicks.push(numPart)
    },
    playRound(square) {
      this.eventClickNumber = square
    },
    interval(del) {

    },
    gameRound() {
      this.generateClick()
      const square = this.getNextSquare()

      const tick = () => {
        const squareValue = square.next()
        // console.log( test.next())
        console.log('tick', squareValue)

        if(!squareValue.done) {
          timerId = setTimeout(tick, 2000)
          this.playRound(squareValue.value)
        }
      }

      let timerId = setTimeout( tick, 2000)
    },
    getNextSquare: function* () {
      // let index = 0;
      // while(index <= 2) // при достижении 2, done в yield станет true, а value undefined;
      //   yield index++;

      for(let i = 0; i < this.arrClicks.length; i++) {
        yield this.arrClicks[i]
      }
    }
  },
  components: {
    GameSquare
  }
}
</script>
<style>
  .game__field {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .game__start_btn {
    width: 100px;
    height: 50px;
  }
</style>
