<template>
  <!-- Gesamter App-Rahmen -->
  <div id="app">

    <!-- Moderne Navigation -->
    <nav class="navbar">
      <router-link class="logo" to="/">
        MySupps
      </router-link>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/supplements">Supplements</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>

    <!-- Hier wird die aktuelle Seite angezeigt -->
    <router-view />

    <!-- Footer der App -->
    <footer class="footer">
      MySupps © 2026 - Supplement Tracker WebApp
    </footer>

  </div>
</template>

<style>
/* Grunddesign der gesamten App */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #111827;
}

* {
  box-sizing: border-box;
}

/* Navigation oben */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  background: #111827;
}

/* Logo */
.logo {
  color: #a855f7;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}

/* Navigationslinks */
.nav-links {
  display: flex;
  gap: 20px;
}

/* Einzelne Links */
.nav-links a {
  color: #d1d5db;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Aktiver Link */
.nav-links a.router-link-exact-active {
  color: #a855f7;
}

/* Hover-Effekt */
.nav-links a:hover {
  color: #c084fc;
}

/* Footer */
.footer {
  text-align: center;
  padding: 25px;
  background: #111827;
  color: #9ca3af;
}
</style>
