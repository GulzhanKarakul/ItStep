<!-- Задание 1
Создать веб-приложение «Электронный дневник».
Возможности:
1.Просмотр занятия
2.Выставление оценок
3.Карточка студента
Примечания:
Для выставления оценок обязательно указать тему и дату занятия.
Состав группы хранить в глобальном компоненте
Карточка студента (имя, оценка) хранить в отдельном компоненте
Дополнительно:
Сделать структуру группы – объект с названием группы и массивом студентом
Сохранять данные в localStorage
Сделать оформление -->




<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My State</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Главная</router-link> 
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/class">Группы</router-link> 
            </li>
            </ul>

        </div>
    </nav>
    
    <router-view 
    @add-lesson="addLes" 
    @add-group="addGr"
    @add-grade="addGrade"
    :lessons="lessonList"
    :groups="groups"
    :students="studentsArr"
    ></router-view>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            lessonList: [
                {
                    id: 0,
                    title: 'Java Script',
                    classNames: ['JS1', 'JS2']
                },
                {
                    id: 1,
                    title: 'Pyton',
                    classNames: ['PY1', 'PY2']
                },
            ],
            groups: [
                { id: 0, name: "JS1" },
                { id: 1, name: "JS2" },
                { id: 2, name: "PY1" },
                { id: 3, name: "PY2" },
            ],
            studentsArr: [
                { id: 1, name: "Иванов Иван", group: "JS1", grades: [] },
                { id: 2, name: "Петров Петр", group: "PY1", grades: [] },
                { id: 3, name: "Сидоров Сидор", group: "JS1", grades: [] },
                { id: 4, name: "Сидорова Света", group: "JS1", grades: [] },
                { id: 5, name: "Петрова Настя", group: "PY1", grades: [] },
                { id: 6, name: "Сидоров Сидор", group: "JS2", grades: [] },
                { id: 7, name: "Сидорова Света", group: "JS2", grades: [] },
                { id: 8, name: "Петрова Настя", group: "PY2", grades: [] },
                { id: 9, name: "Сидоров Сидор", group: "JS1", grades: [] },
                { id: 10, name: "Петрова Настя", group: "PY2", grades: [] },
            ],
        }
    },
    methods: {
        addLes(data) {
            let newL = {id: this.lessonList.length, title: '', classNames: []};
            newL.title = data;

            this.lessonList.push(newL);
            localStorage.setItem(`lessonList`, JSON.stringify(this.lessonList));
        },
        addGr(data){
            let newG = {id: this.lessonList.length, name: ''};
            newG.name = data.title;

            let classNames = this.lessonList[data.id].classNames;
            classNames.push(data.title);

            this.groups.push(newG);
            localStorage.setItem(`groups`, JSON.stringify(this.groups));
        },
        addGrade(data) {
            let grades = this.studentsArr[data.id].grades;
            
            grades.push(data.state);
            localStorage.setItem(`lessonList`, JSON.stringify(this.lessonList));
            localStorage.setItem(`groups`, JSON.stringify(this.groups));
            localStorage.setItem(`students`, JSON.stringify(this.studentsArr));
        },
    }
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


