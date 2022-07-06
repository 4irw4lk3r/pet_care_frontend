<template>
    <div>
        <router-link :to="to" class="link" :class="{active: isActive}">
            <i class="icon" :class="icon" />
            <transition name="fade">
                <span v-if="!collapsed">
                    <slot />
                </span>
            </transition>
        </router-link>
    </div>
</template>

<script>
 import { computed } from 'vue'
 import { useRoute } from 'vue-router'
 import { collapsed } from './state'

export default {
    props: {
        to: {type: String, required: true },
        icon: { type: String, required: true }
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to);
    }
 
};


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>