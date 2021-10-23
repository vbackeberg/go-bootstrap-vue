<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/assignments">
        <img src="@/assets/brand.svg" height="38" width="38" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTop"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTop">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/assignments"
              >Assignments</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/boids">Boids</router-link>
          </li>
        </ul>
        <button class="btn btn-primary">
          <i class="bi bi-person-fill"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>

<style scoped></style>
