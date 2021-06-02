<template>
    <div class="square" :class="{'square-active' : rotation === 0}"
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
      }
    },
    data() {
      return {
        test: ''
      }
    },
    methods: {
      clickHandler() {
        console.log(this.$refs.audio)
        this.$refs.audio.play()

      }
    },
    computed: {
      soundUrl () {
        console.log('hana')
        return require('../assets/sound/'+this.sound+'.mp3')//require(this.sound)
        // The path could be '../assets/img.png', etc., which depends on where your vue file is
      }
    },
    // mounted() {
    //   console.log('sound =', this.sound)
    //   this.test = require(this.sound) //'../assets/sound/1.mp3'
    // }
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
