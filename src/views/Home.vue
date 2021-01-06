<template>
  <div class="parent">
  <NavBar />
  <v-content>
    <router-view></router-view>
  </v-content>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style scoped>
</style>
