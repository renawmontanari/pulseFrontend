<script lang="ts">
export default {
  name: "RecentPulsebacks",
};
</script>

<template>
  <div class="pulse-recent-container">
    <div class="pulse-header-section">
      <h2 class="pulse-main-title">Pulsebacks Recentes</h2>
      <div class="pulse-divider-long"></div>
    </div>

    <div class="pulse-recent-list">
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
        </div>
      </div>

      <div class="pulse-recent-item">
        <img
          src="https://i.pravatar.cc/150?img=32"
          class="pulse-recent-avatar"
          alt="Maria Andrade"
        />
        <div class="pulse-recent-content">
          <div class="pulse-recent-header">
            <div class="pulse-recent-info">
              <span class="pulse-recent-name">Maria Andrade</span>
              <div class="pulse-tag-container">
                <span class="pulse-tag pulse-tag-public">Público</span>
                <span class="pulse-tag pulse-tag-sender">Remetente</span>
              </div>
            </div>
            <span class="pulse-recent-time">Ontem</span>
          </div>
          <p class="pulse-recent-message">Muito obrigada pela ajuda com o cliente!</p>
        </div>
      </div>

      <div class="pulse-recent-item">
        <img src="https://i.pravatar.cc/150?img=12" class="pulse-recent-avatar" alt="Pedro Costa" />
        <div class="pulse-recent-content">
          <div class="pulse-recent-header">
            <div class="pulse-recent-info">
              <span class="pulse-recent-name">Pedro Costa</span>
              <div class="pulse-tag-container">
                <span class="pulse-tag pulse-tag-private">Privado</span>
                <span class="pulse-tag pulse-tag-recipient">Destinatário</span>
              </div>
            </div>
            <span class="pulse-recent-time">2 dias atrás</span>
          </div>
          <p class="pulse-recent-message">Excelente colaboração na reunião!</p>
        </div>
      </div>
    </div>

    <button class="pulse-view-all pulse-view-all-recent">
      <span class="pulse-view-all-text">VER TODOS</span>
      <span class="pulse-view-all-icon">→</span>
    </button>
  </div>
</template>

<style scoped>
.pulse-recent-container {
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-top: 1.5rem;
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

.pulse-divider-long {
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #01aac1, rgba(1, 170, 193, 0.2));
  border-radius: 3px;
}

.pulse-recent-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pulse-recent-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(74, 85, 104, 0.03);
  border: 1px solid rgba(74, 85, 104, 0.05);
  transition: all 0.3s ease;
}

.pulse-recent-item:hover {
  background-color: rgba(1, 170, 193, 0.05);
  border-color: rgba(1, 170, 193, 0.1);
  transform: translateY(-2px);
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
  gap: 1rem;
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

.pulse-tag-public {
  background-color: rgba(72, 187, 120, 0.1);
  color: #48bb78;
  border: 1px solid rgba(72, 187, 120, 0.2);
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
}

.pulse-recent-message {
  color: #718096;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.pulse-view-all-recent {
  margin-top: 1.5rem;
  background-color: rgba(1, 170, 193, 0.1);
  border: 1px solid rgba(1, 170, 193, 0.2);
  color: #01aac1;
}

.pulse-view-all-recent:hover {
  background-color: rgba(1, 170, 193, 0.2);
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
  .pulse-recent-container {
    padding: 1rem;
  }

  .pulse-recent-item {
    flex-direction: column;
  }

  .pulse-recent-header {
    flex-direction: column;
  }

  .pulse-recent-time {
    align-self: flex-end;
  }
}
</style>
