import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'; // Importez le routeur depuis le fichier Router.js

// Créez une application Vue et montez-la sur l'élément avec l'ID "app"
createApp(App)
  .use(router) // Utilisez le routeur dans votre application
  .mount('#app');
