<template>
    <DriverHeader />
    <DriverWelcome />
    <DriverFooter />
</template>

<script>
import TheHeader from '../components/ui/TheHeader.vue'
import TheFooter from '../components/ui/TheFooter.vue'
import DriverWelcome from '../components/driver/DriverWelcome.vue'
export default {
    components: { TheHeader, TheFooter, DriverWelcome }
}

</script>