<script lang="ts">
export default {
  name: "SeekPulsebacks",
};
</script>

<template>
  <div class="pulse-seek-container">
    <div class="pulse-header-section">
      <h2 class="pulse-main-title">Meus Pulsebacks</h2>
      <div class="pulse-divider-short"></div>
    </div>

    <div class="pulse-tabs">
      <button class="pulse-tab">Enviados</button>
      <button class="pulse-tab">Recebidos</button>
    </div>

    <div class="pulse-search-container">
      <div class="pulse-search-input">
        <svg
          class="pulse-search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="search" class="pulse-search" placeholder="Buscar Pulsebacks..." />
      </div>
    </div>

    <div class="pulse-recent-item">
      <img src="https://i.pravatar.cc/150?img=56" class="pulse-recent-avatar" alt="João Silva" />
      <div class="pulse-recent-content">
        <div class="pulse-recent-header">
          <div class="pulse-recent-info">
            <span class="pulse-recent-name">João Silva</span>
            <div class="pulse-tag-container">
              <span class="pulse-tag pulse-tag-private">Privado</span>
              <span class="pulse-tag pulse-tag-sender">Remetente</span>
              <span class="pulse-tag pulse-tag-recipient">Destinatário</span>
            </div>
          </div>
          <span class="pulse-recent-time">2h atrás</span>
        </div>
        <p class="pulse-recent-message">Ótimo trabalho na entrega do projeto!</p>
        <button class="pulse-view-button">Ver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pulse-seek-container {
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
}

.pulse-header-section {
  margin-bottom: 1.5rem;
}

.pulse-main-title {
  color: #4a5568;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.pulse-divider-short {
  height: 3px;
  width: 60px;
  background: #01aac1;
  border-radius: 3px;
  margin-bottom: 1.5rem;
}

.pulse-tabs {
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}

.pulse-tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #718096;
  position: relative;
  transition: all 0.3s ease;
}

.pulse-tab:hover {
  color: #01aac1;
}

.pulse-tab.active {
  color: #01aac1;
  font-weight: 600;
}

.pulse-tab.active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #01aac1;
  border-radius: 3px 3px 0 0;
}

.pulse-search-container {
  margin-bottom: 1rem;
}

.pulse-search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.pulse-search-icon {
  position: absolute;
  left: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  color: #a0aec0;
}

.pulse-search {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #4a5568;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.pulse-search:focus {
  outline: none;
  border-color: #01aac1;
  box-shadow: 0 0 0 3px rgba(1, 170, 193, 0.1);
  background-color: white;
}

.pulse-recent-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(74, 85, 104, 0.03);
  border: 1px solid rgba(74, 85, 104, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 0.75rem;
}

.pulse-recent-item:hover {
  background-color: rgba(1, 170, 193, 0.05);
  border-color: rgba(1, 170, 193, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.pulse-recent-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  flex-shrink: 0;
}

.pulse-recent-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pulse-recent-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.pulse-recent-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pulse-recent-name {
  font-weight: 600;
  color: #4a5568;
  font-size: 1rem;
}

.pulse-tag-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.pulse-tag {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.pulse-tag-private {
  background-color: rgba(237, 137, 54, 0.1);
  color: #ed8936;
  border: 1px solid rgba(237, 137, 54, 0.2);
}

.pulse-tag-sender {
  background-color: rgba(1, 170, 193, 0.1);
  color: #01aac1;
  border: 1px solid rgba(1, 170, 193, 0.2);
}

.pulse-tag-recipient {
  background-color: rgba(159, 122, 234, 0.1);
  color: #9f7aea;
  border: 1px solid rgba(159, 122, 234, 0.2);
}

.pulse-recent-time {
  font-size: 0.8rem;
  color: #a0aec0;
  white-space: nowrap;
  margin-top: 0.25rem;
}

.pulse-recent-message {
  color: #718096;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.pulse-view-button {
  align-self: flex-end;
  background: none;
  border: none;
  color: #01aac1;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.pulse-view-button:hover {
  background-color: rgba(1, 170, 193, 0.1);
}

@media (max-width: 768px) {
  .pulse-seek-container {
    padding: 1rem;
  }

  .pulse-tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .pulse-tab {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 425px) {
  .pulse-recent-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .pulse-recent-avatar {
    margin-bottom: 0.5rem;
  }

  .pulse-view-button {
    align-self: flex-start;
  }
}
</style>
