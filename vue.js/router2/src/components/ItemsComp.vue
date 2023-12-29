<template>
    <table>
        <div  v-if="!id">
            <tr v-for="item in articles" 
                        :key="item.id"
                        >
                <router-link class="nav-link active" aria-current="page" :to="'/items/' + item.id">
                    <td>Название: {{ item.title }}</td>
                    <td>Описание:{{ item.descr }}</td>
                    <td>
                        <img :src="item.imgSrc" />
                    </td>
                    <td>Цена: {{ item.price }}</td>
                </router-link>
            </tr>
         
        </div>
        <div  v-if="id">
                <tr >
                    <td>Название: {{ articles[id].title }}</td>
                    <td>Описание:{{ articles[id].descr }}</td>
                    <!-- <td>
                        <img :src="articles[id].imgSrc" />
                    </td> -->
                    <td>Цена: {{ articles[id].price }}</td>
                </tr>
        </div>
    </table>
</template>
  
<script>
export default {
    name: "ItemsComp",
    props: {
    },
    data() {
        return {
            id: this.$route.params.id,
            articles: [
                {
                    id: 0,
                    title: "Работа с классами и стилями",
                    descr: 'Часто возникает необходимость динамически изменять CSS-классы и inline-стили элементов в зависимости от состояния приложения. Поскольку и то и другое атрибуты, мы можем использовать v-bind: необходимо лишь вычислить итоговую строку при помощи выражения. Впрочем, заниматься конкатенацией строк неудобно, это может привести к ошибкам. К счастью, Vue предоставляет дополнительные возможности директивы v-bind для работы с class и style. Эти атрибуты кроме строковых значений могут принимать массивы или объекты.',
                    imgSrc: require('../assets/logo.png'),
                },
                {
                    id: 1,
                    title: "Использование объектов",
                    descr: 'Запись выше означает, что наличие класса active будет определяться истинностью параметра isActive.Таким образом можно управлять несколькими классами, добавляя в объект другие поля. Кроме того, v-bind:class можно использовать совместно с обычным атрибутом class:',
                    imgSrc: require('../assets/logo.png'),
                },
                {
                    id: 2,
                    title: "Использование массивов",
                    descr: 'В v-bind:class можно передать и массив: <div v-bind:class="[activeClass, errorClass]"></div>. В этом случае errorClass будет применён к элементу всегда, а activeClass — только в случае истинности isActive.Однако, такая запись становится слегка громоздкой, особенно если есть несколько классов, задаваемых по условию. Но можно использовать и смешанный синтаксис:',
                    imgSrc: require("../assets/logo.png"),
                },
            ]
        }
    },
    watch: {
        $route(to, from) {
            if(to.params.id != from.params.id){
                this.id = to.params.id;
            }
        }
    }
};
</script>
  

<style scoped>

img{
    width: 300px;
    height: 200px;
}

table {
    width: 100%; 
    border-collapse: collapse; 
    font-family: Arial, sans-serif; 
}

th {
    background-color: #f2f2f2; 
    font-weight: bold; 
    text-align: left;
    padding: 10px;
    border-bottom: 2px solid #ccc;
}

td {
    padding: 10px; 
    border-bottom: 1px solid #ccc; 
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}

</style>