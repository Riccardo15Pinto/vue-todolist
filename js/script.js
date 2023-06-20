//check console log
console.log('ok js');
console.log('ok vue', Vue);

//create app
const app = Vue.createApp({
    //data
    data(){
        return{
            //element to push in array
            newGoals: '',
            // array goals
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
    //methods
    methods:{
        //change/toogle listGoals.done to false/true
        isTrue(target){
            this.listGoals[target].done = !this.listGoals[target].done
        },  
        //delete goals from array
        deleteGoals(index){
           this.listGoals.splice(index, 1);
        },
        //push newGoals in the array
        addnewGoals(){
            if(this.newGoals.length > 0){
                this.listGoals.push({text : this.newGoals , done: false});
            }

            this.newGoals = '';
        }

    }
})
// print in html
app.mount('#root');