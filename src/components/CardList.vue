<template>
    <div class="container">
        <div class="row">
          <div v-for="info in infos" :key="info.id">
              <Card :pet="info" />
          </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import getDashboardInfo from '../composables/getDashboardInfo';

export default {
  components: { Card },
  setup() {
    const { infos, error, load } = getDashboardInfo();
    load();
    return { infos, error };
  },
};
</script>

<style lang="scss" scoped>

</style>
