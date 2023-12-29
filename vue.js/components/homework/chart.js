Vue.component('my-bar-chart', {
  extends: VueChartJs.Bar,
  props: ['barData', 'chartOptions'],
  data() {
    return {
      localBarData: this.barData
    };
  },
  mounted() {
    this.renderChart(this.localBarData, this.chartOptions);
  },
  watch: {
    barData: function(newData) {
      this.localBarData = newData;
      this.renderChart(this.localBarData, this.chartOptions);
    }
  }
});


let va = new Vue({
  el: "#root",
  data() {
    return {
      ChartConfig: {
        labels: ['one', 'two', 'three', 'four'],
        datasets: [
          {
            data: [1, 1.5, 2, 2.5],
            backgroundColor: '#3498db',
            borderColor: 'rgba(136,136,136,0.5)',
            label: 'Ваша Диаграмма!',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      currentDiv: 'bar',
    };
  },
    methods: {
        showDiv(divName) {
            this.currentDiv = divName;
        },
        nameChart(ev) {
            let chartName = ev.target.value;
            this.ChartConfig.datasets[0].label = chartName;
            this.ChartConfig = Object.assign({}, this.ChartConfig);
        },
        changeValue(event, index) {
            const newValue = parseFloat(event.target.value);
            this.ChartConfig.datasets[0].data[index] = newValue;
            console.log(this.ChartConfig.datasets[0].data)
            this.ChartConfig = Object.assign({}, this.ChartConfig);
        },
        changeLabel(event, index) {
            const newLabel = event.target.value;
            this.ChartConfig.labels[index] = newLabel;
            console.log(this.ChartConfig.labels)
            this.ChartConfig = Object.assign({}, this.ChartConfig);
        },
    },
});