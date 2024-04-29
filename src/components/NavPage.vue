<script setup>
import HomePage from './HomePage.vue';
  // Importez les props
//   import { defineProps } from 'vue';

//   // Définissez les props
//   const props = defineProps({
//     user_name: String,
//     user_fname: String
//   });
</script>


<template>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand ms-2" href="#">
    <img src="../assets/logo_FondClair.png" class="d-inline-block " id="logo" alt="">
    <h4 class="ms-2 d-inline-block">Mobil'Assur</h4>
  </a>
  <form class="navbar-brand">
    <HomePage class="my-2 my-sm-0 mr-2"></HomePage>
  </form>
</nav>
</template>

<style>
#logo {
  display: block;
  max-width: 15%;
  height: auto;
}
</style>
