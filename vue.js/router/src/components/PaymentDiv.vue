<template>
    <div>
        <h3>К оплате: {{ total }}</h3>

        <form action="">
            <input type="text" value=" Karakul Gulzhan">
            <input type="text" value="0000 1111 2222 3333">
            <input type="text" value="Код cvv код ">

            <input @click="payment" type="submit" value="Оплатить">
        </form>

        <router-link to="/">Вернутся в Магазин</router-link>
    </div>
</template>

<script>


export default {
    name: 'PaymentDiv',
    props: {
        items: Array,
        addedItems: Array,
    },
    data() {
        return {
            
        }
    },
    methods: {
        payment() {
            this.$emit('payment-confirmed');
        },
    },
    computed: {
        total: function(){
            let total = 0;
            for(let i of this.addedItems){
                total += parseInt(this.items[i].price);
            }
            return total;
        }
    },
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