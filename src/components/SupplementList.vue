<template>
  <!-- Bereich der Supplement-Liste -->
  <section class="dashboard">

    <!-- Fortschritt -->
    <div class="progress-box">
      <h2>{{ takenCount }} / {{ supplements.length }} supplements taken today</h2>

      <!-- Fortschrittsleiste -->
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <!-- Suchfeld -->
    <input
      v-model="searchText"
      class="search-input"
      type="text"
      placeholder="Search supplements..."
    >

    <!-- Karten-Grid -->
    <div class="supplement-grid">

      <!-- v-for rendert alle gefilterten Supplements -->
      <div
        v-for="(supplement, index) in filteredSupplements"
        :key="index"
        class="supplement-card"
      >

        <!-- Kartenkopf -->
        <div class="card-header">
          <h3>{{ supplement.icon }} {{ supplement.name }}</h3>

          <span :class="supplement.taken ? 'status done' : 'status open'">
        {{ supplement.taken ? 'Taken' : 'Open' }}
      </span>
        </div>

        <!-- Supplement-Informationen -->
        <p><strong>Dosage:</strong> {{ supplement.dosage }}</p>
        <p><strong>Category:</strong> {{ supplement.category }}</p>
        <p><strong>Time:</strong> {{ supplement.time }}</p>

        <!-- Button zum Ändern des Status -->
        <button
          class="toggle-btn"
          @click="toggleTaken(supplement)"
        >
          Change Status
        </button>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SupplementList',

  // Lokale Daten
  data () {
    return {
      // Suchtext für die Filterfunktion
      searchText: '',

      // Supplement-Daten vom Backend
      supplements: []
    }
  },

  // Lädt Daten vom Spring Boot Backend
  mounted () {
    fetch('https://supplement-tracker-backend.onrender.com/supplements')
      .then(response => response.json())
      .then(data => {
        this.supplements = data.map(supplement => ({
          ...supplement,
          taken: false
        }))
      })
      .catch(error => {
        console.error('Fehler beim Laden der Supplements:', error)
      })
  },

  computed: {
  // Filtert Supplements anhand des Suchfelds
    filteredSupplements () {
      return this.supplements.filter(supplement =>
        supplement.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },

    // Zählt eingenommene Supplements
    takenCount () {
      return this.supplements.filter(supplement => supplement.taken).length
    },

    // Berechnet Fortschritt in Prozent
    progressPercent () {
      return (this.takenCount / this.supplements.length) * 100
    }
  },

  methods: {
    // Ändert den Status des ausgewählten Supplements
    toggleTaken (supplement) {
      supplement.taken = !supplement.taken
    }
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 1100px;
  margin: 0 auto;
}

/* Fortschrittsbox */
.progress-box {
  background: rgba(31, 41, 55, 0.75);
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
}

.progress-box h2 {
  color: #d1d5db;
}

/* Fortschrittsleiste */
.progress-bar {
  height: 14px;
  background: #374151;
  border-radius: 999px;
  overflow: hidden;
}

/* Gefüllter Teil der Leiste */
.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  transition: width 0.3s ease;
}

/* Suchfeld */
.search-input {
  width: 100%;
  max-width: 450px;
  padding: 14px 18px;
  margin-bottom: 35px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #1f2937;
  color: #f9fafb;
  font-size: 16px;
}

/* Grid */
.supplement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}

/* Karte */
.supplement-card {
  background: rgba(31, 41, 55, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 24px;
  color: #f9fafb;
  transition: all 0.3s ease;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
}

/* Glow-Effekt */
.supplement-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.35),
    0 0 25px rgba(168, 85, 247, 0.25);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  color: #a855f7;
}

.status {
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
}

.done {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}

.open {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
}

p {
  color: #d1d5db;
  line-height: 1.7;
}

/* Toggle-Button */
.toggle-btn {
  margin-top: 15px;
  width: 100%;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  transform: translateY(-3px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.45),
    0 0 25px rgba(168, 85, 247, 0.35);
}
</style>
