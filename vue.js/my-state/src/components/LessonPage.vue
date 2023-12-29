<template>
<div class="cont">
    <div class="menu">
        <div class="list-group">
            <router-link class="nav-link" v-for="l of lessons" :to="'/lesson' + l.id" :key="l.id">
                <button type="button" class="list-group-item list-group-item-action">{{ l.title }}</button>
            </router-link>
        </div>
    </div>
    <div class="course">
    <h3>Предмет: {{ lessons[id].title}}</h3>
    <button @click="showForm" id="btn">Новая группа</button>
    <form v-if="show" class="newL">
        <label for="name">Название новой группы:</label>
        <input type="text" name="name" id="" v-model.lazy="newGroup">
        <input type="submit" @click.prevent="addGroup" value="Добавить">
    </form>
    <div  v-if="id">
                <ol  v-for="(c, key) of lessons[id].classNames" :key="key">
                    <!-- <router-link class="nav-link" v-for="(c, key) of lessons[id].classNames" :to="'/class' + c" :key="key"> -->
                        <li @click.prevent="showClass(c)">Группа: {{ c }}</li>
                        <div v-if="showC === c">
                            <table>
                                <thead>
                                <tr>
                                    <th>Фамилия Имя</th>
                                    <th>Группа</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody v-for="(s, key) in students" :key="key">
                                    
                                    <tr v-if="s.group === c">
                                        <td>
                                                    <router-link class="nav-link active" aria-current="page" :to="'/student' + s.id">
                                                    {{ s.name }}
                                            </router-link>
                                        </td>
                                        <td>{{ s.group }}</td>
                                        <td>
                                        <button @click.prevent="showPanel(s.id)">Выставить Оценку</button>
                                        </td>
                                    </tr>
                                    <tr v-if="showP === s.id" >
                                        <td colspan="3" v-if="s.group === c">
                                        <form class="newL">
                                            <label for="name">Выберите день:</label>
                                            <input type="date" name="name" id="" v-model.lazy="date">
                                            <label for="name">Оценка:</label>
                                            <input type="number" min="1" max="12" name="name" id="" v-model.lazy="grade">
                                            <button @click.prevent="addGrade(s.id)">Добавить</button>
                                        </form>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </div>

                    <!-- </router-link> -->
                </ol>
        </div>
    </div>
</div>
</template>
  
<script>
export default {
    name: "LessonPage",
    emits: ['add-group', 'add-grade'],
    props: {
        lessons: Array,
        students: Array
    },
    data() {
        return {
            id: this.$route.params.id,
            show: false,
            newGroup: '',
            showC: false,
            number: 1,
            showP: false,
            date: null,
            grade: 0,
        }
    },
    methods: {
        showForm() {
            this.show = !this.show;
        },
        addGroup(){
            console.log(this.newGroup)
            let data = {id: this.id, title: this.newGroup}

            this.$emit('add-group', data);
        },
        showClass(c) {
            this.showC = c;
        },
        showPanel(index) {
            this.showP = index;
        },
        addGrade(index){
            let stuObj = {date: this.date, grade: this.grade}
            let data = {id: index, state: stuObj}

            this.$emit('add-grade', data);
            this.date = '';
            this.grade = '';
        },
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
.cont{
    display: flex;
    justify-content: space-between;
}
.menu {
    width: 300px;
}

.course {
    width: calc(100% - 400px);
    padding-right: 100px;
}

li {
    padding: 10px; 
    border-bottom: 1px solid #ccc;
    list-style: none;
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

tr {
  width: 100%;
  }

.student-row{
    width: 100%;
}

tr:hover {
  background-color: #ddd;
}

</style>