<script lang="ts">
import HeaderDashboard from "@/components/HeaderPulse.vue";
import PulsebacksSummary from "@/components/dashboardPulse/PulsebacksSummary.vue";
import RecentPulsebacks from "@/components/dashboardPulse/RecentPulsebacks.vue";
import AllCollaborators from "@/components/dashboardPulse/AllCollaborators.vue";

export default {
  name: "DashboardPulse",
  components: {
    HeaderDashboard,
    PulsebacksSummary,
    AllCollaborators,
    RecentPulsebacks,
  },
};
</script>

<template>
  <HeaderDashboard />
  <div class="dashboard-container">
    <div class="metrics-row">
      <PulsebacksSummary />
      <AllCollaborators />
    </div>

    <div class="metrics-row">
      <RecentPulsebacks />
    </div>
  </div>
</template>

<style>
body {
  background-color: #1f1d20;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.dashboard-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.metrics-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
}

.metrics-row > * {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

@media (max-width: 768px) {
  .dashboard-container {
    padding: 0.5rem;
  }

  .metrics-row {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 425px) {
  body {
    overflow-x: hidden;
  }

  .dashboard-container {
    padding-right: 3rem;
  }

  .metrics-row > * {
    width: 100%;
    margin: 0;
  }
}
</style>
