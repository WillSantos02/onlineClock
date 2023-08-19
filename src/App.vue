<script setup>
import NavBar from "./components/NavBar.vue";
import InfoCards from "./components/InfoCards.vue";
import { useRoute } from "vue-router";

import Clock from "./components/Clock.vue";
import Timer from "./components/Timer.vue";
import Stopwatch from "./components/Stopwatch.vue";
import Countdown from "./components/Countdown.vue";

const routes = {
  '/clock': Clock,
  '/timer': Timer,
  '/stopwatch': Stopwatch,
  '/countdown': Countdown,
};

const route = useRoute();
const Component = routes[route.path];
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,600,1,0"
  />

  <div id="app">
    <header>
      <div>
        <NavBar />
      </div>
    </header>

    <main>
      <div>
        <router-view></router-view>
      </div>

      <div>
        <InfoCards />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
