<template>
  <div class='hero-image'> 
        <RouterView />    
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import BaseButton from "./components/ui/BaseButton.vue"
import TheHeader from "./components/ui/TheHeader.vue"
import TheFooter from "./components/ui/TheFooter.vue"
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
  font-family: 'ABeeZee', sans-serif;
}
body {
  height: 100%;
  max-width: 100%;
  margin: auto;
  background-color: #333;
  color: rgb(251, 245, 230);
  }
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

.hero-image {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=100)');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<!-- 
icons: https://www.svgrepo.com/collection/fluent-ui-icons-filled/ -->
