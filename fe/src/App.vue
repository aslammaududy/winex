<script setup>
import {ref} from 'vue'
import FolderTree from './components/FolderTree.vue'
import SubFolder from "./components/SubFolder.vue";

const subfolders = ref([])

 async function loadSubfolders(folderId) {
  const res = await fetch(`http://localhost:3000/folders/${folderId}/subfolders`)
  subfolders.value = await res.json()
}
</script>

<template>
  <div class="explorer">
    <FolderTree @on-folder-click="loadSubfolders"/>
    <SubFolder :subfolders="subfolders"/>
  </div>
</template>

<style scoped>
.explorer {
  display: flex;
  height: 100vh;
  background-color: #222; /* ganti latar agar lebih kontras */
  color: #f0f0f0;
  font-family: sans-serif;
}
</style>
