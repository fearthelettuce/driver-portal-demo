<template>
    <h1>Select the time that works best for you.</h1>
    <div class="recommendation-list">
    <RecommendationItem v-for="item of appointmentData.recommendedAppointments" :apptDetails="item" @click="selectAppointment(item)"/>
    </div>
    <router-link to="/appointmentcalendar">If none of these times work?  Click here</router-link>
</template>

<script>
import RecommendationItem from './RecommendationItem.vue'
export default {
    components: {RecommendationItem},
    data() {
        return {
            appointmentData: {
                vendorId: 10001,
                availableAppointments: [],
                recommendedAppointments: [
                    'December 7, 2022 10:30:00', 'December 7, 2022 14:30:00', 'December 8, 2022 9:30:00', 'December 8, 2022 12:30:00', 'December 12, 2022 2:30:00' 
                ]
            },
            selectedAppointment: null,
        }
    },
    methods: {
        selectAppointment(clickedItem) {
            this.selectedAppointment = clickedItem
            this.confirmSelection()

        },
        confirmSelection() {
            if (confirm(`Is this appointment correct?\n${this.selectedAppointment}`)) {
                console.log('appt confirmed:' + this.selectedAppointment)
            } else {
                this.selectAppointment = null;
            }
        }
    }
}

</script>

<style scoped>
.recommendation-list {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    margin: 1em;
    padding: 1.5em;
}

h1 {
    font-size: 2em;
    margin: 2em;
}
</style>