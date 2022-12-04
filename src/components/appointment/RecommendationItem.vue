<template>
    <div class="recommendation-item">
        <p>{{appointmentDateLabel}}</p>
        <p>{{appointmentTimeLabel}}</p>
    </div>
</template>

<script>
export default {
    props: ['apptDetails'],
    computed: {
        appointmentDate() {
            return new Date(this.apptDetails)
        },
        appointmentDateLabel() {
            return this.appointmentDate.toLocaleDateString('en-us', { weekday: "short", month: "short", day: "numeric" })
        },

        appointmentTimeLabel() {
            return this.appointmentDate.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        },
    }
}</script>
<style scoped>
.recommendation-item{
    border: 1px solid;
    border-radius: 8px;
    padding: 1em;
    cursor: pointer;
}
</style>