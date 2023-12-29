<template>
    <div class="slide">
        <h1>{{ header }}</h1>

        <p>{{ text }}</p>
    </div>

    <div class="panel">
        <button id="btn" @click="previousSlide">Назад</button>
        <button id="btn" @click="nextSlide">Вперед</button>
    </div>
</template>

<script>
export default {
    name: 'SlideComponent',
    // Объявляем события, которые компонент может генерировать
    emits: ['go-back', 'go-forward'],
    props: {
        header: String,
        text: String,
        slideIndex: Number,
    },
    methods: {
        // Методы компонента, которые могут генерировать события
        previousSlide(){
            this.$emit('go-back', this.slideIndex);
        },
        nextSlide() {
            this.$emit('go-forward', this.slideIndex);
        },
    }
}

</script>

<style scoped>

.slide {
    width: 1000px;
    height: 400px;
    margin: 10px auto;
    background: #98b3f7;
    border: 2px solid #4163b7;
    border-radius: 10px;
    /* padding: 20px; */
}

.panel {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

#btn {
    border: 2px solid #4163b7;
    border-radius: 10px;
    margin-top: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight:600;
    color:#2c3e50;
    font-size: 14px;
    padding: 10px;
    background-color: #7ea0f7;
}
</style>