let app = Vue.createApp({
    data() {
        return {
            records: [],
            newRecord: '',
        }
    },
    methods: {
        createNewPost() {
            this.records.push(this.newRecord);
            this.newRecord = '';
        },
    },
});
app.mount('#root');

app.component('element', {
    props: ['text', 'index'],
    data() {
        return {
            // text: '',
        }
    },
    template: `
        <div class=post>
            <p>{{text}}</p>
        </div>
    `,
    methods: {

    }
})