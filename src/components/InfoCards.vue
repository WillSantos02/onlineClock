<script setup></script>

<template>
  <div class="card-container">
    <div class="card">
      <div class="card-content">
        <div class="card-header">
          <div class="card-title">
            <h1>Como o Relógio Online funciona?</h1>
          </div>
          <div class="card-info-icon">
            <span class="material-symbols-rounded">info</span>
          </div>
        </div>

        <div class="card-text">
          <p>
            O relógio do navegador mostra o tempo real com base no horário do
            seu computador ou celular. Ele usa o relógio do sistema onde está
            sendo executado. Portanto, a hora e a data exibidas são relativas ao
            fuso horário do seu dispositivo. E, se o relógio do seu dispositivo
            estiver errado, ele exibirá a hora errada.
          </p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="card-header">
          <div class="card-title">
            <h1>O que é o Relógio Online?</h1>
          </div>
          <div class="card-info-icon">
            <span class="material-symbols-rounded">info</span>
          </div>
        </div>

        <div class="card-text">
          <p>
            O Relógio Online é um relógio digital com segundos, que exibe a data
            e hora atuais. Este relógio em tela inteira não apenas mostra que
            horas são, mas também mostra a hora atual em todos os lugares do
            mundo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 1220px;
  height: 320px;
}

.card {
  width: 520px;
  height: 320px;
  border-radius: 10px;
  background-color: var(--color-background-card);
  transition: 0.3s;
}
.card:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.card-content {
  margin: 20px 20px 0 30px;
}
.card-content .card-header {
  display: flex;
  justify-content: space-between;
}

.card-info-icon {
  position: relative;
  color: var(--color-icon);
}

.card-title h1 {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 400;
}

.card-text p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 300;
  text-align: justify;
}
</style>
