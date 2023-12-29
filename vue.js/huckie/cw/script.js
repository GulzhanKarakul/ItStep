let va = Vue.createApp( {
    data: () => {
        return {
            name: ''
        }
    },
    created() {
        console.log('Created');
    },
    mounted() {
        console.log('mounted');
        // document.querySelector('#root').append('hello!');
        setTimeout(() => {
            // this.name = 'new Text'
        }, 1000);
    },

    methods: {
        log(event){
            console.log(event)
        }
    },
})

va.directive('new-dir', {
    updated(el, binding) {
        if(binding.modifers.lazy){
            el.classList.add('cont');
        }
        console.log(binding)
        console.log(arg)
        console.log('Element has been updated.');
    },
});

va.mount("#root");


// Vue.createApp( {
//     data: () => {
//         return {

//         }
//     },
//     mounted() {

//     },
//     methods: {

//     },
// } ).mount("#root")