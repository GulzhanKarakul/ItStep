<template>
    <div class="root">
        <label for="email">
           <input 
                type="email" 
                name="email" 
                :value="email" 
                @input="getEmail($event.target.value)"
            > 
        </label>
        <label for="password">
            <input 
                type="password" 
                name="password" 
                :value="password" 
                @input="getPassword($event.target.value)"
            >
        </label>

        <p>{{ email }}</p>
        <p>{{ password }}</p>
    </div>
</template>

<script>
    export default {
        name: 'ComponentOne',
        data() {
            return {
                email: 'example@google.com',
                password: 12345678,
            }
        },
        methods: {
            getEmail(value) {
                this.email = value;
            },
            getPassword(value) {
                this.password = value;
            },
        }
    }
</script>

<style scopes>
/* Добавьте атрибут "scoped", чтобы ограничить CSS только для этого компонента. */
    .root input {
        padding: 10px 15px;
        border: 2px solid #000;
        border-radius: 10px;
        margin: 5px;
    }
</style>