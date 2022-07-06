<template>
    <div class="bg-gray-700">

        <SidebarLinks to="/" icon="mdi mdi-36px mdi-arrow-right-circle-outline" />

        <span
            class="collapse-icon"
            @click="toggleSidebar"
        >
            <i class="mdi mdi-36px mdi-arrow-right-circle-outline" />
        </span>
    </div>  
</template>

<script>
import SidebarLinks from './SidebarLinks';
import { toggleSidebar } from './state';

export default {
   props: {},
   components: {
        SvgIcon,
        SidebarLinks
   },
   setup(){
    return { toggleSidebar }
   }
};
</script>

<style>

</style>