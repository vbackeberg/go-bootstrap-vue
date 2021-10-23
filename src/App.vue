<template>
  <navbar></navbar>
  <main class="mt-4">
    <router-view></router-view>
  </main>
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
$secondary: #4d4d4d;
$primary: #4a49cb;
$danger: #fc4a4a;
$warning: #fc9a1a;

$btn-font-weight: 600;

@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
</style>
