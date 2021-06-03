<template>
  <div class="about">
    <h1>Выберите уровень сложности</h1>
    <label>
      <input type="radio" name="difficulty" checked value="easy" v-model="difficulty">Легко
      <input type="radio" name="difficulty" value="medium" v-model="difficulty">Средне
      <input type="radio" name="difficulty" value="hard" v-model="difficulty">Сложно
    </label>
    <button class="btn" @click="startGame">Играть</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        difficulty: 'easy'
      }
    },
    methods: {
      startGame() {
        const delay = this.difficulty === 'easy' ? 1500 : this.difficulty === 'medium' ? 1000 : 400
        this.$store.commit('setDelay', delay)
        this.$router.push('/game')
      }
    }
  }
</script>
<style>
  .btn {
    display: block;
    padding: 5px 15px;
    margin: 0 auto;

    margin-top: 30px;
  }
</style>
