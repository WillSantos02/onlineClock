import { createRouter, createWebHistory } from "vue-router";

import Clock from "../components/Clock.vue";
import Timer from "../components/Timer.vue";
import Stopwatch from "../components/Stopwatch.vue";
import Countdown from "../components/Countdown.vue";

const routes = [
  {
    path: "/",
    redirect: "/clock",
  },
  {
    path: "/clock",
    component: Clock,
  },
  {
    path: "/timer",
    component: Timer,
  },
  {
    path: "/stopwatch",
    component: Stopwatch,
  },
  {
    path: "/countdown",
    component: Countdown,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
