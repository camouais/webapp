<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark-subtle d-flex align-items-center">
        <h5 class="m-0">Contact</h5>
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
          <li class="list-group-item"> <img src="../assets/img_email_perso.png" alt="" style="height: 2em; margin-right: 10px">Email personnel : <span id="email-personnel">{{ emailPersonnel }}</span></li>
          <!-- Adresse email professionnelle -->
          <li class="list-group-item"> <img src="../assets/img_email_pro.png" alt="" style="height: 2em; margin-right: 10px">Email professionnel : <span id="email-professionnel">{{ emailProfessionnel }}</span></li>
          <!-- Téléphone personnel -->
          <li class="list-group-item"> <img src="../assets/img_telephone_perso.png" alt="" style="height: 2em; margin-right: 10px">Téléphone personnel : <span id="telephone-personnel">{{ telephonePersonnel }}</span></li>
          <!-- Téléphone professionnel -->
          <li class="list-group-item"> <img src="../assets/img_telephone_pro.png" alt="" style="height: 2em; margin-right: 10px">Téléphone professionnel : <span id="telephone-professionnel">{{ telephoneProfessionnel }}</span></li>
          <!-- Adresse postale -->
          <li class="list-group-item"> <img src="../assets/img_adresse_post.png" alt="" style="height: 2em; margin-right: 10px">Adresse postale : <span id="adresse">{{ adresse }}</span></li>
        </ul>
      </div>
      <div class="col-md-12 fixed-bottom text-center text-muted p-4 mb-2 ">
        <a href="#" class="ml-2"><br>Si besoin de modification, contacter l'administrateur</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery';

const emailPersonnel = "utilisateur@exemple.com";
const emailProfessionnel = "professionnel@entreprise.com";
const telephoneFixe = "01XXXXXXXX";
const telephonePersonnel = "06XXXXXXXX";
const telephoneProfessionnel = "07XXXXXXXX";
const adresse = "123 rue de l'Exemple, 75000 Paris";

$('#email-personnel').text(emailPersonnel);
$('#email-professionnel').text(emailProfessionnel);
$('#telephone-fixe').text(telephoneFixe);
$('#telephone-personnel').text(telephonePersonnel);
$('#telephone-professionnel').text(telephoneProfessionnel);
$('#adresse').text(adresse);
</script>


<style scoped>
#img_profile{
  max-width: 70%; max-height: auto;
}
</style>
