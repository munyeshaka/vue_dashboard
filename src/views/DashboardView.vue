<template>
    <div class="dashboard">
        <div class="dashboard-body">
            <div v-if="this.$store.state.showSidebar" class="dashboard-left">
                <OurSidebar />
            </div>
            <div class="main-content" @click="closeSideBar">
                <div class="dashboard-header" @click="keepOpen">
                    <OurDashboardHeader />
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>


<script>
import OurDashboardHeader from "@/components/OurDashboardHeader.vue";
import OurSidebar from "@/components/OurSidebar.vue";

export default {
    name: "OurDashboard",
    components: {
        OurDashboardHeader,
        OurSidebar,
    },
    data() {
        return {
            mobile: null,
        };
    },
    methods: {
        checkScreen() {
            this.mobile = window.innerWidth <= 910;
            this.$store.state.showSidebar = !this.mobile;
        },
        toggleSidebar() {
            this.$store.state.showSidebar = !this.$store.state.showSidebar;
        },
        closeSideBar() {
            if (window.innerWidth <= 910) {
                this.$store.state.showSidebar = false
            }
        },
        keepOpen(event) {
            event.stopPropagation();
        },
    },
    mounted() {
        this.checkScreen();
        window.addEventListener("resize", this.checkScreen);
    },
};
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.dashboard-header {
    position: fixed;
    width: 100vw;
}

.dashboard-body {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    /* background-color: rgba(0, 0, 0, 0.3); */

}
</style>