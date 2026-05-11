<template>
  <!-- Supplements-Seite -->
  <main class="page">

    <!-- Überschrift -->
    <h1>My Supplements</h1>

    <!-- Beschreibung -->
    <p class="subtitle">
      Overview of your daily supplement routine.
    </p>

    <!-- Eigene Unterkomponente mit v-for -->
    <SupplementList />

  </main>
</template>

<script>
// Import der Unterkomponente
import SupplementList from '@/components/SupplementList.vue'

export default {
  name: 'SupplementsView',

  // Registrierung der Komponente
  components: {
    SupplementList
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 50px 30px;
  background: linear-gradient(to bottom right, #111827, #1f2937);
  color: #f9fafb;
  text-align: center;
}

h1 {
  font-size: 48px;
  color: #a855f7;
}

.subtitle {
  color: #9ca3af;
  margin-bottom: 40px;
}
</style>
