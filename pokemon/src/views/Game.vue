<template>
<div class="el-container" >
  <el-header>
    <el-progress style="width:600px" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
  </el-header>
  <el-main>
    <img :src=pokemon.src alt="">
  </el-main>
  <div style="height: 100px; width:200px;">
    <h1 v-show="imgIsShow" style="position: absolute;">I am {{correctAnswer}}</h1>
  </div>
  <el-footer>
    <el-radio-group v-model="radio" @change = 'showName(radio)'>
      <el-radio :label=pokemon.option[0]>{{ pokemon.option[0] }}</el-radio>
      <el-radio :label=pokemon.option[1]>{{ pokemon.option[1] }}</el-radio>
      <el-radio :label=pokemon.option[2]>{{ pokemon.option[2] }}</el-radio>
      <el-radio :label=pokemon.option[3]>{{ pokemon.option[3] }}</el-radio>
    </el-radio-group>
  </el-footer>
</div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";
let pokemon = {}
let imgIsShow
let correctAnswer = ''
export default {
  name: "Game",
  components: {PokemonCard},
  data(){
    return{
      pokemon,
      imgIsShow,
      radio:'111',
      correctAnswer,

    }
  },
  methods:{
    creatId(){
     let num = Math.round(Math.random()*890)
      this.pokemon.id = num
      this.pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
      this.pokemon.option = [
        JSON.parse(localStorage.getItem(Math.round(Math.random()*890).toString())).name,
        JSON.parse(localStorage.getItem(Math.round(Math.random()*890).toString())).name,
        JSON.parse(localStorage.getItem(Math.round(Math.random()*890).toString())).name,
        JSON.parse(localStorage.getItem(Math.round(Math.random()*890).toString())).name]
      this.pokemon.option[Math.floor(Math.random()*4)] = JSON.parse(localStorage.getItem(num.toString())).name
      this.correctAnswer = JSON.parse(localStorage.getItem(num.toString())).name


    },
    showName(radio){
      console.log('9')
      if (radio==this.correctAnswer){
        console.log('99')
        this.imgIsShow = true
      }
      else  this.imgIsShow = false
      console.log(this.imgIsShow)

    },

  },
  beforeMount(){
    this.creatId()

  },
}

</script>

<style scoped>
.el-container{
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img{
  width: 500px;
}
</style>
