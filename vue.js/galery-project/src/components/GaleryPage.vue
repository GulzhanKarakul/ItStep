<template>
    <h1>Galery</h1>

    <div v-if="id === undefined || id === null" class="cont">

        <ol class="list">
            <li v-for="(imgSource, key) of user.userGalery" :key="key">
                <router-link class="nav-link active" :to="'/galery'+key">
                    <img :src="imgSource" alt="">
                </router-link> 
            </li>
        </ol>
    </div>
    <div v-if="id" class="slide">
        <div class="img">
            <img :src="user.userGalery[id]" alt="">
        </div>
        <div class="panel">
            <button id="btn" @click="previousSlide">Назад</button>
            <button id="btn" @click="nextSlide">Вперед</button>
    </div>
    </div>
</template>

<script>

export default {
    name: 'GaleryPage',
    components: {  },
    props: {
        user: Object,
    },
    data() {
        return {
            id: this.$route.params.id,

        }
    },
    methods: {
        previousSlide() {
            if (this.id == 0) {
                this.id = this.user.userGalery.length - 1;
            } else {
                this.id = parseInt(this.id) - 1;
            }
            this.$router.push('/galery' + this.id);
        },
        nextSlide() {
            if (this.id == this.user.userGalery.length - 1) {
                this.id = 0;
            } else {
                this.id = parseInt(this.id) + 1;
            }
            this.$router.push('/galery' + this.id);
        },
    },
    watch: {
        $route(to, from) {
            if(to.params.id != from.params.id){
                this.id = to.params.id;
            }
        }
    }
}
</script>

<style scoped>
.list {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    list-style: none;
    /* justify-content: space-between; */
}

.list li{
    margin: 20px;
}
.list img {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
}
.slide {
    width: 1000px;
    margin: 10px auto;
    background: #98b3f7;
    border: 2px solid #4163b7;
    border-radius: 10px;
    padding: 20px;
}
.slide img {
    width: 500px;
    height: 400px;
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