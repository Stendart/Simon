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
                  :isCantActive="isLose || !isPlayerAnswer"
                  @playerClick="playerClick">
      </GameSquare>
    </div>
    <div class="game__round"> <p>Номер раунда: {{roundNum}}</p>
      <button class="game__start_btn" @click="gamePlay">Start</button>
    </div>

  </div>
</template>

<script>
import GameSquare from '../components/GameSquare';

export default {
  name: 'Game',
  data() {
    return {
      numRound: 1,
      roundDelay: 1500,
      arrClicks: [4, 3, 3],

      playerAnswerIndex: 0,
      isPlayerAnswer: false,
      isLose: false,

      roundNum: 1,

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

          if(!squareValue.done) {
            setTimeout(this.clearShineSquare, this.soundDelay)
            timerId = setTimeout(tick, this.roundDelay)
            this.setShineSquare(squareValue.value)
          } else {
            console.log('Проверка')
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

      if(this.isPlayerAnswer) {
        if(this.playerAnswerIndex < this.arrClicks.length - 1) {
          const answer = this.arrClicks[this.playerAnswerIndex] === squareNumber
          if(!answer) {
            console.log('You lose')
            alert('You lose')
            this.isLose = true
          }
          this.playerAnswerIndex++

        } else if (this.playerAnswerIndex === this.arrClicks.length - 1) {
          this.isPlayerAnswer = false
          this.playerAnswerIndex = 0

          this.roundNum++
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
  created() {
    this.roundDelay = this.$store.getters.getDelay
    console.log('this.roundDelay', this.roundDelay)
  },
  components: {
    GameSquare
  }
}
</script>
<style>
  .home {
    position: relative;
  }
  .game__field {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .game__start_btn {
    width: 100px;
    height: 50px;
  }
  .game__round {
    position: absolute;
    top: 20%;
    left: 60%;

    font-size: 24px;
  }
</style>
