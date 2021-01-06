<template>
  <div>
     <material-card
      color="green"
      title="Lista de Tutores"
      text="Todos os Pets"
    >
        <v-data-table
          dense
          v-model = "owners_selected"
              :headers="headers"
              :items="owners"
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
      owner_selected: [],
      headers: [
        { text: 'Tutor', value: 'owner' },
        { text: 'Última Visita', value: 'last_visit' },
        { text: 'Procedimento', value: 'procedure' },
        { text: 'Nome Pet(s)', value: 'name' },
      ],
      owners: [
        {
          name: 'Valente',
          last_visit: '20-08-2019',
          procedure: 'Grooming',
          owner: 'Federico Delgado',
        },
      ],
    };
  },
};
</script>
