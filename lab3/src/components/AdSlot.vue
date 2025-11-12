<template>
  <div class="ad-slot" @click="showModal = true">
    <p>Advertisement — Click to view</p>
  </div>

  <!-- модаалка відкривається поверх сайту -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-backdrop" @click="showModal = false">
      <div class="modal" @click.stop>
        <h3>SpaceX Merch Store</h3>
        <p>🔥 Купи футболку з Falcon 9 зараз!</p>
        <button @click="showModal = false">Закрити</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<style scoped>
.ad-slot {
  background: #1e1e2d;
  color: #fff;
  padding: 15px;
  margin: 20px 0;
  text-align: center;
  border: 2px dashed #555;
  cursor: pointer;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* поверх усього */
}

.modal {
  background: var(--bg);
  color: var(--text);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--border);
  width: 90%;
  max-width: 400px;
  text-align: center;
}

button {
  margin-top: 15px;
  padding: 8px 14px;
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: var(--text);
  color: var(--bg);
}
</style>
