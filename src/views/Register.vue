<!-- src/views/RegisterPage.vue -->
<template>
  <div class="register-container">
    <h1>Inscription</h1>
    <form @submit.prevent="handleRegister" class="register-form">
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
        <label for="first_name">Prénom :</label>
        <input
          type="text"
          id="first_name"
          v-model="form.first_name"
          required
        />
      </div>

      <div class="form-group">
        <label for="last_name">Nom :</label>
        <input
          type="text"
          id="last_name"
          v-model="form.last_name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email :</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
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

      <button type="submit" class="submit-button">S'inscrire</button>
    </form>
    
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>

    <p class="login-link">
      Déjà un compte ? 
      <router-link to="/login">Se connecter ici</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      form: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
      error: null,
      successMessage: null,
    };
  },
  methods: {
    async handleRegister() {
      try {
        this.error = null; 
        this.successMessage = null;

        const response = await axios.post('http://localhost:8000/api/register/', this.form);
        
        this.successMessage = 'Inscription réussie !';
        console.log('Données enregistrées :', response.data);

        // Réinitialiser le formulaire
        this.form.username = '';
        this.form.first_name = '';
        this.form.last_name = '';
        this.form.email = '';
        this.form.password = '';

      } catch (error) {
        this.error = error.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.';
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-container h1 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.register-form {
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

.login-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.login-link a {
  color: #3498db;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
