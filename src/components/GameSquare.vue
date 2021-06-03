<template>
    <div class="square" :class="{'square-active' : eventClick }"
         :style="{backgroundColor: color, transform: 'rotate(' + rotation + 'deg)'}"
         @click="clickHandler"
    >
        <audio ref="audio" :src="soundUrl"></audio>
    </div>
</template>

<script>
  export default {
    name: "GameSquare",
    props: {
      color: String,
      sound: String,
      rotation: {
        type: Number,
        default: 0
      },
      squareNumber: Number,
      eventClickNumber: Number
    },

    data() {
      return {
      }
    },
    methods: {
      clickHandler() {
        this.soundPlay()
      },
      soundPlay() {
        this.$refs.audio.play()
      }
    },
    computed: {
      soundUrl () {
        return require('../assets/sound/'+this.sound+'.mp3')
      },
      eventClick() {
        if(this.eventClickNumber === this.squareNumber) {
          this.soundPlay()
          return true
        }
      }
    },
  }
</script>

<style scoped lang="scss">
.square {
    width: 200px;
    height: 200px;
    border: 2px solid white;
    border-radius: 50% 0 0 0;

    opacity: .8;

    &:hover {
        border: 2px solid black;
        opacity: 1;
    }
}

.square-active {
    opacity: 1;
}


</style>
