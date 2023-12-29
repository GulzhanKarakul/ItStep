// Тимофей, у меня вопрос касательно удаления!
// Попробуйте отметить одну лишку как выполнено и потом удалить,  почему то
// значение checked от checkbox передается след лишке!
// При этом если я если убираю checked то у меня меняется значение на ВЫполено!

let TasksList = {
    // data, methods, computed - зарезервированные имена
    data: () => {
        return {
            tasks: [],
            taskName: '',
        }
    },
    mounted() {
        
    },
    // Методы которые можно использовать 
    methods: {
        submitForm(){
            let newTask = {};
            newTask['taskName'] = this.taskName;
            newTask['value'] = "Не выполнено!";

            this.tasks.push(newTask);
            this.taskName = '';
        },
        changeValue(index) {
            this.tasks[index].done = !this.tasks[index].done; 
        
            if (this.tasks[index].done) {
                this.tasks[index].value = "Выполнено!";
            } else {
                this.tasks[index].value = "Не выполнено!";
            }
        },
        deleteLi(index) {
            this.tasks.splice(index, 1);
        },
    },
    // в computed можно обозначать переменные, которые вычисляются по ходу работы вычисляя из чего либо
    computed: {

    }
} 

Vue.createApp(TasksList).mount("#root");