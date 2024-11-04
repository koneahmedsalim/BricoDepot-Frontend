// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import ExploreTopics from '@/views/ExploreTopics.vue';
import MyTopics from '@/views/MyTopics.vue';
import MyAnswers from '@/views/MyAnswers.vue';
import FeedPage from '@/views/Feed.vue';
import CreatePost from "@/views/CreatePost.vue";
import RegisterPage from '@/views/Register.vue'; // Renomme si nécessaire
import LoginPage from '@/views/Login.vue'; // Assure-toi que le nom est cohérent

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage, // Utilise le composant importé ici
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: CreatePost,
  },
  {
    path: '/explore',
    name: 'ExploreTopics',
    component: ExploreTopics,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage, // Assure-toi que le nom est cohérent
  },
  {
    path: '/my-topics',
    name: 'MyTopics',
    component: MyTopics,
  },
  {
    path: '/my-answers',
    name: 'MyAnswers',
    component: MyAnswers,
  },
  {
    path: '/feed',
    name: 'FeedPage',
    component: FeedPage,
    meta: { requiresAuth: true }, // Exemple de méta pour la protection
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Exemple de garde de navigation pour vérifier l'authentification
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isUserAuthenticated()) {
    next({ name: 'Login' }); // Rediriger vers la page de connexion
  } else {
    next();
  }
});

// Fonction pour vérifier l'authentification de l'utilisateur
function isUserAuthenticated() {
  // Remplace ceci par ta logique d'authentification
  const token = localStorage.getItem('token'); // Par exemple, vérifie si un token est présent
  return !!token; // Retourne vrai si le token existe
}

export default router;
