<script lang="ts">
export default {
  name: "PulsebacksSummary",
};
</script>

<template>
  <div class="pulsebacks-container">
    <div class="pulse-header-section">
      <h1 class="pulse-title">Resumo dos Pulsebacks</h1>
      <div class="pulse-divider"></div>
    </div>

    <div class="pulse-stats-container">
      <div class="pulse-card sent">
        <div class="pulse-value">383</div>
        <div class="pulse-label">Pulsebacks Enviados</div>
        <div class="pulse-icon">↑</div>
      </div>

      <div class="pulse-card received">
        <div class="pulse-value">431</div>
        <div class="pulse-label">Pulsebacks Recebidos</div>
        <div class="pulse-icon">↓</div>
      </div>
    </div>

    <button class="pulse-view-all">
      <span class="pulse-view-all-text">VER TODOS</span>
      <span class="pulse-view-all-icon">↓</span>
    </button>
  </div>
</template>

<style scoped>
.pulsebacks-container {
  width: 50%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-right: 1rem;
}

.pulse-header-section {
  margin-bottom: 1.5rem;
}

.pulse-title {
  color: #4a5568;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.pulse-divider {
  height: 3px;
  background: linear-gradient(90deg, #01aac1, rgba(1, 170, 193, 0.2));
  border-radius: 3px;
}

.pulse-stats-container {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.pulse-card {
  flex: 1;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pulse-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.pulse-card.sent {
  background-color: rgba(1, 170, 193, 0.1);
  border: 1px solid rgba(1, 170, 193, 0.3);
}

.pulse-card.received {
  background-color: rgba(74, 85, 104, 0.1);
  border: 1px solid rgba(74, 85, 104, 0.3);
}

.pulse-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pulse-card.sent .pulse-value {
  color: #01aac1;
}

.pulse-card.received .pulse-value {
  color: #4a5568;
}

.pulse-label {
  color: #718096;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0.75rem;
}

.pulse-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.pulse-card.sent .pulse-icon {
  background-color: rgba(1, 170, 193, 0.2);
  color: #01aac1;
}

.pulse-card.received .pulse-icon {
  background-color: rgba(74, 85, 104, 0.2);
  color: #4a5568;
}

.pulse-view-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(1, 170, 193, 0.1);
  border: 1px solid rgba(1, 170, 193, 0.3);
  border-radius: 8px;
  color: #01aac1;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.pulse-view-all:hover {
  background-color: rgba(1, 170, 193, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(1, 170, 193, 0.1);
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
  transform: translateY(2px);
}

@media (max-width: 768px) {
  .pulsebacks-container {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  .pulse-stats-container {
    flex-direction: column;
  }
}
</style>
