<template>
  <div class="home">
    <header class="home-header">
      <h1 class="welcome-title">Bienvenue sur Brico Dépôt</h1>
      <p>La communauté de passionnés de bricolage, ouverte à tous !</p>
      <router-link to="/register" class="join-btn">Rejoindre la communauté</router-link>
    </header>

    <section class="features">
      <div class="feature">
        <h2>Partagez vos projets</h2>
        <p>Publiez des photos et des détails sur vos réalisations, inspirez les autres membres !</p>
      </div>
      <div class="feature">
        <h2>Commentez et discutez</h2>
        <p>Rejoignez les discussions, partagez des astuces, et posez des questions aux autres passionnés.</p>
      </div>
      <div class="feature">
        <h2>Tchat et abonnements</h2>
        <p>Abonnez-vous à des membres, recevez des notifications et engagez-vous dans des discussions privées.</p>
      </div>
    </section>

    <section class="call-to-action">
      <p>Envie de découvrir les derniers projets des membres ?</p>
      <router-link to="/feed" class="explore-btn">Explorer le feed</router-link>
      <p>Pas encore membre ?</p>
      <router-link to="/register" class="join-btn">Rejoindre maintenant</router-link>
    </section>

    <footer class="home-footer">
      <p>&copy; 2024 Brico Dépôt - Une communauté pour les bricoleurs</p>
    </footer>

    <!-- Animation des piliers -->
    <div class="pillar hammer"></div>
    <div class="pillar wrench"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* Style de base de la page */
.home {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 1.5rem;
  min-height: 100vh;
  background-color: #f9f9f9;
  position: relative;
}

/* En-tête */
.home-header {
  background-color: #42b983;
  color: white;
  padding: 3rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: bold;
}

/* Boutons */
.join-btn, .explore-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff8c00;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
}

.features {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
}

.feature {
  width: 30%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Fixe le pied de page */
.home-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

/* Styles des piliers */
.pillar {
  position: absolute;
  width: 750px; /* Largeur importante pour l'effet pilier */
  height: 700px; /* Hauteur étendue pour simuler un pilier */
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.9;
  transform-origin: center;
  animation: rotatePillar 10s linear infinite;
}

.hammer {
  background-image: url('~@/assets/marteaus.png'); /* Image de marteau pour le pilier gauche */
  top: 50%;
  left: -60px; /* Position décalée à gauche */
}

.wrench {
  background-image: url('~@/assets/tournevis.png'); /* Image de clé pour le pilier droit */
  top: 45%;
  right: -60px; /* Position décalée à droite */
}

/* Animation de rotation lente */
@keyframes rotatePillar {
  0% {
    transform: rotateY(0deg);
  }
  10% {
    transform: rotateY(10deg);
  }
  20% {
    transform: rotateY(30deg);
  }
  30% {
    transform: rotateY(60deg);
  }
  40% {
    transform: rotateY(100deg);
  }
  50% {
    transform: rotateY(120deg);
  }
  60% {
    transform: rotateY(180deg);
  }
  70% {
    transform: rotateY(220deg);
  }
  80% {
    transform: rotateY(280);
  }
  90% {
    transform: rotateY(320deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
