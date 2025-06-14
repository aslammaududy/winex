<script setup lang="ts">
import {ref, onMounted} from "vue";
import TreeNode from "./TreeNode.vue";

const folders = ref([]);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/folders");

  folders.value = await res.json();
})

function emitOnFolderClick(folderId: number) {
  emit("on-folder-click", folderId);
}

const emit = defineEmits(["on-folder-click"]);
</script>

<template>
  <div class="left-panel">
    <ul>
      <TreeNode
          v-for="folder in folders"
          :key="folder.id"
          :node="folder"
          @on-folder-click="emitOnFolderClick"
      />
    </ul>
  </div>
</template>

<style scoped>
.left-panel {
  width: 300px;
  padding: 16px;
  background-color: #333;
  color: #f0f0f0;
  overflow-y: auto;
  height: 100vh;
}

ul {
  list-style-type: disc;
  padding-left: 16px;
}
</style>