<template>
   <!-- <MyComp></MyComp> -->
   <!-- <ComponentOne></ComponentOne> -->
   <LessonTwo></LessonTwo>
</template>

<script>

// import MyComp from './components/MyComp.vue';
// import ComponentOne from './components/ComponentOne.vue';
import LessonTwo from './components/LessonTwo.vue';

export default {
    name: 'App',
    components: {
        // ComponentOne,
        // MyComp,
        LessonTwo,
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

    input {
        padding: 10px 15px;
        border: 2px solid #000;
        border-radius: 10px;
        margin: 5px;
    }
</style>
