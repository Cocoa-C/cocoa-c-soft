<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div class="button-icon">
    <Icon :name="name" class="icon" />
  </div>
</template>

<style scoped lang="scss">
.icon{
	display: flex;
  fill: var(--neutral);
	color: var(--neutral);
	transition: 0.2s;
	&:hover {
    transform: scale(1.2);
  }
}
</style>