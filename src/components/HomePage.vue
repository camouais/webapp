<script setup>
import { onMounted } from "vue";
import ConnexionPage from "../components/ConnexionPage.vue";
import {Modal} from "bootstrap";


let myModal;

onMounted(() => {
    myModal = new Modal(document.getElementById('connexionPopup'));
});

const showPopup = () => {
    myModal.show();
};
</script>

<template>
    <div>
        <button type="button" id="btnConnexion" class="btn" @click="showPopup">Connexion</button>
        <ConnexionPage></ConnexionPage>
    </div>
</template>

<style>
#btnConnexion{
    background-color: #AED6F1;
}
</style>