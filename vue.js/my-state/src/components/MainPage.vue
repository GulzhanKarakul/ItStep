<template>
    <h1>Добро пожаловать!</h1>
    <button @click="showForm" id="btn">Новый урок</button>
    <form v-if="show" class="newL">
        <label for="name">Название нового урока:</label>
        <input type="text" name="name" id="" v-model.lazy="newLesson">
        <input type="submit" @click.prevent="addLesson" value="Добавить">
    </form>


    <ul class="list-group list-group-flush">
        <router-link class="nav-link" v-for="l of lessons" :to="'/lesson' + l.id" :key="l.id">
            <li class="list-group-item">
                {{ l.title }}
            </li>
        </router-link>
    </ul>
</template>
  
<script>


export default {
    name: "MainPage",
    emits: ['add-lesson', 'add-group', 'add-grade'],
    props: {
        lessons: Array,
        students: Array,
    },
    data() {
        return {
            newLesson: '',
            show: false,
        }
    },
    methods: {
        showForm() {
            this.show = !this.show;
        },
        addLesson(){
            console.log(this.newLesson)
            this.$emit('add-lesson', this.newLesson);
        }
    },
};
</script>
  

<style scoped>
</style>