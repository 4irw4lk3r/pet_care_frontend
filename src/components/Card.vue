<template>
    <!-- <div class="row"> -->
        <div class="col s6">
            <div class="card">
                <div class="card-content">
                    <span class="card-title green lighten-3 white-text thick">
                        {{pet.name}} - {{pet.age}} anos
                    </span>
                    <div class="section">
                        <span class="thick">Últimos Eventos</span>
                        <p v-for="di in pet.lastestEvents" :key="di">
                            {{di}}
                        </p>
                    </div>
                    <div class="section">
                        <span class="title">Últimas Vacinas</span>
                        <p v-for="dv in pet.lastestVaccine" :key="dv">
                            {{dv}}
                        </p>
                    </div>
                    <div class="card-action">
                        <a href="#">Show medical history </a>
                        <a href="#">Add new appointement </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  props: ['pet'],
};
</script>

<style scoped>

.title {
  font-weight: bold;
}

</style>
