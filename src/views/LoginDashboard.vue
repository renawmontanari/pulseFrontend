<script lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginDashboard",
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const isDemoLogin = ref(false);

    const handleLogin = async (e: Event) => {
      e.preventDefault();

      if (isDemoLogin.value) {
        handleDemoLogin();
        return;
      }

      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          username: username.value,
          password: password.value,
        });

        localStorage.setItem("authToken", response.data.access_token);
        router.push("/dashboardPulse");
      } catch (error) {
        errorMessage.value = "Credenciais Pulse inválidas. Por favor, tente novamente.";
        console.error("Login Pulse error:", error);
      }
    };

    const handleDemoLogin = () => {
      localStorage.setItem("authToken", "demo-token-pulse");
      router.push("/dashboardPulse");

      isDemoLogin.value = true;
      setTimeout(() => {
        isDemoLogin.value = false;
      }, 3000);
    };

    return {
      username,
      password,
      errorMessage,
      isDemoLogin,
      handleLogin,
      handleDemoLogin,
    };
  },
};
</script>

<template>
  <main class="login-container">
    <div class="login-card">
      <div class="logo-container">
        <img class="logo" src="../assets/logo/logopulse2.png" alt="Logo Pulse" />
      </div>

      <form @submit="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username" class="input-label">Usuário</label>
          <input
            id="username"
            type="text"
            class="input-field"
            placeholder="Seu Pulselover..."
            v-model="username"
            required
          />
        </div>

        <div class="form-group">
          <label for="password" class="input-label">Senha</label>
          <input
            id="password"
            type="password"
            class="input-field"
            placeholder="Sua Pulseword..."
            v-model="password"
            required
          />
        </div>

        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>

        <button type="submit" class="login-button">Pulsar</button>

        <button type="button" class="demo-login-button" @click="handleDemoLogin">
          <span v-if="!isDemoLogin">Entrar como Demo</span>
          <span v-else class="demo-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Acesso concedido!
          </span>
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #363636 0%, #1f1d20 100%);
}

.login-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
}

.login-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.logo-container {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  max-width: 180px;
  height: auto;
  border-radius: 4px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-label {
  font-size: 14px;
  color: #4a5568;
  font-weight: 500;
}

.input-field {
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #01aac1;
  box-shadow: 0 0 0 3px rgba(1, 170, 193, 0.1);
}

.login-button {
  background: linear-gradient(to right, #01aac1, #028697);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(1, 170, 193, 0.4);
}

.demo-login-button {
  background: linear-gradient(to right, #4a5568, #2d3748);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.demo-login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(74, 85, 104, 0.3);
}

.demo-success {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #48bb78;
  font-weight: 600;
  animation: pulse 0.5s ease;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.error-message {
  color: #e53e3e;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
}

.login-divider {
  display: flex;
  align-items: center;
  margin: 15px 0;
  color: #a0aec0;
  font-size: 14px;
}

.login-divider::before,
.login-divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}

.login-divider span {
  padding: 0 10px;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }

  .demo-login-button {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
