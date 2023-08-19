<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import Menu from "./Menu.vue";
import Langs from "./Langs.vue";

const isMenuOpen = ref(false);
const isTimeZoneOpen = ref(false);
const pageName = ref(null);

const route = useRoute();

const pageNames = {
  "/clock": "Relógio Online",
  "/timer": "Temporizador Online",
  "/stopwatch": "Cronômetro Online",
  "/countdown": "Contagem Regressiva",
};

const togglePageName = () => {
  const name = pageNames[route.path];
  if (name) {
    pageName.value = name;
  }
};

const toggleMenu = () => {
  if (isTimeZoneOpen.value) {
    isTimeZoneOpen.value = false;
  }
  isMenuOpen.value = !isMenuOpen.value;
  return isMenuOpen.value;
};

const toggleTimeZone = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
  }
  isTimeZoneOpen.value = !isTimeZoneOpen.value;
  return isTimeZoneOpen.value;
};

const isDarkMode = ref(
  window.matchMedia("(prefers-color-scheme: dark-mode)").matches
);

const themeIcon = ref(null);
const fullscreenIcon = ref(null);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark-mode", isDarkMode.value);

  if (themeIcon.value) {
    themeIcon.value.classList.replace(
      isDarkMode.value ? "bi-moon-stars" : "bi-sun",
      isDarkMode.value ? "bi-sun" : "bi-moon-stars"
    );
  }
};

const toggleFullscreen = () => {
  const elem = document.documentElement;

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      console.log(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }

  if (fullscreenIcon.value) {
    fullscreenIcon.value.classList.replace(
      document.fullscreenElement ? "bi-fullscreen-exit" : "bi-fullscreen",
      document.fullscreenElement ? "bi-fullscreen" : "bi-fullscreen-exit"
    );
  }
};

watch(route, () => {
  togglePageName();
});
</script>

<template>
  <nav>
    <ul class="navBar-list">
      <li>
        <button type="button" class="nav-btn" @click="toggleMenu">
          <i class="bi bi-list"></i>
        </button>
      </li>

      <li>
        <button type="button" class="nav-btn" @click="toggleTimeZone">
          <i class="bi bi-translate"></i>
        </button>
      </li>
    </ul>

    <div class="pageName-container">
      <h1>{{ pageName }}</h1>
    </div>

    <ul class="navBar-list">
      <li>
        <button type="button" class="nav-btn" @click="toggleFullscreen">
          <i class="bi bi-fullscreen" ref="fullscreenIcon"></i>
        </button>
      </li>

      <li>
        <button type="button" class="nav-btn" @click="toggleTheme">
          <i id="modeIcon" class="bi bi-moon-stars" ref="themeIcon"></i>
        </button>
      </li>
    </ul>
  </nav>

  <Menu v-if="isMenuOpen" class="mode-menu"></Menu>
  <Langs v-if="isTimeZoneOpen" class="mode-menu"></Langs>
</template>

<style scoped>
nav {
  width: 100vw;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-left: 16px;
  padding-right: 16px;

  border-bottom: 1px solid var(--color-border);
}

.pageName-container {
  flex-grow: 1;
  text-align: center;
}

.navBar-list {
  list-style: none;
  display: flex;
}

h1 {
  font-size: 48px;
  font-weight: 500;
}

.bi {
  padding: 18px;
  font-size: 24px;
  border-radius: 10px;
  transition: background-color 0.3s;
  color: var(--color-icon);
}

.nav-btn {
  background-color: transparent;
  border: none;
}

@media (hover: hover) {
  .bi:hover {
    background-color: var(--color-icon-hover);
    cursor: pointer;
  }
}

.mode-menu {
  position: absolute;
}
</style>
