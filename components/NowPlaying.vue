<template>
    <div class="now-playing">
      <div class="branding">
        <NuxtLink to="/">
            <img src="/assets/img/logo-shadow.png" alt="KTEQ Logo" class="header-logo" />
        </NuxtLink>
      </div>
      <div class="controls">
        <button @click="togglePlayback" :aria-label="isPlaying ? 'Pause stream' : 'Play stream'">
          <span v-if="isPlaying">⏸</span>
          <span v-else>▶</span>
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="volume"
          @input="updateVolume"
        />
      </div>
      <audio ref="player" :src="streamUrl" preload="none" />
      <span class="station-text">Stream KTEQ-FM 91.3 Rapid City</span>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const streamUrl = 'http://kteq-streamer.sdsmt.edu:8000/kteq_high';
  const isPlaying = ref(false);
  const volume = ref(0.8);
  const player = ref(null);
  
  function togglePlayback() {
    if (!player.value) return;
    if (isPlaying.value) {
      player.value.pause();
    } else {
      player.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
  
  function updateVolume() {
    if (player.value) {
      player.value.volume = volume.value;
    }
  }
  
  onMounted(() => {
    updateVolume();
  });
  </script>
  
  <style scoped>
  .now-playing {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-color: #1f1f1f;
    padding: 0.1rem 1rem;
    border-radius: 8px;
    z-index: 1100;
    position: relative;
  }
  
  .branding {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .header-logo {
    height: 60px;
    width: auto;
  }
  
  .station-text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.25rem;
    color: #fff;
    white-space: nowrap;
  }
  
  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fceb00;
  cursor: pointer;
  z-index: 10;
  position: relative;
}
  
  input[type='range'] {
    appearance: none;
    width: 100px;
    height: 6px;
    background: #444;
    border-radius: 4px;
    outline: none;
  }
  
  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fceb00;
    cursor: pointer;
    margin-top: -4px;
  }
  
  input[type='range']::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fceb00;
    cursor: pointer;
  }
  </style>
  