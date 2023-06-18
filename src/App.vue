/* eslint-disable */
<template>
  <div id="app" class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
