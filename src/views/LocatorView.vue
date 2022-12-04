<template>
<div class="container">    
    <h1>Input your address</h1>
    <form v-on:submit.prevent="locate">
        <label for="geolocation">Location</label>
        <input type="text" name="geolocation" />
        <br>
        <button @click="getLocate">Locate</button>
    </form>
    <p>{{currentAddress}}</p></div>
</template>

<script>
import mapsApi from '../services/mapsApi.js'
export default {
    data() {
        return {
            currLat: 0,
            currLong: 0,
            currentAddress: '',
        }
    },
    methods: {
        locate() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const currPosition = { lat: position.coords.latitude, long: position.coords.longitude}
                    this.currLat = currPosition.lat
                    this.currLong = currPosition.long
                    this.getAddress();
                },
                    (error) => {
                    console.log(error.message)
                }
                    
                );
            } else {
                console.log('Cannot get your location')
            }
        },
        getAddress() {
            const address = mapsApi.getAddress(this.currLat, this.currLong)
            console.log('return data from masApi.getAddress:' + address)
            this.currentAddress = address[0]
        },
    }
}</script>
<style scoped>
.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}
</style>