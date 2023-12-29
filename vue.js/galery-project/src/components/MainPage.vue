<template>
    <h1>Добро пожаловать {{ user.userInfo.name }}!</h1>
    <div class="cont">
        <div class="img">
            <img :src="user.userInfo.avatar" alt="">
        </div>

        <div class="info">
            <h2>{{ user.userInfo.lastName }}  {{ user.userInfo.name }}</h2>
            <p>Номер: {{ user.userInfo.number }}</p>
            <p>Дата Рождения: {{ user.userInfo.birthDate }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainPage',
    components: {  },
    props: {
        user: Object,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
       
    },
}
</script>

<style scoped>
h1{
    background-color: #14387c;
    color: #fff;
    margin: 30px 0 15px;
}

.cont{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

.img{
    width: 300px;
    height: 400px;
}

.img  img{
    width: 100%;
    border-radius: 15px;
}

.info{
    width: 700px;
    text-align: left;
}
</style>