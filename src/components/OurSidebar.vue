<template>
    <div class="sidebar">
        <div class="header-sidebar">
            <h4>App name</h4>
            <p>admin</p>
        </div>
        <div class="sidebar-content">
            <router-link class="dash-link" @click="closeSideBar"
                to="/dashboard">
                <i class="fas fa-tachometer-alt"></i>dashboard
            </router-link>
            <router-link class="dash-link" @click="closeSideBar"
                to="/dashboard/employe">
                <i class="fas fa-list"></i>add employe
            </router-link>
            <router-link class="dash-link" @click="closeSideBar"
                to="/dashboard/service">
                <i class="fas fa-add"></i>add service
            </router-link>
            <br>
            <br>
            <br>
        </div>
    </div>
</template>


<script>
export default {
    name: "OurSidebar",
    data() {
        return {
        };
    },
    methods: {
        closeSideBar() {
            if (window.innerWidth <= 910) {
                this.toggleSidebar();
            }
        },
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
    },
    mounted() {
        // this.$store.state.user = JSON.parse(localStorage.getItem('user'))
    }
};
</script>

<style scoped>
.header-sidebar {
    padding: 10px;
}

.sidebar {
    width: 250px;
    background-color: var(--sidebar_bg);
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;

}

.sidebar-content {
    overflow-y: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0px 0;
}

.header-sidebar h4 {
    margin: 0;
    color: var(--white);
}

.header-sidebar p {
    margin: 0;
    color: var(--gray_p);
}

.dash-link {
    padding: 15px;
    text-decoration: none;
    color: var(--gray_eee);
    display: flex;
    gap: 10px;
    border-radius: 0 10px 10px 0;
}

.dash-link:hover {
    background: #f5983a;
    text-decoration: none;
    color: #fff;
    display: flex;
    gap: 10px;
}

.router-link-exact-active {
    border-left: 4px solid #4285f4;
}
</style>
