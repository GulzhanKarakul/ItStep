let app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskName: '',
        }
    },
    methods: {
        submitForm(){
            this.tasks.push(this.taskName);
            this.taskName = '';
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
    },
});
app.mount('#root');

app.component('element', {
    props: ['name', 'index'],
    data(){
        return {
            value: 'Не выполнено!',
            done: false,
        }
    },
    template: `
        <li >
            <input type="checkbox" class="check"  @change="changeValue">&nbsp;&nbsp;
            <span>{{ name}} - {{ value }}</span>
            <button class="btn" @click.prevent="deleteLi(index)">Удалить</button>
        </li>
    `,
    methods: {
        changeValue(){
            this.done = !this.done;

            if(this.done) this.value = "Выполнено!";
            else this.value = "Не выполнено!";
        },
        deleteLi(index){
            this.$emit('delete', index);
        }
    }
})