<template>
<h1>Общий траты: {{ allSpending }}</h1>

<form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Сумма расходов:</label>
    <input 
    type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="5000тг"
    v-model="summ"
    >
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Дата</label>
    <input 
    type="date" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="5000тг"
    v-model="date"
    >
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Категория</label>
    <select multiple class="form-control" id="exampleFormControlSelect2" v-model="type">
      <option value="food">Еда</option>
      <option value="cloth">Одежда</option>
      <option value="entertainment">Развлечения</option>
      <option value="technique">Техника</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Комментарий</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="comment"></textarea>
  </div>
  <div class="form-group">
    <input 
    type="submit" 
    class="form-control" 
    id="exampleFormControlInput1" 
    @click="addPurchase"
    value="Внести">
  </div>
</form>
</template>
  
<script>
export default {
    name: "PurchasePage",
    emits: ['add-purchase', 'add-income'],
    props: {
        statArr: Array,
        purchasesArr: Array,
        incomeArr: Array,
        allIncome: Number,
        allSpending: Number,
    },
    data() {
        return {
            summ: 0,
            date: null,
            type: '',
            comment: '',
        }
    },
    methods: {
        addPurchase() {
            let index = this.purchasesArr.length;
            let curPurc = {id: 0, summ: this.summ, date: this.date, type: this.type[0], comment: this.comment}
            curPurc.id = index;
            console.log(curPurc);

            this.$emit('add-purchase', curPurc);
        },
    },
    watch: {

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