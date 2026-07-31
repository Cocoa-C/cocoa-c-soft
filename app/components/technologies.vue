<script setup lang="ts">
const props = defineProps<{
  name: string
  techicon: string
  to: string
  description?: string
}>()
</script>

<template>
  <NuxtLink :to class="tech-link">
    <div class="inner">
      <Icon :name="techicon" :alt="name" class="icon" />
      <div class="texts">
        <span class="name">{{ name }}</span>
        <span v-if="description" class="version">{{ description }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.inner{
    display: flex;
    align-items: center;
    gap: 20px;
}

.icon{
    font-size: 30px;  
    object-fit: cover;
}

.texts {
    display: flex;
    flex-direction: column;
}
</style>