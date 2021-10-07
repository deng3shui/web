
const app = new Vue({
    el: '#app',
    data: {
        i:"0",
        score:"0",
        answer:"",
        quizData : [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
            },

        ],
    },
    methods:{
        next:function (){

            if(this.i<this.quizData.length-1){
                if(this.answer==="")alert("请点击答案")
                else{
                    if(this.answer===this.quizData[this.i].correct){
                        this.score++;
                    }
                    this.answer="";
                    this.i++;
                }
            }
            else alert("请点击提交")

        },
        submit() {
            this.$refs.Option.style.display="none";
            this.$refs.H1.style.display="none";
            this.$refs.Con.style.display="flex";

        }
    }
})
