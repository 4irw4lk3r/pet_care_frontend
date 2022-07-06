<template>
  <Sidebar />
<div>
  <router-view/>
</div>
</template>
<script>
import Sidebar from '@/components/sidebar/Sidebar'

export default {
   components: { Sidebar },
};
</script>
