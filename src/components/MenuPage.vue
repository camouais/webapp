<template>
  <div class="btn-group-vertical">
    <router-link to="/InfoCompte" class="btn btn-light " :class="{ 'active': $route.path === '/InfoCompte' }">Informations du compte</router-link>
    <router-link to="/ContactPage" class="btn btn-light" :class="{ 'active': $route.path === '/ContactPage' }">Contact</router-link>
    <router-link to="/StatistiquesPage" class="btn btn-light" :class="{ 'active': $route.path === '/StatistiquesPage' }">Statistiques</router-link>
    <div class="btn-group">
      <button id="clients" type="button" class="btn btn-light" data-bs-toggle="dropdown">Clients</button>
      <div class="dropdown-menu" id="clientsDrop">
        <router-link to="/ListeClientPage" class="btn btn-light d-flex justify-content-center" >Liste</router-link>
        <router-link to="/ContratsClientPage" class="btn btn-light d-flex justify-content-center">Contrats</router-link>
        <router-link to="/IncidentClientPage" class="btn btn-light d-flex justify-content-center">Incidents</router-link>
      </div>
    </div>
    <router-link to="/FacturePage" class="btn btn-light" :class="{ 'active': $route.path === '/FacturePage' }">Factures</router-link>


  </div>
</template>

<style scoped>
  
  .active-link {
  background-color: #007bff; /* Couleur de fond pour le bouton actif */
  color: #fff; /* Couleur du texte pour le bouton actif */
}
</style>

<script setup>



</script>
