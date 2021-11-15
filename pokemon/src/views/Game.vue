<template>
<div class="el-container" >
  <el-header>
    <el-progress style="width:600px" :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
  </el-header>
  <el-main>
    <img :src=gameId>
  </el-main>
</div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard";
export default {
  name: "Game",
  components: {PokemonCard},
  data(){
    return{
      gameId:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${2}.png`
    }
  }
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
