<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <ul class="menu-list">
    <li>
      <router-link to="/clock" class="menu-btn" :exact-active-class="route.path === '/clock' ? 'selected' : ''">
        <i class="bi bi-clock"></i> Relógio Online
      </router-link>
    </li>
    <li>
      <router-link to="/timer" class="menu-btn" :exact-active-class="route.path === '/timer' ? 'selected' : ''">
        <i class="bi bi-alarm"></i> Temporizador Online
      </router-link>
    </li>
    <li>
      <router-link to="/stopwatch" class="menu-btn" :exact-active-class="route.path === '/stopwatch' ? 'selected' : ''">
        <i class="bi bi-stopwatch"></i> Cronômetro Online
      </router-link>
    </li>
    <li>
      <router-link to="/countdown" class="menu-btn" :exact-active-class="route.path === '/countdown' ? 'selected' : ''">
        <i class="bi bi-hourglass-split"></i> Contagem Regressiva
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.menu-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-top: 10px;
  width: 250px;
  height: 180px;
  background-color: var(--color-background-card);
  list-style: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
}

.menu-btn {
  display: flex;
  align-items: center;
  width: 230px;
  height: 40px;
  padding-left: 11px;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  color: var(--color-icon);
  text-decoration: none;
}

@media (hover: hover) {
  .menu-btn:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.bi {
  font-size: 24px;
  padding-right: 10px;
  color: var(--color-icon);
}

.selected {
  background-color: #4675e1;
}
</style>
