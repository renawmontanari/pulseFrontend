<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showUserMenu = ref(false);

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};

const logout = () => {
  router.push("/");
};
</script>

<template>
  <header class="pulse-header">
    <div class="pulse-logo-container">
      <img class="logo" src="../assets/logo/logopulse3.png" alt="Logo" />
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/dashboardpulse" class="nav-link">PAINEL</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/collaborators" class="nav-link">COLABORADORES</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pulsebacks" class="nav-link">PULSEBACKS</router-link>
        </li>
        <li class="nav-item user-avatar" @click="toggleUserMenu">
          <a href="#" class="avatar-link" @click.prevent>
            <img
              src="https://i.pravatar.cc/150?img=56"
              alt="Foto do colaborador"
              class="avatar-image"
            />
          </a>
          <div v-if="showUserMenu" class="pulse-user-menu">
            <router-link to="/profilepulse" class="menu-item">Meu Perfil</router-link>
            <button @click="logout" class="menu-item">Sair</button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.pulse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.pulse-logo-container {
  height: 50px;
}

.logo {
  height: 100%;
  object-fit: contain;
  border-radius: 3px;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #01aac1;
}

.nav-link.router-link-active {
  color: #01aac1;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #01aac1;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #01aac1;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.user-avatar {
  margin-left: 1rem;
  position: relative;
  cursor: pointer;
}

.avatar-link {
  display: flex;
  align-items: center;
}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #01aac1;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.avatar-image:hover {
  transform: scale(1.1);
  border-color: #4a5568;
}

.pulse-user-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 180px;
  padding: 0.5rem 0;
  z-index: 1000;
}

.menu-item {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #4a5568;
  text-decoration: none;
  transition: all 0.3s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f7fafc;
  color: #01aac1;
}

@media (max-width: 768px) {
  .pulse-header {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-list {
    margin-top: 1rem;
    gap: 1rem;
  }

  .user-avatar {
    margin-left: 0;
  }
}
</style>
