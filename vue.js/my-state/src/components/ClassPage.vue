<template>
    <div class="cont" >
        {{ name }}
        <ol  v-for="(group, key) of groups" :key="key">
                    <!-- <router-link class="nav-link" v-for="(c, key) of lessons[id].classNames" :to="'/class' + c" :key="key"> -->
                        <li @click.prevent="showClass(group.name)">Группа: {{ group.name }}</li>
                        <div v-if="showC === group.name">
                            <table>
                                <thead>
                                <tr>
                                    <th>Фамилия Имя</th>
                                    <th>Группа</th>
                                    <th>Действие</th>
                                </tr>
                                </thead>
                                <tbody v-for="(s, key) of curGroup" :key="key">
                                    
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
                                    
                                </tbody>
                            </table>
                            </div>

                    <!-- </router-link> -->
                </ol>
    </div>
</template>
  
<script>
export default {
    name: "ClassPage",
    props: {
        groups: Array,
        students: Array,
    },
    data() {
        return {
           showC: false,
           curGroup: [],
        }
    },
    methods: {
        showClass(c) {
            this.showC = c;
            this.curGroup = this.students.filter((element) => element.group=c);
            console.log(this.curGroup)
        },
       
    },
};
</script>
  

<style scoped>
</style>