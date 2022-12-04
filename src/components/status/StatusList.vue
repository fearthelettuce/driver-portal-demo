<template>
    <div class="status-container">
        <StatusCard v-for="statusElement in statusData"  :statusElement="statusElement" />
    </div>
</template>

<script>
import StatusCard from './StatusCard.vue'
export default {
    components: { StatusCard },
    props: ['statusData'],
}</script>

<style scoped>
.status-container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        gap: 3em;
    }
</style>
