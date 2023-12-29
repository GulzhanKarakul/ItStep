<template>
  <h2>Общий доход: {{ allIncome }} тг</h2>
  <h2>Общий траты: {{ allSpending }} тг</h2>
  <h1>Конечный остаток:{{ total }} тг</h1>
  <div>
    <ol>
      <li v-for="purch of statArr" :key="purch.id">
        <tr>
          <td><p>Тип Трат: {{ purch.name }}</p></td>
          <td><p>Количество Покупок: {{ purch.purchNum }}</p></td>
          <td><p>Все Покупки: {{ purch.allPurchases }}</p></td>
          <td><p>Средние Траты: {{ purch.averagePurch }}</p></td>
        </tr>
      </li>
    </ol>

  </div>
</template>

<script>
// import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'StatPage',
  emits: ['add-purchase', 'add-income'],
  components: {  },
  props: {
    statArr: Array,
    purchasesArr: Array,
    incomeArr: Array,
    allIncome: Number,
    allSpending: Number,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    total: function() {
      return this.allIncome - this.allSpending;
    },
  },
}
</script>

<style scoped>
.cont {
  width: 700px;
  height: 400px;
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
