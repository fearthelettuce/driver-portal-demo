<template>
    <div class="statusCard">
        <div class="statusHeader"><h3>{{ statusElement.label }}: {{ statusElement.statusDescription }}</h3></div>
        <div class="statusDetail">
            <button @click="toggleDetails">{{ detailsBtnLabel }}</button>
            <StatusDetails v-if="open">{{ statusElement.categoryDescription }}</StatusDetails>
    </div>
    </div>
</template>

<script>
import StatusDetails from './StatusDetails.vue'
export default {
    components: { StatusDetails },
    props: ['statusElement'],
    data() {
        return {
            open: false,
        }
    },
    computed: {
        detailsBtnLabel() {
            if (this.open) {
                return 'Hide details'
            } else {
                return 'Show details'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.open = !this.open
        }
    }
}
</script>

<style scoped>
.statusCard {
    /* border: 1px solid; */
    flex: 1;
    padding: .5em;
    /* width: 20em; */
    min-width: 15em;
    }
button {
    border: none;
    background-color: transparent;
    color: inherit;
    outline: none;
    cursor: pointer;
}
</style>