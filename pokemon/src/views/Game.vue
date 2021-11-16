<template>
<div class="el-container" >
  <el-header>
    <el-progress style="width:600px" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
  </el-header>
  <el-main>
    <h1>g{{gameId}}</h1>
    <img :src=gameId>
  </el-main>
  <el-foot>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
      <el-radio :label="12">备选项</el-radio>
    </el-radio-group>
  </el-foot>
</div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";
let gameId = ''
export default {
  name: "Game",
  components: {PokemonCard},
  data(){
    return{
      gameId,
      radio:0,
      a:Math.round(Math.random()*890)

    }
  },
  methods:{
    creatId(){
     let num = Math.round(Math.random()*890)
      this.gameId = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
      console.log(this.gameId)
    },

  },
  beforeMount(){
    this.creatId()
    console.log('99')
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
