<script lang="ts">
import HeaderDashboard from "@/components/HeaderPulse.vue";
import SeekPulsebacks from "@/components/pulsebacks/SeekPulsebacks.vue";

export default {
  name: "PulsebacksView",
  components: {
    HeaderDashboard,
    SeekPulsebacks,
  },
};
</script>

<template>
  <HeaderDashboard />
  <div class="dashboard-container">
    <div class="metrics-row">
      <SeekPulsebacks />
    </div>
  </div>
</template>
