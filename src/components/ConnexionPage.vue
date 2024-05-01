<template>
<div>

    <div class="modal fade" id="connexionPopup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Connexion</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form class="form-signin">
              <br>
              <div class="center-element">
                <img src="../assets/logo_FondSombre.png" id="logo" alt="" >
              </div>
              <br>
              <div class="center-element">
                <h4 class="h4 mb-3 font-weight-normal">Veuillez renseigner vos informations</h4>
              </div>
              <br>
              <label for="inputEmail" class="h5 sr-only ">Adresse mail</label>
              <input type="email" id="inputEmail" class="form-control" placeholder="Entrer votre adresse mail" required autofocus>
              <br>
              <label for="inputPassword" class="h5 sr-only">Mot de passe</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Entrer votre mot de passe" required>
              <br>
              <div class="text-center"> 
                <div>
                    Problème de connexion? <a href="#" class="ml-2"><br>Contactez l'administrateur</a>
                </div>
              </div>
              <br>
              </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="button" class="btn btn-primary">Entrer</button>
      </div>
    </div>
  </div>
</div>
</div>

</template>
    
<script>

export default {
    name: 'TestPage'
    
}
</script>

<style scoped>
.center-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo{
  max-width: 40%; max-height: 40%;
}
</style> 