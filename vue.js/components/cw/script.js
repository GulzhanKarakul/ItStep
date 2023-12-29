// Регистрируем компонент гистограммы (Bar) для использования в Vue
Vue.component('my-bar-chart', {
    // Расширяем компонент VueChartJs.Bar
    extends: VueChartJs.Bar,
    // Определяем props (параметры), которые будут передаваться компоненту
    props: ['barData', 'chartOptions'],
    // Функция, вызывающаяся после монтирования компонента в DOM
    mounted() {
      // Рендерим гистограмму, используя переданные данные и опции
      this.renderChart(this.barData, this.chartOptions);
    }
  }, {
    responsive: true,
    maintainAspectRatio: false
  });
  
  // Регистрируем компонент линейной диаграммы (Line) для использования в Vue
  Vue.component('my-line-chart', {
    // Расширяем компонент VueChartJs.Line
    extends: VueChartJs.Line,
    // Определяем props (параметры), которые будут передаваться компоненту
    props: ['lineData', 'chartOptions'],
    // Функция, вызывающаяся после монтирования компонента в DOM
    mounted() {
      // Рендерим линейную диаграмму, используя переданные данные и опции
      this.renderChart(this.lineData, this.chartOptions);
    }
  }, {
    responsive: true,
    maintainAspectRatio: false
  });
  
  // Создаем новый экземпляр Vue
  new Vue({
    // Привязываем Vue к элементу с идентификатором "app" в HTML
    el: "#app",
    // Создаем экземпляр Vuetify для использования внутри Vue
    vuetify: new Vuetify(),
    // Данные компонента Vue
    data() {
      return {
        // Настройки для графика
        ChartConfig: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: '#3498db',
              borderColor: 'rgba(136,136,136,0.5)',
              label: "2013"
            }
          ]
        },
        // Опции для графика
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              categoryPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        },
        // Массив данных для графика
        iceCream: [],
        // Состояние для открытия/закрытия боковой панели
        drawer: false
      };
    },
    // Функция, вызывающаяся после монтирования компонента в DOM
    mounted: function () {
      // Вызываем метод для получения данных
      this.getListData();
    },
    // Методы компонента
    methods: {
      // Получаем данные из API
      getListData: async function () {
        // Выполняем GET-запрос на указанный URL
        await axios.get("https://my-json-server.typicode.com/isogunro/jsondb/IceCream")
          .then((response) => {
            // Вызываем метод для обработки полученных данных
            this.getChartData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      // Обрабатываем полученные данные для графика
      getChartData: function (chartData) {
        // Проходим по данным и добавляем значения в конфигурацию графика
        for (var i = 0; i < chartData.length; i++) {
          this.ChartConfig.labels.push(chartData[i].Flavor);
        }
  
        for (var i = 0; i < chartData.length; i++) {
          this.ChartConfig.datasets[0].data.push(chartData[i].Vote);
        }
        console.log(this.ChartConfig);
      }
    }
});
  