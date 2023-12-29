<template>
  <div class="flex">
        <ItemView
            @data-received="receiveData"
            v-for="item of items"
            :item="item"
            :key="item.id"
        ></ItemView>

      <router-link to="/busket">Корзина</router-link>
  </div>
</template>

<script>
import ItemView from "./ItemView.vue";

export default {
    name: "StoreView",
    components: {
        ItemView,
    },
    props: {
        items: Array,
        addedItems: Array,
    },
    data() {
        return {
            receivedData: "",
        };
    },
    methods: {
        receiveData(id) {
            this.receivedData = id;
            this.$emit("get-choosen-item", this.receivedData);
        },
    },
};
</script>

<style>
.flex {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 1400px;
    margin: 0 auto;
}
</style>