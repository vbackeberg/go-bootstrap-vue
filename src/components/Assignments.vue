<template>
  <div class="container">
    <h1 class="mb-5">Assignments</h1>
    <div class="row gy-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <div v-for="assignment in assignments" v-bind:key="assignment.id">
        <div class="card shadow">
          <img src="@/assets/example-logo.png" class="img-fluid" />
          <div class="card-body">
            <h5 class="card-title">{{ assignment.name }}</h5>
            <p class="card-text">{{ assignment.description }}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-outline-danger">Delete</button>
              <button class="btn btn-outline-primary">Edit</button>
            </div>
          </div>
        </div>
      </div>

      <template v-if="loading">
        <div v-for="i in [1, 2, 3, 4]" v-bind:key="i">
          <div class="card shadow">
            <div style="height: 180px" class="bg-dark bg-opacity-25"></div>
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <div class="bg-dark bg-opacity-25"></div>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>

              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-outline-danger disabled placeholder col-3"
                ></button>
                <button
                  class="btn btn-outline-primary disabled placeholder col-2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Assignment } from "@/services/data/assignments";
import { HttpService } from "@/services/Http.service";

export default defineComponent({
  name: "Assignments",

  async created() {
    this.assignments = await HttpService.getAssignments();
    this.loading = false;
  },

  data() {
    return {
      loading: true,
      assignments: [] as Assignment[]
    };
  }
});
</script>

<style scoped></style>
