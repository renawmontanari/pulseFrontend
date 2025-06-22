<script lang="ts">
export default {
  name: "AllCollaborators",
};
</script>

<template>
  <div class="pulse-collaborators-container">
    <div class="pulse-header-section">
      <h3 class="pulse-subtitle">Colaboradores</h3>
      <div class="pulse-divider-short"></div>
    </div>

    <div class="pulse-total-card">
      <div class="pulse-big-value">5</div>
      <div class="pulse-description">Total de Colaboradores</div>
    </div>

    <button class="pulse-view-all pulse-view-all-collaborators">
      <span class="pulse-view-all-text">VER TODOS</span>
      <span class="pulse-view-all-icon">→</span>
    </button>
  </div>
</template>

<style scoped>
.pulse-collaborators-container {
  width: 50%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-left: 1rem;
}

.pulse-header-section {
  margin-bottom: 1rem;
}

.pulse-subtitle {
  color: #4a5568;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.pulse-divider-short {
  height: 2px;
  width: 40px;
  background: #01aac1;
  border-radius: 2px;
  margin-bottom: 1rem;
}

.pulse-total-card {
  background-color: rgba(74, 85, 104, 0.05);
  border: 1px solid rgba(74, 85, 104, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.pulse-total-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.pulse-big-value {
  font-size: 3rem;
  font-weight: 700;
  color: #01aac1;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.pulse-description {
  color: #718096;
  font-size: 1rem;
}

.pulse-view-all-collaborators {
  background-color: rgba(74, 85, 104, 0.05);
  border: 1px solid rgba(74, 85, 104, 0.1);
  color: #4a5568;
}

.pulse-view-all-collaborators:hover {
  background-color: rgba(74, 85, 104, 0.1);
  border-color: rgba(74, 85, 104, 0.2);
}

.pulse-view-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pulse-view-all:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.pulse-view-all:active {
  transform: translateY(0);
}

.pulse-view-all-text {
  font-size: 0.9rem;
}

.pulse-view-all-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.pulse-view-all:hover .pulse-view-all-icon {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .pulse-collaborators-container {
    width: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
  }
}
</style>
