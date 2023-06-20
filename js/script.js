//check console log
console.log('ok js');
console.log('ok vue', Vue);

const app = Vue.createApp({
    data(){
        return{
            goals :[
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

    methods:{
        isTrue(target){
            if(this.goals[target].done === 'false') this.goals[target].done ='true';
            else this.goals[target].done = 'false';
        }   
    }
})

app.mount('#root');