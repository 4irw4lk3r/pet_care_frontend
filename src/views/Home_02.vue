<template>
  <div class="parent">
    <div class="logo"> LOGO ----- 2 </div>
    <div class="login"> LOGIN </div>
    <div class="news1"> ----- NEWS ----- </div>
    <div class="news2"> ----- NEWS ----- </div>
    <div class="contact"> CONTACT </div>
    <div class="photo"> PHOTO </div>
    <div class="navbar-horizontal"> <NavBar /></div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style scoped>
.parent {
display: grid;
grid-template-columns: 1fr 1.2fr 1.5fr;
grid-template-rows: 1fr 4fr 3fr 2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
height: 100ev;
margin: 2em;
}

.logo { grid-area: 1 / 1 / 3 / 3; background-color: ghostwhite}
.login { grid-area: 1 / 3 / 2 / 4; background-color: lightcoral }
.news1 { grid-area: 3 / 1 / 4 / 2; background-color: darkslategrey}
.news2 { grid-area: 3 / 2 / 4 / 3; background-color: darkslategrey}
.contact { grid-area: 4 / 1 / 5 / 3; background-color: black}
.photo { grid-area: 2 / 3 / 5 / 4; background-color: lightgreen}
.navbar-horizontal { grid-area: 4/1/1/1; background-color: aliceblue;}
</style>
