<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { Navbar }
});
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
