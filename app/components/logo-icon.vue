<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="logo-icon">
    <Icon :name="name" class="icon" />
  </div>
</template>

<style scoped lang="scss">

</style>