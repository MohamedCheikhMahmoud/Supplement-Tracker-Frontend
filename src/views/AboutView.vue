<template>
  <!-- About-Seite mit professioneller Projektbeschreibung -->
  <main class="about">

    <!-- Hauptkarte mit Projektinformationen -->
    <section class="about-card">

      <!-- Kleine Überschrift oberhalb des Titels -->
      <p class="eyebrow">
        About the Project
      </p>

      <!-- Projektname -->
      <h1>MySupps</h1>

      <!-- Persönlicher Hintergrund der Projektidee -->
      <p class="intro">
        The idea behind MySupps originated from a personal problem I experienced
        while regularly going to the gym and trying to maintain a structured
        supplement routine.
      </p>

      <p class="intro">
        Although supplements can support fitness, recovery and overall health
        goals, I often struggled to consistently track my intake. It was difficult
        to remember when supplements had to be taken, which dosage was required
        or whether I had already taken them during the day.
      </p>

      <p class="intro">
        Over time, this lack of structure made it harder to stay consistent.
        In some cases, I even stopped taking certain supplements completely
        because there was no simple and effective way to manage them.
      </p>

      <p class="intro">
        This experience led to the question of why there are many modern
        applications for workout planning and fitness progress tracking, but only
        few simple solutions that focus on supplement management.
      </p>

      <p class="intro">
        Based on this motivation, MySupps was created as a user-friendly web
        application that helps users organize supplements, track intake status
        and build long-term consistency in their daily health and fitness routine.
      </p>

      <!-- Projektziel -->
      <div class="info-block">
        <h2>Project Goal</h2>
        <p>
          The goal of MySupps is to provide a clean, modern and easy-to-use
          platform for supplement tracking. Users should be able to manage their
          daily routine, keep an overview of their intake and stay consistent
          over time.
        </p>
      </div>

      <!-- Zielgruppe -->
      <div class="info-block">
        <h2>Target Users</h2>
        <p>
          MySupps is designed for people who regularly take supplements, such as
          fitness users, students, athletes or anyone who wants to organize their
          health routine in a more structured way.
        </p>
      </div>

      <!-- Funktionen der App -->
      <div class="info-block">
        <h2>Core Functions</h2>

        <ul>
          <li>Overview of all supplements</li>
          <li>Daily intake status</li>
          <li>Search function for supplements</li>
          <li>Progress overview</li>
          <li>Clear dosage, category and intake time information</li>
          <li>Simple status update for taken or open supplements</li>
        </ul>
      </div>

      <!-- Aktueller Projektstand -->
      <div class="info-block">
        <h2>Current Project Status</h2>
        <p>
          The current version focuses on the basic structure of the application:
          a homepage, a supplement overview, reusable components, interactive
          tracking elements and a modern user interface.
        </p>
      </div>

    </section>

  </main>
</template>

<script>
// About-Seite der Anwendung
export default {
  name: 'AboutView'
}
</script>

<style scoped>
/* Hintergrund der About-Seite */
.about {
  min-height: 100vh;
  padding: 70px 30px;
  background: linear-gradient(to bottom right, #111827, #1f2937);
  color: #f9fafb;
}

/* Hauptkarte der About-Seite */
.about-card {
  max-width: 950px;
  margin: 0 auto;
  background: rgba(31, 41, 55, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 45px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

/* Hover- und Glow-Effekt der Karte */
.about-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 12px 35px rgba(139, 92, 246, 0.35),
    0 0 25px rgba(168, 85, 247, 0.25);
}

/* Kleine Projekt-Kategorie */
.eyebrow {
  color: #a855f7;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Haupttitel */
h1 {
  font-size: 54px;
  color: #f9fafb;
  margin-bottom: 20px;
}

/* Einführungstexte */
.intro {
  font-size: 18px;
  color: #d1d5db;
  line-height: 1.9;
  margin-bottom: 18px;
}

/* Einzelne Inhaltsbereiche */
.info-block {
  margin-top: 35px;
}

/* Abschnittsüberschriften */
h2 {
  color: #a855f7;
  margin-bottom: 12px;
}

/* Normale Texte und Listenelemente */
p,
li {
  color: #d1d5db;
  line-height: 1.8;
}

/* Liste der Funktionen */
ul {
  padding-left: 25px;
}
</style>
