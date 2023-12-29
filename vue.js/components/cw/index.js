
let app = Vue.createApp({
    data() {
        return {
            items: 'Это текст из VApp',
            names: ["john", "Petr", "Anna"]
        }
    },
    methods: {
        catchNewData(data){
            console.log(data);
        }

    },
});

app.component('element', {
    props: ['name', 'index'],
    template:`
        <li style="color: red; font-size:20px;">
        {{index+1}}: {{name}}
        </li>

        <script>

        </script>
    `,
});

app.component('my-comp', {
    template: `
        <div>
            <h1>Счетчик: {{counter}}</h1>
            <button @click="count">+1</button>
        </div>`,
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        count() {
            this.counter++;
        }
    },
});

app.component('global-text', {
    props: ['text'],
    template: `
    <p>{{text}}</p>
    `,
});

app.component('event-test', {
    data() {
        return {
            items: 'Это текст из Componet',
        }
    },
    template: `
    <button @click="doSomething">Click</button>
    `,
    methods: {
        doSomething(){
            this.$emit('something-happend', this.items);
        }
    }
})

app.mount('#root');