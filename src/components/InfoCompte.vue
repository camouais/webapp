<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark-subtle d-flex align-items-center">
        <h5 class="m-0">Informations du compte</h5>
      </div>
    </div>
    <div class="row ">
      <div class="col-3 p-4 mt-4  text-center d-flex align-items-center justify-content-center">
        <div class="center-element">
          <img src="../assets/img_profile.png" id="img_profile" alt="" >
        </div>
      </div>
      <div class="col-9 p-4 mt-4">
        
        <ul class="list-group">
          <!-- Adresse email personnelle -->
          <li class="list-group-item"> Nom : <span id="nom">{{ nom }}</span></li>
          <!-- Adresse email professionnelle -->
          <li class="list-group-item">Prénom : <span id="prenom">{{ prenom }}</span></li>
          <!-- Téléphone fixe -->
          <li class="list-group-item"> Identifiant : <span id="identifiantPro">{{ identifiantPro }}</span></li>

          <li class="list-group-item"> Date de naissance : <span id="date_dn">{{ date_dn }}</span></li>
          <!-- Téléphone personnel -->
          <li class="list-group-item">Lieu de naissance : <span id="lieu_dn">{{ lieu_dn }}</span></li>
          <!-- Adresse postale -->
          <li class="list-group-item">Situation : <span id="situation">{{ situation }}</span></li>
        </ul>
      </div>
      
    </div>
    <div class="row">
      <div class="col p-4 ">
        <ul class="list-group">
          <!-- Adresse email personnelle -->
          <li class="list-group-item"> Agence : <span id="agence">{{ agence }}</span></li>
          <!-- Adresse email professionnelle -->
          <li class="list-group-item">Lieu entreprise : <span id="lieu_entr">{{ lieu_entr }}</span></li>
          <!-- Téléphone fixe -->
          <li class="list-group-item"> Poste : <span id="poste">{{ poste }}</span></li>

          <li class="list-group-item"> Année d'intégration : <span id="annee_int">{{ annee_int }}</span></li>
          <!-- Téléphone personnel -->
          <li class="list-group-item">Type de contrat : <span id="type_contr">{{ type_contr }}</span></li>
          <!-- Adresse postale -->
          <li class="list-group-item">Informations supplémentaires (optionnel) : <span id="info_sup">{{ info_sup }}</span></li>
        </ul>
      </div>
    </div>
    <div class="col-md-12 fixed-bottom text-center text-muted p-4 mb-2 ">
        <a href="#" class="ml-2"><br>Si besoin de modification, contacter l'administrateur</a>
      </div>
  </div>
</template>

<script setup>
import $ from 'jquery';

const nom = "utilisateur@exemple.com";
const prenom = "professionnel@entreprise.com";
const identifiantPro = "01XXXXXXXX";
const date_dn = "06XXXXXXXX";
const lieu_dn = "07XXXXXXXX";
const situation = "123 rue de l'Exemple, 75000 Paris";

const agence = "professionnel@entreprise.com";
const lieu_entr = "01XXXXXXXX";
const poste = "06XXXXXXXX";
const annee_int = "07XXXXXXXX";
const type_contr = "123 rue de l'Exemple, 75000 Paris";
const info_sup = "123 rue de l'Exemple, 75000 Paris";

$('#nom').text(nom);
$('#prenom').text(prenom);
$('#identifiantPro').text(identifiantPro);
$('#date_dn').text(date_dn);
$('#lieu_dn').text(lieu_dn);
$('#situation').text(situation);


$('#agence').text(agence);
$('#lieu_entr').text(lieu_entr);
$('#poste').text(poste);
$('#annee_int').text(annee_int);
$('#type_contr').text(type_contr);
$('#info_sup').text(info_sup);
</script>


<style scoped>
#img_profile{
  max-width: 70%; max-height: auto;
}
</style>
