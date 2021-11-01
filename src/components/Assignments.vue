<template>
  <div></div>
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
