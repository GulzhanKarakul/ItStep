<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary"> 
        <div class="container-fluid"> 
            <router-link class="nav-link active" to="/">Магазин</router-link> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span>
            </button> 
            <div class="collapse navbar-collapse" id="navbarNav"> 
                <ul class="navbar-nav"> 
                    <li class="nav-item"> 
                      <!-- <router-link class="nav-link active" to="/about">Go to About</router-link>  -->
                    </li> 
                    <li class="nav-item"> 
                      <router-link class="nav-link active" to="/busket">Корзина</router-link> 
                    </li> 
                </ul> 
            </div> 
        </div> 
    </nav> 
  
  
    <router-view @get-choosen-item="addItemId" @payment-confirmed="payAndCleanBusket" :items="items" :addedItems="addedItems"></router-view>
</template>

<script>

export default {
    name: 'App',
    components: {
        
    },
    data() {
        return {
            items: [
                {
                    id: 0,
                    name: "Чайник Tefal KI-700",
                    price: "29990 тг", 
                    description: "Объём - 1.7л, Мощность - 2200Вт, Материал корпуса -Стекло, Тип нагревательного элемента - Дисковый нагреватель, Высота - 30см,Ширина -21, Глубина - 21см, Вес -1.12кг",
                    imageSrc: require('./assets/chainik.jpg'),
                },
                {
                    id: 1,
                    name: 'Холодильник LG GC-B399S',
                    price:  "259990 тг",
                    description: "Количество дверей -2, Количество камер -2, Уровень шума - 36дБ, Тип управления - Механический, Хладагент - R600a, Расположение морозильной камеры - Снизу, Количество компрессоров -1, Тип компрессора - Инверторный, Годовой расход электроэнергии - 242кВт/год, Ледогенератор - Да, Высота - 172см, Ширина - 59.5см, Глубина - 68.2см, Вес - 64кг",
                    imageSrc: require('./assets/holodilnik.jpg'),
                },
                {
                    id: 2,
                    name: "Телeвизор LG 43", 
                    price: "184990тг",
                    description: 'Диагональ экрана - 43см(109 см), Разрешение экрана - 1920x1080 Full HD, Поддержка технологии "Smart TV" -Да, Технология - LED, Операционная система - webOS, Соотношение сторон - 16:9, Поддержка Wi-Fi - Да',
                    imageSrc: require('./assets/tv.jpg'),
                }
            ],
            addedItems: [],
        }
    },
    methods: {
        addItemId(data){
            this.addedItems.push(data);
            console.log(this.addedItems)
        },
        payAndCleanBusket(){
            // DO Работа с оплатой
            this.addedItems = [];
        }

    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
