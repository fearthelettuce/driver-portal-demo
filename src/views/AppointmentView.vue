<template>
    <TheHeader />
    <div class="appointment-container">
        <section>
            <AppointmentRecommendations />
        </section>
    </div>
    <TheFooter />
</template>

<script>
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import AppointmentRecommendations from '../components/appointment/AppointmentRecommendations.vue'
export default {
    components: {TheHeader, TheFooter, AppointmentRecommendations },
    data() {
        return {
            }
    },
    computed: {
        
    }
}
</script>

<style scoped>
.appointment-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.statusSection {
    display: flex;
    padding: 3em;
    margin: 3em;
    flex-direction: row;
}

.overallStatusSection {
    padding: 3em;
    margin: 3em;
}

.overallStatusSection h1 {
    font-size: 3em;
}

.ready {
    color: rgb(60, 185, 60);
}

.not-ready {
    color: orange;
}
</style>