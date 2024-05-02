<template>
  <div class="container-fluid">
    <!-- ROW 1 -->
    <div class="row">
      <div class="col bg-dark-subtle d-flex align-items-center">
        <h5 class="m-0">Liste des clients</h5>
      </div>
    </div>
    <div class="row">
      <div class="col bg-info text-end ">
        <button class="btn btn-success   mt-2 mb-2">Ajouter un client</button>
        <button class="btn btn-success ms-2 mt-2 mb-2" @click="deleteSelectedClients">Supprimer le client</button>

        <button class="btn btn-success  ms-2  mt-2 mb-2">Accéder aux informations</button>
      </div>
    </div>
    <div class="table-responsive " style="max-height:600px;">
      <table id="table" class="table  table-striped table-hover " data-toggle="table" data-url="data1.json">
        <thead>
          <tr>
            <th data-field="checkboxAll"><input type="checkbox" class="form-check-input" v-model="selectAll" @click="toggleSelectAll"/></th>

            <th data-field="id">Identifiant</th>
            <th data-field="name">Nom</th> 
            <th data-field="prenom">Prénom</th>
            <th data-field="dateNaissance">Date de naissance</th>
            <th data-field="numeroPermis">N° permis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id" >
            <td><input type="checkbox" class="form-check-input" v-model="client.selected" ></td>
            <td>{{ client.id }}</td>
            <td>{{ client.nom }}</td>
            <td>{{ client.prenom }}</td>
            <td>{{ client.dateNaissance }}</td>
            <td>{{ client.numeroPermis }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="row mt-4">
      <div class="text-end" >
        <button class="btn btn-success  ">Ajouter un client</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {isPopupVisible: false,
    popupTop: 0,
    popupLeft: 0,
    selectAll: false, // Ajoutez cette ligne pour initialiser selectAll à false
    clients : [
      { id: 1, nom: 'Doe', prenom: 'John', dateNaissance: '01/01/1980', numeroPermis: '12345' },
      { id: 2, nom: 'Smith', prenom: 'Jane', dateNaissance: '02/02/1990', numeroPermis: '54321' },
      { id: 3, nom: 'Williams', prenom: 'Michael', dateNaissance: '03/03/1985', numeroPermis: '67890' },
      { id: 4, nom: 'Johnson', prenom: 'William', dateNaissance: '04/04/1975', numeroPermis: '09876' },
      { id: 5, nom: 'Brown', prenom: 'Emma', dateNaissance: '05/05/1988', numeroPermis: '23456' },
      { id: 6, nom: 'Jones', prenom: 'Sophia', dateNaissance: '06/06/1978', numeroPermis: '45678' },
      { id: 7, nom: 'Garcia', prenom: 'Daniel', dateNaissance: '07/07/1982', numeroPermis: '78901' },
      { id: 8, nom: 'Miller', prenom: 'Lucas', dateNaissance: '08/08/1995', numeroPermis: '89012' },
      { id: 9, nom: 'Davis', prenom: 'Olivia', dateNaissance: '09/09/1983', numeroPermis: '56789' },
      { id: 10, nom: 'Rodriguez', prenom: 'Benjamin', dateNaissance: '10/10/1970', numeroPermis: '34567' },
      { id: 11, nom: 'Doe', prenom: 'John', dateNaissance: '11/11/1989', numeroPermis: '12345' },
      { id: 12, nom: 'Smith', prenom: 'Jane', dateNaissance: '12/12/1984', numeroPermis: '54321' },
      { id: 13, nom: 'Williams', prenom: 'Michael', dateNaissance: '13/01/1976', numeroPermis: '67890' },
      { id: 14, nom: 'Johnson', prenom: 'William', dateNaissance: '14/02/1987', numeroPermis: '09876' },
      { id: 15, nom: 'Brown', prenom: 'Emma', dateNaissance: '15/03/1981', numeroPermis: '23456' },
      { id: 16, nom: 'Jones', prenom: 'Sophia', dateNaissance: '16/04/1979', numeroPermis: '45678' },
      { id: 17, nom: 'Garcia', prenom: 'Daniel', dateNaissance: '17/05/1992', numeroPermis: '78901' },
      { id: 18, nom: 'Miller', prenom: 'Lucas', dateNaissance: '18/06/1986', numeroPermis: '89012' },
      { id: 19, nom: 'Davis', prenom: 'Olivia', dateNaissance: '19/07/1974', numeroPermis: '56789' },
      { id: 20, nom: 'Rodriguez', prenom: 'Benjamin', dateNaissance: '20/08/1991', numeroPermis: '34567' },
      { id: 21, nom: 'Doe', prenom: 'John', dateNaissance: '21/09/1982', numeroPermis: '12345' },
      { id: 22, nom: 'Smith', prenom: 'Jane', dateNaissance: '22/10/1973', numeroPermis: '54321' },
      { id: 23, nom: 'Williams', prenom: 'Michael', dateNaissance: '23/11/1984', numeroPermis: '67890' },
      { id: 24, nom: 'Johnson', prenom: 'William', dateNaissance: '24/12/1997', numeroPermis: '09876' },
      { id: 25, nom: 'Brown', prenom: 'Emma', dateNaissance: '25/01/1983', numeroPermis: '23456' },
      { id: 26, nom: 'Jones', prenom: 'Sophia', dateNaissance: '26/02/1996', numeroPermis: '45678' },
      { id: 27, nom: 'Garcia', prenom: 'Daniel', dateNaissance: '27/03/1977', numeroPermis: '78901' },
      { id: 28, nom: 'Miller', prenom: 'Lucas', dateNaissance: '28/04/1990', numeroPermis: '89012' },
      { id: 29, nom: 'Davis', prenom: 'Olivia', dateNaissance: '29/05/1985', numeroPermis: '56789' },
      { id: 30, nom: 'Rodriguez', prenom: 'Benjamin', dateNaissance: '30/06/1978', numeroPermis: '34567' }
    ]};
  },
  methods: {
    deleteSelectedClients() {
      this.clients = this.clients.filter(client => !client.selected);
    },
    toggleSelectAll() {
  this.clients.forEach(client => client.selected = !this.selectAll);
}

  },
  
};
</script>

<style scoped>
.table-container {
  max-height: 400px; /* Définissez la hauteur maximale souhaitée */
  overflow-y: auto; /* Activez le défilement vertical */
}



</style>
