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
                  :soundDelay="soundDelay"
                  :isCantHover="isLose || !isPlayerAnswer"
                  @playerClick="playerClick">
      </GameSquare>
    </div>

    <button class="game__start_btn" @click="gamePlay">Start</button>
  </div>
</template>

<script>
import GameSquare from '../components/GameSquare';

export default {
  name: 'Home',
  data() {
    return {
      numRound: 1,
      roundDelay: 1000,
      arrClicks: [4, 3, 3],

      // playerClicks: [],
      playerAnswerIndex: 0,
      isPlayerAnswer: false,
      isLose: false,

      eventClickNumber: 0,
      squaresConfig: [
        {
          color: '#FF5643',
          rotate: 0,
          sound: '1'
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
    setShineSquare(square) {
      this.eventClickNumber = square
    },
    clearShineSquare() {
      this.eventClickNumber = 0
    },
    gameRound() {
      if(!this.isLose) {
        this.generateClick()
        const square = this.getNextSquare()

        const tick = () => {
          const squareValue = square.next()
          // console.log( test.next())
          console.log('tick', squareValue)

          if(!squareValue.done) {
            setTimeout(this.clearShineSquare, this.soundDelay)
            timerId = setTimeout(tick, this.roundDelay)
            this.setShineSquare(squareValue.value)
          } else {
            console.log('ПРоверка')
            this.isPlayerAnswer = true
          }
        }

        let timerId = setTimeout(tick, this.roundDelay)
      }
    },
    gamePlay() {
      this.isLose = false
      this.gameRound()
    },
    playerClick(squareNumber) {
      console.log('squareNumber', squareNumber)

      if(this.isPlayerAnswer) {
        console.log('playerAnswerIndex', this.playerAnswerIndex)
        console.log('this.arrClicks.length', this.arrClicks.length)

        if(this.playerAnswerIndex < this.arrClicks.length - 1) {
          const answer = this.arrClicks[this.playerAnswerIndex] === squareNumber
          if(!answer) {
            console.log('You lose')
            this.isLose = true
          }
          this.playerAnswerIndex++
          console.log(answer)
        } else if (this.playerAnswerIndex === this.arrClicks.length - 1) {
          this.isPlayerAnswer = false
          this.playerAnswerIndex = 0

          this.gameRound()
        }
      }
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
  computed: {
    soundDelay() {
      return this.roundDelay - 100
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
