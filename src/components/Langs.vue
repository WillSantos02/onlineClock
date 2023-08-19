<script setup>
import itemsData from "../assets/collections/country-list.json";
import { ref, computed, onMounted } from "vue";

const items = ref([]);

const fetchItems = async () => {
  try {
    items.value = itemsData.items;
  } catch (error) {
    console.error("Error loading items:", error);
  }
}

const sortedItems = computed(() => {
  return items.value.slice().sort((a, b) => a.label.localeCompare(b.label));
});

onMounted(fetchItems);
</script>

<template>
  <ul class="lang-list">
    <li v-for="item in sortedItems" :key="item.id">
      <button :ref="item.id" type="button" class="list-btn">
        <span :class="item.iconClass"></span> {{ item.label }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.lang-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 75px;
  margin-top: 10px;
  padding: 10px;
  width: 330px;
  /* height: 300px; */
  background-color: var(--color-background-card);
  list-style: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
}

.list-btn {
  display: flex;
  align-items: center;
  width: 310px;
  height: 40px;
  text-align: start;
  padding-left: 11px;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  color: var(--color-icon);
}
.list-btn:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.fi {
  margin-right: 10px;
}
</style>
