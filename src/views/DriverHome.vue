<template>
    <TheHeader />
    <div class="home-container">
        <section class="overallStatusSection">
            <h1 :class="readyStatus ? 'ready' : 'not-ready'">{{ readyStatusText }}</h1>
            <router-link to="/appointment" v-if="readyStatus">Schedule an appointment to pickup</router-link>
            
        </section>
        <section class="statusSection">
            <StatusList :statusData="deliveryStatusData" />
        </section>
    </div>
    <TheFooter />
</template>
<!-- //TODO: add logic to see if appt already scheduled -->
<script>
import StatusList from '../components/status/StatusList.vue'
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
export default {
    components: { StatusList, TheHeader, TheFooter },
    data() {
        return {
            readyStatus: true,
            deliveryStatusData: {
                vehicleOrder: {
                    label: 'Vehicle Production',
                    statusDescription: 'Complete',
                    complete: true,
                    display: true,
                    categoryDescription: 'Vehicle ordering and manufacturer.',
                    instructions: '',
                },
                vehicleTransport: {
                    label: 'Transportation',
                    statusDescription: 'Complete',
                    complete: true,
                    display: true,
                    categoryDescription: 'Shipment of the vehicle from the manufacturer production facility to the dealer.',
                    instructions: '',
                },
                dealerPrep: {
                    label: 'Dealer Prep',
                    statusDescription: 'Complete',
                    complete: true,
                    display: true,
                    categoryDescription: 'The dealer will clean the vehicle, remove shipping materials and confirm it is road ready.',
                    instructions: '',
                },
                vehicleRegistration: {
                    label: 'Vehicle Registration',
                    statusDescription: 'Complete',
                    complete: true,
                    display: true,
                    categoryDescription: 'License plates or a temporary tag will be provided or have been mailed to you in order to operate the vehicle legally.',
                    instructions: 'Please bring the license plates that you received in the mail to the dealership.',
                },
                aftermarket: {
                    label: 'Equipment Upfit',
                    statusDescription: 'Complete',
                    complete: true,
                    display: true,
                    categoryDescription: 'If needed, additional equipment or graphics will be installed on the vehicle.',
                },

            }
        }
    },
    computed: {
        readyStatusText() {
            if (this.readyStatus) {
                return 'Your vehicle is ready!'
            } else {
                return 'Your vehicle is being prepped.'
            }
        }
    }
}
</script>

<style scoped>
.home-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.statusSection {
    display: flex;
    padding: 2em;
    margin: 3em;
    flex-direction: row;
}
.overallStatusSection {
    padding: 3em;
    margin: 0em;
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