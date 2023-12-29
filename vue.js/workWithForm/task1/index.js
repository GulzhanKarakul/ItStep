let BasicForm = {
    // data, methods, computed - зарезервированные имена
    data: () => {
        return {
            show: true,
            name: '',
            lastName: '',
            birthDate: '',
            email: '',
        }
    },
    // Методы которые можно использовать 
    methods: {
        submitForm(){
            if(this.name == '' || this.lastName == ''
               || this.birthDate == '' || this.email == ''){
                return alert(' Заполните форму полностью! ')
            } else {
                
                if(this.age > 18){
                    this.show = false;
                } else {
                    return alert('К сожалению Вам нет 18 лет!')
                }
            }
        }
    },
    // в computed можно обозначать переменные, которые вычисляются по ходу работы вычисляя из чего либо
    computed: {
        //
        age: function(){
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();

            return currentYear - this.birthDate;
        }
    }
} 

Vue.createApp(BasicForm).mount("#root");