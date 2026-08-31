<script  setup lang="ts">
defineProps<{
  name: string
  avatar: string
  to: string
  description?: string
}>()
</script>

<template>
    <div class="inner">
      <NuxtLink :to="to" class="link" target="_blank">
        <NuxtImg :src="avatar" :alt="name" class="friends-avatar" preload />
        <div class="texts">
          <span class="name">{{ name }}</span>
          <span v-if="description" class="description">{{ description }}</span>
        </div>
      </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.inner {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--text);
    @include small-tablet {
        padding: 0.2rem;
    }
}

.link {
    display: flex;
    align-items: center;
    min-height: 55px;
    width: 100%;
    padding: 0.5rem;
    transition: 0.3s ease-in-out;
    border-radius: 10px;
    @include tablet {
        min-height: 40px;
    }
    @include small-tablet {
        padding: 1rem;
    }
}

.link:hover {
    background-color: var(--card);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    color: var(--accent-500);
    transform: translateY(-0.25rem);
}

.friends-avatar {
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    @include small-tablet {
        width: 30px;
        height: 30px;
    }
}

.texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.125rem;
}

.description {
  color: var(--neutral);
  font-size: 10px;
}
</style>