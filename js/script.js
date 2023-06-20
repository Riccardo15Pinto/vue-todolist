//check console log
console.log('ok js');
console.log('ok vue', Vue);

const app = Vue.createApp({
    data(){
        return{
            newGoals: '',
            listGoals :[
            {
                text : 'Imposta la sveglia',
                done : false
            },
            {
                text : 'Svegliati',
                done : false
            },
            {
                text : 'Lavati',
                done : false
            },
            {
                text : 'Accendi il Pc',
                done : false
            },
            {
                text : 'Segui la lezione',
                done : false
            },
            {
                text : 'Fai l\'esercizio',
                done : false
            },
            {
                text : 'Ripeti',
                done : false
            }
            ]
        }
    },

    methods:{
        isTrue(target){
            this.listGoals[target].done = !this.listGoals[target].done
        },  

        deleteGoals(index){
           this.listGoals.splice(index, 1);
        },

        addnewGoals(){
            if(this.newGoals.length > 0){
                this.listGoals.push({text : this.newGoals , done: false});
            }

            this.newGoals = '';
        }

    }
})

app.mount('#root');