<template>
  <section class="dashboard">

    <div class="progress-box">
      <h2>{{ takenCount }} / {{ supplements.length }} supplements taken today</h2>

      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <div class="form-box">
      <h2>Add New Supplement</h2>

      <input v-model="newSupplement.name" class="search-input" type="text" placeholder="Name">
      <input v-model="newSupplement.category" class="search-input" type="text" placeholder="Category">
      <input v-model.number="newSupplement.dosage" class="search-input" type="number" placeholder="Dosage">
      <input v-model.number="newSupplement.stock" class="search-input" type="number" placeholder="Stock">
      <input v-model="newSupplement.intakeTime" class="search-input" type="text" placeholder="Time">
      <input v-model="newSupplement.notes" class="search-input" type="text" placeholder="Notes">

      <button class="toggle-btn" @click="addSupplement">
        Add Supplement
      </button>
    </div>

    <input
      v-model="searchText"
      class="search-input"
      type="text"
      placeholder="Search supplements..."
    >

    <div class="supplement-grid">
      <div
        v-for="(supplement, index) in filteredSupplements"
        :key="index"
        class="supplement-card"
      >
        <div class="card-header">
          <h3>{{ supplement.icon }} {{ supplement.name }}</h3>

          <span :class="supplement.taken ? 'status done' : 'status open'">
            {{ supplement.taken ? 'Taken' : 'Open' }}
          </span>
        </div>

        <p><strong>Dosage:</strong> {{ supplement.dosage }}</p>
        <p><strong>Category:</strong> {{ supplement.category }}</p>
        <p><strong>Time:</strong> {{ supplement.intakeTime }}</p>
        <p><strong>Notes:</strong> {{ supplement.notes }}</p>

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

  data () {
    return {
      searchText: '',
      supplements: [],

      newSupplement: {
        name: '',
        category: '',
        dosage: 0,
        stock: 0,
        intakeTime: '',
        notes: ''
      }
    }
  },

  mounted () {
    this.loadSupplements()
  },

  computed: {
    filteredSupplements () {
      return this.supplements.filter(supplement =>
        supplement.name
          .trim()
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase())
      )
    },

    takenCount () {
      return this.supplements.filter(supplement => supplement.taken).length
    },

    progressPercent () {
      if (this.supplements.length === 0) {
        return 0
      }

      return (this.takenCount / this.supplements.length) * 100
    }
  },

  methods: {
    loadSupplements () {
      fetch('https://supplement-tracker-backend.onrender.com/supplements')
        .then(response => response.json())
        .then(data => {
          this.supplements = data.map(supplement => ({
            ...supplement,
            taken: false,
            icon: this.getIcon(supplement.name)
          }))
        })
        .catch(error => {
          console.error('Fehler beim Laden der Supplements:', error)
        })
    },

    addSupplement () {
      fetch('https://supplement-tracker-backend.onrender.com/supplements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.newSupplement)
      })
        .then(response => response.json())
        .then(data => {
          this.supplements.push({
            ...data,
            taken: false,
            icon: this.getIcon(data.name)
          })

          this.newSupplement = {
            name: '',
            category: '',
            dosage: 0,
            stock: 0,
            intakeTime: '',
            notes: ''
          }
        })
        .catch(error => {
          console.error('Fehler beim Speichern:', error)
        })
    },

    toggleTaken (supplement) {
      fetch(`https://supplement-tracker-backend.onrender.com/supplements/${supplement.id}/toggle`, {
        method: 'PUT'
      })
        .then(response => response.json())
        .then(updatedSupplement => {
          supplement.taken = updatedSupplement.taken
        })
        .catch(error => {
          console.error('Fehler beim Aktualisieren:', error)
        })
    },

    getIcon (name) {
      return name === 'Vitamin D'
        ? '☀️'
        : name === 'Creatin'
          ? '💪'
          : name === 'Omega 3'
            ? '❤️'
            : name === 'Magnesium'
              ? '🌙'
              : '💊'
    }
  }
}
</script>

<style scoped>
.dashboard {
  max-width: 1100px;
  margin: 0 auto;
}

.progress-box,
.form-box {
  background: rgba(31, 41, 55, 0.75);
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
}

.progress-box h2,
.form-box h2 {
  color: #d1d5db;
}

.progress-bar {
  height: 14px;
  background: #374151;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  transition: width 0.3s ease;
}

.search-input {
  width: 100%;
  max-width: 450px;
  padding: 14px 18px;
  margin: 8px auto 18px auto;
  display: block;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #1f2937;
  color: #f9fafb;
  font-size: 16px;
}

.supplement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}

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

.toggle-btn {
  margin-top: 15px;
  width: 100%;
  max-width: 450px;
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
