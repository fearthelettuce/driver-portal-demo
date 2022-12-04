<template>
    <div class='welcome-container'>
        <router-link to="/login">
        <h1>Welcome to the Driver Portal</h1>
        <p>Use this portal to check status, schedule pickup and get help.</p>
        <h2>Get Started!</h2>
        </router-link>
    </div>
</template>

<style scoped>
.welcome-container {
    text-align: center;
    line-height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
h1 {
    font-size: 3em;
}
</style>
