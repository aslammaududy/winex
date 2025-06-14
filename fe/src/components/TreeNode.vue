<script setup lang="ts">
const props = defineProps({
  node: Object
})

function handleClick() {
  emit('on-folder-click', props.node.id)
}

const emit = defineEmits(['on-folder-click'])
</script>

<template>
  <li>
    <div @click="handleClick">{{ props.node.name }}</div>
    <ul v-if="props.node.children?.length">
      <TreeNode
          v-for="child in props.node.children"
          :key="child.id"
          :node="child"
          @on-folder-click="$emit('on-folder-click', $event)"
      />
    </ul>
  </li>
</template>

<style scoped>
div {
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
}

div:hover {
  background-color: #444;
}

ul {
  padding-left: 16px;
}
</style>