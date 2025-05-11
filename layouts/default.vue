<template>
    <div>
      <header class="site-header">
        <NowPlaying />
      </header>
  
      <div class="background-wrapper"></div>
      <div class="background-overlay"></div>
  
      <main>
        <slot />
      </main>
  
      <footer class="site-footer">
        <p>&copy; {{ new Date().getFullYear() }} KTEQ-FM</p>
        <nav>
          <NuxtLink to="/faq">FAQ</NuxtLink> |
          <NuxtLink to="/history">History</NuxtLink> |
          <a href="https://publicfiles.fcc.gov/">FCC Public File</a>
        </nav>
      </footer>
    </div>
  </template>
  
  <script setup>
  import NowPlaying from '../components/NowPlaying.vue';
  </script>
  
  <style scoped>
  .site-header,
  main,
  .site-footer {
    position: relative;
    z-index: 1;
  }
  
  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background: #1f1f1f;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  main {
  min-height: calc(100vh - 205px); /* header (80px) + footer (80px) */
  padding-bottom: 2rem;
}
  
  .site-footer {
    text-align: center;
    padding: 1rem;
    background: #1f1f1f;
    color: #ccc;
    font-size: 0.9rem;
  }
  
  .background-wrapper {
    position: fixed;
    inset: 0;
    background-image: url('/assets/img/background.png');
    background-size: cover;
    background-position: center;
    z-index: -1000;
    pointer-events: none;
  }
  
  .background-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -999;
    pointer-events: none;
  }
  </style>
  