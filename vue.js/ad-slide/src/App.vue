<template>
    <div id="app" v-for="(slide, index) in data" :key="index">
        <SlideComponent
        @go-back="previousSlide" 
        @go-forward="nextSlide" 
        v-if="slide.show"  
        :header="slide.header" 
        :text="slide.text" 
        :slideIndex="index"
        ></SlideComponent>
    </div>
</template>

<script>
import SlideComponent from './components/Slide.vue'

export default {
    name: 'App',
    components: {
        SlideComponent,
    },
    data() {
        return {
            data: [
                {
                    header: 'Slide #One',
                    text: 'Используйте директиву v-for для отрисовки списка элементов на основе массива данных. У директивы v-for особый синтаксис записи: item in items, где items — исходный массив, а item — ссылка на текущий элемент массива:',
                    show: true,
                },
                {
                    header: 'Slide #Two',
                    text: 'Внутри блока v-for нам доступны свойства из области видимости родителя. У v-for также есть второй опциональный параметр с индексом текущего элемента. Вместо in разделителем можно использовать of, как в итераторах JavaScript:',
                    show: false,
                },
                {
                    header: 'Slide #Three',
                    text: 'v-for можно также использовать для итерирования по свойствам объекта. Можно использовать второй аргумент для получения имени свойства (ключа объекта). При итерировании по объекту порядок обхода такой же как и в Object.keys(). Его консистентность не гарантируется при использовании различных реализаций движков JavaScript.',
                    show: false,
                }
            ],
        }
    },
    methods: {
        previousSlide(index) {
            this.data[index].show = false;
            if(index === 0) {
                let preIndex = this.data.length - 1;
                this.data[preIndex].show = true;
            } else {
                this.data[index - 1].show = true;
            }
        },
        nextSlide(index) {
            this.data[index].show = false;
            if(index === (this.data.length - 1)) this.data[0].show = true;
            else this.data[index + 1].show = true;
        }
    }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center; /* Выравнивание элементов по центру по горизонтали */
    width: 100%;
}
</style>
