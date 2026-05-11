<template>
  <!-- Homepage -->
  <main class="home">

    <!-- Hero-Bereich -->
    <section class="hero">
      <h1>MySupps</h1>

      <p class="subtitle">
        Your personal supplement tracker for a healthier lifestyle.
      </p>

      <p class="description">
        MySupps helps users organize supplements, track daily intake,
        manage nutrition routines and keep an overview of their health goals.
      </p>

      <!-- Button zur Liste -->
      <router-link class="start-btn" to="/supplements">
        Open Supplement List
      </router-link>
    </section>

    <!-- Feature-Karten -->
    <section class="features">
      <div class="feature-card">
        <h3>💊 Track Intake</h3>
        <p>Keep track of your daily supplement routine.</p>
      </div>

      <div class="feature-card">
        <h3>📋 Manage Supplements</h3>
        <p>Organize dosage, category and intake times clearly.</p>
      </div>

      <div class="feature-card">
        <h3>🎯 Health Goals</h3>
        <p>Support your fitness, recovery and nutrition goals.</p>
      </div>
    </section>

  </main>
</template>

<script>
// Homepage-Komponente
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  padding: 70px 30px;
  background: linear-gradient(to bottom right, #111827, #1f2937);
  color: #f9fafb;
}

.hero {
  text-align: center;
  max-width: 850px;
  margin: 0 auto 70px auto;
}

.hero h1 {
  font-size: 72px;
  color: #a855f7;
}

.subtitle {
  font-size: 24px;
  color: #d1d5db;
}

.description {
  color: #9ca3af;
  line-height: 1.9;
  margin-bottom: 40px;
}

.start-btn {
  display: inline-block;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  text-decoration: none;
  padding: 16px 30px;
  border-radius: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 10px 35px rgba(139, 92, 246, 0.3);
}

.start-btn:hover {
  transform: translateY(-5px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.45),
    0 0 25px rgba(168, 85, 247, 0.35);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
  max-width: 1100px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(31, 41, 55, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 30px;
  border-radius: 24px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.35),
    0 0 25px rgba(168, 85, 247, 0.25);
}

.feature-card h3 {
  color: #a855f7;
}

.feature-card p {
  color: #d1d5db;
}
</style>
