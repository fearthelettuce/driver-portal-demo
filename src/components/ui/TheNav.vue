<template>
    <nav>
        <ul>
            <router-link to="/home">Order Status</router-link>
            <router-link to="/locator">Locator</router-link>
            <router-link to="/appointment">Appointment</router-link>
        </ul>
    </nav>
</template>
<style scoped>
    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0 2em;
    }
    a {
        margin: 1em;
        padding: .5em;
    }
</style>