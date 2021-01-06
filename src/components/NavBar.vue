<template>
    <nav>
        <v-toolbar dense flat color="green darken-1">
        <v-toolbar-title>PetCare</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <router-link to="/admin">
                <v-icon color="lime darken-1">mdi-account-tie</v-icon>
            </router-link>
        </v-btn>

         <v-btn icon>
            <router-link to="/listOwner">
                <v-icon color="lime darken-1">mdi-account-heart</v-icon>
            </router-link>
        </v-btn>

        <router-link to="/listPet">
            <v-btn icon>
                <v-icon color="lime darken-1">mdi-dog</v-icon>
            </v-btn>
        </router-link>

        <v-btn icon>
            <router-link to="/listProcedures">
                <v-icon  color="lime darken-1">mdi-bottle-tonic-plus</v-icon>
            </router-link>
        </v-btn>

        <v-btn icon>
            <router-link to="/calendar">
                <v-icon  color="lime darken-1">mdi-calendar-month</v-icon>
            </router-link>
        </v-btn>

        <v-btn icon>
            <router-link class="btn btn-primary" to="/">
                <v-icon  color="lime darken-1">mdi-dots-vertical</v-icon>
            </router-link>
        </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
  methods: {
    navigate_to(URL) {
      this.$route.push(URL);
    },
  },
};

</script>

<style lang="scss" scoped>
</style>
