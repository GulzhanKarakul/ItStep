let Count = {
    // data, methods, computed - зарезервированные имена
    data: () => {
        return {
            price: 100,
            count: 4,
            input1: '',
        }
    },
    // Методы которые можно использовать 
    methods: {
        // total(){
        //     return this.price*this.count
        // }
    },
    // в computed можно обозначать переменные, которые вычисляются по ходу работы вычисляя из чего либо
    computed: {
        //
        total: function(){
            return this.price*this.count
        }
    }
} 

Vue.createApp(Count).mount("#root")