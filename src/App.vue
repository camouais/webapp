<template>
  <div class="container-fluid">
    <nav class="row">
      <NavPage></NavPage>
    </nav>

    <div class="row">
      <div class="col-2 text-center">
       <MenuPage class="mt-4 "></MenuPage>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavPage from './components/NavPage.vue';
import MenuPage from './components/MenuPage.vue';
import router from './router.js'; // Importez le routeur depuis le fichier router.js

export default {
  components: {
    NavPage,
    MenuPage
  },
  setup() {
    return { router };
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.test {
  height: 800px;
}
</style>
./router.js