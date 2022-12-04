<template>
    <header>
        <OrderInfo />
        <TheNav />
    </header>
</template>
//TODO: Add mobile nav, mobile order info
<script>
import TheNav from './TheNav.vue'
import OrderInfo from '../order/OrderInfo.vue'
export default {
    components: {
        TheNav,
        OrderInfo,
    }
}</script>
<style scoped>
    header {
        display: flex;
        flex-direction: row;
        margin-top: .65em;
        justify-content: space-between;
    }
</style>