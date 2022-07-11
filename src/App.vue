<template>
<div>
  <Sidebar />
  <div class="flex-1" :style="{ 'margin-left': sidebarWidth }">
    <router-view/>
  </div>
</div>
</template>
<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
   components: { Sidebar },
   setup() {
    return { sidebarWidth }
  }
};
</script>
