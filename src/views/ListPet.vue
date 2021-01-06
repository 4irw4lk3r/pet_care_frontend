<template>
  <div>
    <material-card
      color="green"
      title="Pets 123"
      text="Todos os Pets"
    >
      <div class="right">
        <v-btn icon>
          <router-link to="/addPet">
            <v-icon color="lime darken-1" >mdi-plus-thick </v-icon>
          </router-link>
        </v-btn>
      </div>
      <v-data-table
        dense
        v-model = "pet_selected"
            :headers="headers"
            :items="pets"
            :items-per-page="5"
            item-key="name"
            show-select
            class="elevation-1">
      </v-data-table>
    </material-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pet_selected: [],
      headers: [
        {
          text: 'Nome Pet',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Última Visita', value: 'last_visit' },
        { text: 'Procedimento', value: 'procedure' },
        { text: 'Espécie', value: 'specie' },
        { text: 'Tutor', value: 'owner' },
      ],
      pets: [
        {
          name: 'Valente',
          last_visit: '20-08-2019',
          procedure: 'Grooming',
          specie: 'Dog',
          owner: 'Federico Delgado',
        },
      ],
    };
  },
};
</script>
