var app = new Vue({
    el:"#app",
    data:{
        Joke:""
    }
    ,
    methods:{
        GetJoke:function (){
            let that=this
            axios.get("https://autumnfish.cn/api/joke").then(
                function (response){
                    that.Joke=response.data
                    console.log(response.data)
                },
                function (err){
                    this.Joke="出错啦"
                })
        }
    }
})
