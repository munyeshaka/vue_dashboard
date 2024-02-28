<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

  <router-view />
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {}
  },
  components: {},
  methods: {
  },
  // computed: {
  //   logged_in() {
  //     return this.$store.getters.getLogged_in;
  //   }
  // },
  mounted() {
    // this.$store.state.user = JSON.parse(localStorage.getItem('user'))
  }


})
</script>


<style>
:root {
  --bg: #f9f9f9;
  --gray_eee: #eee;
  --form_bg: #ddd;
  --white: #fff;
  --txt_color: #2a2a2e;
  --red: #e74a3b;
  --sidebar_bg: #2c3e50;
}
body {
    margin: 0px;
    padding: 0px;
    color: var(--txt_color);
    background-color: var(--bg);
}
.content-page{
  margin-top: 50px;
}
</style>
