<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="profile-icon">
    <Icon :name="name" class="icon" />
  </div>
</template>

<style scoped lang="scss">
.icon{
	display: flex;
  fill: var(--neutral);
}
</style>