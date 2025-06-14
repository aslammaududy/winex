<script setup lang="ts">
const props = defineProps({
  subfolders: Array
})
</script>

<template>
  <div class="right-panel">
    <h3>Subfolders</h3>
    <ul>
      <li v-for="folder in props.subfolders" :key="folder.id">{{ folder.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.right-panel {
  flex: 1;
  padding: 16px;
  background-color: #1e1e1e;
  color: #f0f0f0;
  overflow-y: auto;
}

h3 {
  margin-bottom: 10px;
}

li {
  margin-bottom: 6px;
}
</style>