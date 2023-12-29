<template>
    <div class="root">
        <button @click="decrease">-</button>
        <input type="number" :value="number" min="1" max="10">
        <button @click="increse">+</button>
    </div>
</template>

<script>
    export default {
        name: 'LessonTwo',
        data() {
            return {
                number : 1,
            }
        },
        methods: {
            decrease() {
                if (this.number > 1 && this.number <= 10) {
                    this.number--;
                }
            },
            increse(){
                if (this.number >= 1 && this.number < 10) {
                    this.number++;
                }
            },
        }
    }
</script>