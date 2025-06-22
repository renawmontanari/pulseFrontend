<script lang="ts">
import SeeCollaborators from "@/components/collaboratorPulse/SeeCollaborators.vue";
import HeaderDashboard from "@/components/HeaderPulse.vue";

export default {
  name: "CollaboratorsView",
  components: {
    HeaderDashboard,
    SeeCollaborators,
  },
};
</script>

<template>
  <HeaderDashboard />
  <div class="dashboard-container">
    <div class="metrics-row">
      <SeeCollaborators />
    </div>
  </div>
</template>
