<template>
    <div class="sidebar bg-gray-600
     fixed top-0 bottom-0 left-0 lg:left-0 p-2 h-screen " :style="{ width: sidebarWidth }">

        <div><SidebarLinks to="/" icon="fas fa-home">Home</SidebarLinks></div>
        <div><SidebarLinks to="/owner" icon="fas fa-user">Tutores</SidebarLinks></div>        
        <div><SidebarLinks to="/pet" icon="fas fa-dog">Pet</SidebarLinks></div>
        <div><SidebarLinks to="/medical" icon="fas fa-briefcase-medical">Consulta</SidebarLinks></div>

        <span
            class="absolute bottom-0 p-3 transition duration-200 ease-linear text-white hover:text-green-500"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" />
        </span>
    </div>  
</template>

<script>
import SidebarLinks from './SidebarLinks';
import { toggleSidebar, collapsed, sidebarWidth } from './state';

export default {
   props: {},
   components: {
        SidebarLinks
   },
   setup(){
    return { collapsed, toggleSidebar, sidebarWidth }
   }
};
</script>

<style scoped>
.sidebar{
    transition: 0.3s ease;
}

</style>