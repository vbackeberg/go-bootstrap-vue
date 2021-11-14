<template>
  <navbar></navbar>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import { Modal } from "bootstrap";

export default defineComponent({
  name: "App",
  components: { Navbar },

  updated() {
    document
      .querySelectorAll('[data-bs-toggle="modal"]')
      .forEach(modalTrigger => {
        Modal.getOrCreateInstance(modalTrigger);
      });
  }
});
</script>

<style lang="scss"></style>
