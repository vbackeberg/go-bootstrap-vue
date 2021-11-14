<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HttpService } from "@/services/Http.service";
import { Boid } from "@/services/data/boids";

export default defineComponent({
  name: "Boids",

  async created() {
    this.boids = await HttpService.getBoids();
    this.loading = false;
  },

  data() {
    return {
      loading: true,
      boids: [] as Boid[]
    };
  }
});
</script>

<style scoped></style>
