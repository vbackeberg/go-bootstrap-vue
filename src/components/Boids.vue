<template>
  <div class="container">
    <h1 class="mb-5">Available Boids</h1>
    <div class="d-flex justify-content-end mb-3">
      <button
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#addBoidModal"
      >
        Add Boid
      </button>
    </div>
    <table class="table table-hover">
      <thead class="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Availabe from</th>
          <th scope="col">Skillset</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="boid in boids" v-bind:key="boid.id">
          <td>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
            </div>
          </td>
          <td>{{ boid.firstName }}</td>
          <td>{{ boid.lastName }}</td>
          <td>{{ boid.availableFrom }}</td>
          <td>{{ boid.skillset }}</td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="loading"
      class="position-absolute top-50 start-50 translate-middle d-flex gap-3"
    >
      <div class="spinner-grow text-primary" role="status"></div>
      <div
        class="spinner-grow text-primary text-opacity-75"
        role="status"
      ></div>
      <div
        class="spinner-grow text-primary text-opacity-50"
        role="status"
      ></div>
      <div
        class="spinner-grow text-primary text-opacity-25"
        role="status"
      ></div>
    </div>
  </div>

  <div class="modal fade" id="addBoidModal" tabindex="-1">
    <div
      class="modal-dialog modal-lg modal-fullscreen-md-down modal-dialog-centered"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addBoidModalLabel">Add new boid</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="container-fluid">
              <div class="row row-cols-2">
                <div class="col">
                  <label for="first-name" class="col-form-label"
                    >First name</label
                  >
                  <input type="text" class="form-control" id="first-name" />
                </div>
                <div class="col">
                  <label for="last-name" class="col-form-label"
                    >Last name</label
                  >
                  <input type="text" class="form-control" id="last-name" />
                </div>
              </div>
              <div class="row row-cols-2">
                <div class="col">
                  <label for="available-from" class="col-form-label"
                    >Available from</label
                  >
                  <input class="form-control" id="available-from" />
                </div>
                <div class="col">
                  <label for="skillset" class="col-form-label">Skillset</label>
                  <textarea class="form-control" id="skillset"></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  </div>
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
