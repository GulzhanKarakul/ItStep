<template>
        <h2>Студент: {{ students[id].name }}</h2>
        <h3>Группа: {{ students[id].group }}</h3>
        <ol>
        <li v-for="(grade, key) of students[id].grades" :key="key">
          <tr>
            <td>{{ grade.date }}</td>
            <td>{{ grade.grade }}</td>
          </tr>
        </li>
      </ol>

</template>
  
<script>
export default {
    name: "StudentPage",
    emits: ['add-lesson', 'add-group', 'add-grade'],
    props: {
        students: Array,
        lessons: Array
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
       
    },
};
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