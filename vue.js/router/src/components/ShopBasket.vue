<template>
    <div>
        <h2>Ваша Корзина</h2>
        <table>
            <tr v-for= "(id, index) in addedItems" :key="index">
                <td>{{ items[id].name }} </td>
                <td>{{ items[id].price }}</td>
            </tr>
            <tr>
                <td>Итого:</td>
                <td>{{ total }}</td>
            </tr>
        </table>

        <router-link to="/payment">Перейти к оплате</router-link>
    </div>
</template>

<script>


export default {
    name: 'Shop-Busket',
    props: {
        items: Array,
        addedItems: Array,
    },
    data() {
        return {
            
        }
    },
    computed: {
        total: function(){
            let total = 0;
            for(let i of this.addedItems){
                total += parseInt(this.items[i].price);
            }
            return total;
        }
    }
}

</script>

<style scoped>

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