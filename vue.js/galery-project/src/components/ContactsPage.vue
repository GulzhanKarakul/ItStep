<template>
    <h1>Contacts:</h1>

    <div class="cont">
        <ol>
            <li class='contact' v-for="(contact, key) of user.userContacts" :key="key">
                <h1>Имя: {{ contact.name }}</h1>
                <p>Номер: {{ contact.number }}</p>
            </li>
        </ol>
    </div>
</template>

<script>

export default {
    name: 'ContactsPage',
    components: {  },
    props: {
        user: Object,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
       
    },
}
</script>

<style scoped>
.cont{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
ol{
    width: 100%;
    list-style: none;
}
.contact{

    border: 2px solid #000;
    border-radius: 10px;
    background: #98b3f7;
    padding: 20px;
    margin: 20px;
}
</style>