//check console log
console.log('ok js');
console.log('ok vue', Vue);

const app = Vue.createApp({
    data(){
        return{
            listGoals :[
            {
                text : 'Imposta la sveglia',
                done : 'false'
            },
            {
                text : 'Svegliati',
                done : 'false'
            },
            {
                text : 'Lavati',
                done : 'false'
            },
            {
                text : 'Accendi il Pc',
                done : 'false'
            },
            {
                text : 'Segui la lezione',
                done : 'false'
            },
            {
                text : 'Fai l\'esercizio',
                done : 'false'
            },
            {
                text : 'Ripeti',
                done : 'false'
            }
            ]
        }
    },

    computed:{
        myGoals(){
          return this.listGoals.filter( goal => goal.text && goal.done);
        }
    },

    methods:{
        isTrue(target){
            if(this.listGoals[target].done === 'false') this.listGoals[target].done ='true';
            else this.listGoals[target].done = 'false';
        },  

        deleteGoals(target){
            this.myGoals.splice(target, 1);
        }

    }
})

app.mount('#root');