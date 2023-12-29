<template>
    <div class="item">
        <img :src="item.imageSrc" />
        <div class="info">
            <h2>{{ item.name }}</h2>
            <p class="price">{{ item.price }}</p>
            <p class="description">{{ item.description }}</p>
        </div>
  
        <button class="btn red" @click="sendData" :id="item.id">
            Купить
        </button>
    </div>
</template>
  
<script>
export default {
    name: "ItemView",
    props: {
        item: Object,
    },
    methods: {
        sendData() {
            this.$emit("data-received", this.item.id); // Используем item.id для передачи данных
        },
    },
};
</script>
  

<style scoped>
*{
    font-style: italic;
    user-select: none;
}

.item{
    margin: 0 auto;
    width: 400px;
    background: #cfd8ef;
    text-align: center;
    margin: 20px;
    transition: all 500ms ease-out;
}

h1 {
    text-align: center;
    color: #2d40a2
}

.price {
    font-size: 20px;
}

.description {
    padding: 10px 20px;
    cursor: pointer;
    text-align: left;
}

ol {
    list-style: none;
    font-size: 18px;
    font-weight: 700;
}

.btn {
    border:none;
    margin: 20px 30px;
    text-transform:uppercase;
    font-weight:600;
    color:#fff;
    font-size: 17px;
    padding: 10px;
    background-color: #72c6bb;
}

.red {
    background-color: #e36557;
    color:#000;
}

.item img {
    width: 85%;
    height: 300px;
    margin: 10px;
}

</style>