<template>
    <div class="square " :aria-disabled="true"
         :class="{'square-active': eventClick(), 'no-hover': isCantHover}"
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
      isCantHover: Boolean,
      squareNumber: Number,
      eventClickNumber: Number,
      soundDelay: Number
    },

    data() {
      return {
      }
    },
    methods: {
      clickHandler() {
        this.stopClick()
        this.soundPlay()
        setTimeout(this.stopClick, this.soundDelay)
        this.$emit('playerClick', this.squareNumber)
      },
      soundPlay() {
        this.$refs.audio.play()
      },
      stopClick() {
        this.$refs.audio.load()
      },
      eventClick() {
        if(this.eventClickNumber === this.squareNumber) {
          this.soundPlay()
          setTimeout(this.stopClick, this.soundDelay)
          return true
        }
      }
    },
    computed: {
      soundUrl () {
        return require('../assets/sound/'+this.sound+'.mp3')
      },
      // eventClick() {
      //   if(this.eventClickNumber === this.squareNumber) {
      //     this.soundPlay()
      //     setTimeout(tick, 2000)
      //     return true
      //   }
      // }
    },
  }
</script>

<style scoped lang="scss">
.square {
    width: 200px;
    height: 200px;
    border: 2px solid white;
    border-radius: 50% 0 0 0;

    opacity: .6;

    &:hover:not(.no-hover) {
        border: 2px solid black;
        opacity: 1;
    }
}

.square-active {
    opacity: 1;
}


</style>
