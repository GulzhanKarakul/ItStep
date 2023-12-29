let CostCalculation = {
    // data, methods, computed - зарезервированные имена
    data: () => {
        return {
            materials: {'laminate': 500, 'woodFloor': 1000, 'tile': 1200,},
            imgLinks: {
                'laminate': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYo6Ya1cTJsr6D0N1AB6B2kX5vtLnxJ8heBw&usqp=CAU',
                'woodFloor': 'https://www.floorsave.co.uk/media/magefan_blog/2014/06/images.jpg', 
                'tile': 'https://assets-news.housing.com/news/wp-content/uploads/2022/03/16195548/21-small-bathroom-tiles-design.jpg'
                },
            width: '',
            length: '',
            selected: 'laminate',
        }
    },
    mounted() {
        //
    },
    // Методы которые можно использовать 
    methods: {

    },
    // в computed можно обозначать переменные, которые вычисляются по ходу работы вычисляя из чего либо
    computed: {
        total: function() {
            let cost = this.materials[this.selected];
            let totalCost = this.width * this.length * cost;
            if(!isNaN(totalCost)){
                return  `${totalCost} тг`;
            } else return 'Вы ввели неправильные данные!';
        },
        // img_url: function() {
        //     return this.imgLinks[this.selected];
        // },
        imageStyle() {
            return {
                backgroundImage: `url(${this.imgLinks[this.selected]})`,
                backgroundRepeat: 'repeat',
                width: `100%`,
                height: `100px`,
            };
        },
    }
} 

Vue.createApp(CostCalculation).mount("#root");