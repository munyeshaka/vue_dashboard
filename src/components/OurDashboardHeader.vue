<template>
    <div class="dashboard-header">
        <i id="icon-menu" class="fas fa-bars" @click="toggleSidebar"></i>
    </div>
</template>

<script>

export default {
    name: 'OurDashboardHeader',
    data() {
        return {
        };
    },
    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
    },
};
</script>

    
<style scoped>
.dashboard-header {
    background-color: #a110a1;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
}

#icon-menu {
    padding: 13px;
    font-size: 20px;
}
</style>
    