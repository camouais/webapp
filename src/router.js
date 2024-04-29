// router.js

import { createRouter, createWebHashHistory } from 'vue-router';
import InfoCompte from './components/InfoCompte.vue';
import ContactPage from './components/ContactPage.vue';
import StatistiquesPage from './components/StatistiquesPage.vue';
import ListeClientPage from './components/ListeClientPage.vue';
import ContratsClientPage from './components/ContratsClientPage.vue';
import IncidentClientPage from './components/IncidentClientPage.vue';
import FacturePage from './components/FacturePage.vue';
const routes = [
  
    { path: '/', component: InfoCompte },
    { path: '/InfoCompte', component: InfoCompte },
    { path: '/ContactPage', component: ContactPage },
    { path: '/StatistiquesPage', component: StatistiquesPage },
    { path: '/ListeClientPage', component: ListeClientPage },
    { path: '/ContratsClientPage', component: ContratsClientPage },
    { path: '/IncidentClientPage', component: IncidentClientPage },
    { path: '/FacturePage', component: FacturePage },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });

export default router;
