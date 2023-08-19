<script setup>
import { ref, onMounted } from "vue";

const now = new Date();
const timerDate = ref(null);
const timerTime = ref(null);

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const updateTime = () => {
  const now = new Date();
  const dateString = now.toLocaleDateString("pt-BR", options);
  const timeString = now.toLocaleTimeString("pt-BR");
  timerDate.value.textContent = dateString;
  timerTime.value.textContent = timeString;
};

onMounted(() => {
  updateTime();
  setInterval(() => {
    updateTime();
  }, 1000);
});
</script>

<template>
  <div class="timer-container">
    <div>
      <p ref="timerDate" class="dateText"></p>
    </div>
    <div>
      <p ref="timerTime" class="timeText"></p>
    </div>
  </div>
</template>

<style scoped>

.timer-container {
  margin-top: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dateText {
  font-size: 24px;
  font-weight: 400;
}
.timeText {
  font-size: 128px;
  font-weight: 500;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
