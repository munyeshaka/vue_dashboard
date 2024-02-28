import { createStore } from 'vuex'
// import axios from 'axios';
// import router from '../router'

export default createStore({
    state: {
        user: '',
        isLoading: false,
        showSidebar: true,
    },
    mutations: {
        // SET_LOGGED_IN(state, value) {
        //     state.logged_in = value;
        // },
        toggleSidebar(state) {
            state.showSidebar = !state.showSidebar;
        },
    },
    actions: {
        // signup({ commit, dispatch }, user) {
        //     this.loading = true

        //     console.log('signup action called with user:', user);
        //     return new Promise((resolve, reject) => {
        //         // commit('auth_request');
        //         axios({
        //             url: '/signup/',
        //             data: user,
        //             method: 'POST',
        //         })
        //             .then(response => {
        //                 const access = response.data.access;
        //                 const refresh = response.data.refresh;
        //                 // axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        //                 commit('auth_success', { access, refresh });
        //                 dispatch('login');
        //                 resolve(response);
        //             })
        //             .catch(error => {
        //                 commit('auth_error');
        //                 reject(error);
        //             });
        //     });
        // },
        // setLogged_in({ commit }, value) {
        //     commit('SET_LOGGED_IN', value);
        // }
    },
    modules: {
    },
    getters: {
        // getLogged_in: state => state.logged_in
    },
    computed: {
    },
    mounted() {
    },
})

