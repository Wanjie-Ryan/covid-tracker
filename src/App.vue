<template>
  <HeaderComponent />

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";

export default {
  name: "App",

  components: {
    HeaderComponent,
  },
};
</script>
