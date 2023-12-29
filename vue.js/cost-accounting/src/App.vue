<!-- Задание 2.
Создать веб-приложение «Учёт затрат».
Возможности:
Внесение покупки
Внесение доходов
Статистика трат
При внесении покупки указывать сумму, дату, категорию (еда, одежда, развлечения, техника и т.д.) и комментарий, если необходим.
При внесении дохода указывать сумму, дату, источник дохода.
В пункте «Статистика» можно отобразить общие расходы по категориям, самые большие расходы за последний месяц, итоговый баланс по доходам и расходам.
Все данные хранить в главном компоненте. Внесение покупки и доходов сделать через отдельные компоненты. Структура остальных компонентов – на ваше усмотрение.
Дополнительно: сохранять все данные в localStorage -->
<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark"> 
      <div class="container-fluid"> 
        <a class="navbar-brand" href="#">Учет Затрат</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"> 
          <span class="navbar-toggler-icon"></span> 
        </button> 
        <div class="collapse navbar-collapse" id="navbarColor01"> 
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
            <li class="nav-item"> 
              <router-link class="nav-link active" to="/purchase">Покупки</router-link> 
            </li> 
            <li class="nav-item"> 
              <router-link class="nav-link active" aria-current="page" to="/income">Доход</router-link> 
            </li> 
          </ul> 
          <form class="d-flex" role="search"> 
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
            <button class="btn btn-outline-light" type="submit">Search</button> 
          </form> 
        </div> 
      </div> 
    </nav>
  
  
    <router-view 
    @add-purchase="addPurch"
    @add-income="addIncome"
    :purchasesArr="purchases"
    :statArr="stat"
    :incomeArr="income"
    :allIncome="allIncome"
    :allSpending="allSpending"
    ></router-view>
</template>

<script>
export default {
    name: 'App',
    data() {
      return {
          income: [],
          purchases: [],
          stat: [
            {id: 0, name: 'Еда', purchNum: 0, allPurchases: 0, averagePurch: 0},
            {id: 1, name: 'Одежда', purchNum: 0, allPurchases: 0, averagePurch: 0},
            {id: 2, name: 'Развлечения', purchNum: 0, allPurchases: 0, averagePurch: 0},
            {id: 3, name: 'Техника', purchNum: 0, allPurchases: 0, averagePurch: 0},
          ],
          allIncome: 0,
          allSpending: 0,
      }
    },
    methods: {
      addPurch(data){
        this.purchases.push(data);
        this.allSpending += parseInt(data.summ);

        if(data.type == 'food'){
          let obj = this.stat[0];
          obj.purchNum += 1;
          obj.allPurchases += parseInt(data.summ);
          obj.averagePurch = obj.allPurchases/this.stat[0].purchNum;

          console.log(this.stat[0]);
        } else if(data.type == 'cloth'){
          let obj = this.stat[1];
          obj.purchNum += 1;
          obj.allPurchases += parseInt(data.summ);
          obj.averagePurch = obj.allPurchases/obj.purchNum;

          console.log(this.stat[1]);
        } else if(data.type == 'entertainment'){
          let obj = this.stat[2];
          obj.purchNum += 1;
          obj.allPurchases += parseInt(data.summ);
          obj.averagePurch = obj.allPurchases/obj.purchNum;

          console.log(this.stat[2]);
        } else if(data.type == 'technique'){
          let obj = this.stat[3];
          obj.purchNum += 1;
          obj.allPurchases += parseInt(data.summ);
          obj.averagePurch = obj.allPurchases/obj.purchNum;

          console.log(this.stat[3]);
        }

        localStorage.setItem(`purchases`, JSON.stringify(this.purchases));
        localStorage.setItem(`stat`, JSON.stringify(this.stat));
      },
      addIncome(data) {
        console.log(data);

        this.income.push(data);

        this.allIncome += parseInt(data.summ);
        localStorage.setItem(`income`, JSON.stringify(this.income));
        // localStorage.setItem(`groups`, JSON.stringify(this.groups));
      }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>