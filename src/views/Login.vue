<!-- src/views/LoginPage.vue -->
<template>
  <div class="login-container">
    <h1>Page de Connexion</h1>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="username">Nom d'utilisateur :</label>
        <input
          type="text"
          id="username"
          v-model="form.username"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        />
      </div>

      <button type="submit" class="submit-button">Se connecter</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>

    <p class="register-link">
      Pas encore de compte ? 
      <router-link to="/register">S'inscrire ici</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      error: null,
      successMessage: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        this.error = null;
        const response = await axios.post('http://localhost:8000/api/token/', {
          username: this.form.username, // Utilisation de "username"
          password: this.form.password,
        });
        
        localStorage.setItem('token', response.data.access);
        this.successMessage = 'Connexion réussie !';
        this.$router.push('/feed');
        
      } catch (error) {
        this.error = error.response?.data?.detail || 'Erreur lors de la connexion. Veuillez vérifier vos informations.';
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-container h1 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.2);
}

.submit-button {
  padding: 0.8rem;
  background-color: #4CAF50;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
  font-weight: 600;
}

.success {
  color: #27ae60;
  margin-top: 1rem;
  font-weight: 600;
}

.register-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #3498db;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
