import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; // Assure-toi d'importer axios ici

// Configure Axios pour utiliser le token JWT dans chaque requête
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const app = createApp(App);

app.use(router); // Utilise le routeur avant de monter l'application
app.mount('#app'); // Monte l'application une seule fois
