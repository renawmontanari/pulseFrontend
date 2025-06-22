<template>
  <div class="pulse-collaborators-container">
    <div class="pulse-header-section">
      <h2 class="pulse-main-title">Colaboradores</h2>
      <div class="pulse-divider-short"></div>
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
        <input type="search" class="pulse-search" placeholder="Buscar colaboradores..." />
      </div>
    </div>

    <div class="pulse-collaborators-grid">
      <div class="pulse-collaborator-card">
        <div class="pulse-collaborator-header">
          <img
            src="https://i.pravatar.cc/150?img=56"
            alt="João Silva"
            class="pulse-collaborator-avatar"
          />
          <div class="pulse-collaborator-info">
            <h3 class="pulse-collaborator-name">João Silva</h3>
            <p class="pulse-collaborator-role">Desenvolvedor Front-end</p>
          </div>
        </div>
        <div class="pulse-collaborator-details">
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Departamento:</span>
            <span class="pulse-detail-value">Tecnologia</span>
          </div>
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Email:</span>
            <span class="pulse-detail-value">joao.silva@empresa.com</span>
          </div>
        </div>
        <button class="pulse-send-button">Enviar Pulseback</button>
      </div>

      <div class="pulse-collaborator-card">
        <div class="pulse-collaborator-header">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Maria Andrade"
            class="pulse-collaborator-avatar"
          />
          <div class="pulse-collaborator-info">
            <h3 class="pulse-collaborator-name">Maria Andrade</h3>
            <p class="pulse-collaborator-role">UX Designer</p>
          </div>
        </div>
        <div class="pulse-collaborator-details">
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Departamento:</span>
            <span class="pulse-detail-value">Design</span>
          </div>
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Email:</span>
            <span class="pulse-detail-value">maria.andrade@empresa.com</span>
          </div>
        </div>
        <button class="pulse-send-button">Enviar Pulseback</button>
      </div>

      <div class="pulse-collaborator-card">
        <div class="pulse-collaborator-header">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Pedro Costa"
            class="pulse-collaborator-avatar"
          />
          <div class="pulse-collaborator-info">
            <h3 class="pulse-collaborator-name">Pedro Costa</h3>
            <p class="pulse-collaborator-role">Gerente de Projetos</p>
          </div>
        </div>
        <div class="pulse-collaborator-details">
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Departamento:</span>
            <span class="pulse-detail-value">Gestão</span>
          </div>
          <div class="pulse-detail-item">
            <span class="pulse-detail-label">Email:</span>
            <span class="pulse-detail-value">pedro.costa@empresa.com</span>
          </div>
        </div>
        <button class="pulse-send-button">Enviar Pulseback</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pulse-collaborators-container {
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

.pulse-search-container {
  margin-bottom: 1.5rem;
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

.pulse-collaborators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.pulse-collaborator-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pulse-collaborator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  border-color: rgba(1, 170, 193, 0.3);
}

.pulse-collaborator-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.pulse-collaborator-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}

.pulse-collaborator-info {
  flex: 1;
}

.pulse-collaborator-name {
  color: #4a5568;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}

.pulse-collaborator-role {
  color: #718096;
  margin: 0;
  font-size: 0.9rem;
}

.pulse-collaborator-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
}

.pulse-detail-item {
  display: flex;
  justify-content: space-between;
}

.pulse-detail-label {
  color: #718096;
  font-weight: 500;
  font-size: 0.9rem;
}

.pulse-detail-value {
  color: #4a5568;
  font-weight: 500;
  text-align: right;
  font-size: 0.9rem;
}

.pulse-send-button {
  background-color: rgba(1, 170, 193, 0.1);
  color: #01aac1;
  border: 1px solid rgba(1, 170, 193, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.pulse-send-button:hover {
  background-color: rgba(1, 170, 193, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(1, 170, 193, 0.1);
}

@media (max-width: 768px) {
  .pulse-collaborators-grid {
    grid-template-columns: 1fr;
  }

  .pulse-collaborators-container {
    padding: 1rem;
  }
}

@media (max-width: 425px) {
  .pulse-collaborator-header {
    flex-direction: column;
    text-align: center;
  }

  .pulse-collaborator-info {
    text-align: center;
  }

  .pulse-detail-item {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }

  .pulse-detail-value {
    text-align: center;
  }
}
</style>
