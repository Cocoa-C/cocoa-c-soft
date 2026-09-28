<script setup lang="ts">
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
        <img :src="avatar" :alt="`${name} avatar`" class="friends-avatar" />
        <div class="texts">
          <span class="name">{{ name }}</span>
          <span v-if="description" class="description">{{ description }}</span>
        </div>
        <span class="link-indicator" aria-hidden="true">
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
        </span>
      </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.inner {
    display: flex;
    align-items: center;
    color: var(--text);
}

.link {
    display: flex;
    align-items: center;
  gap: 12px;
  min-height: 76px;
    width: 100%;
  min-width: 0;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  transition: background-color 180ms ease, color 180ms ease;
}

.friends-avatar {
  display: block;
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(54, 163, 190, 0.42);
    border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 3px rgba(54, 197, 220, 0.1);
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.texts {
    display: flex;
  flex: 1;
    flex-direction: column;
    justify-content: center;
    gap: 0.125rem;
  min-width: 0;
}

.name {
  overflow: hidden;
  color: #244b5c;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 180ms ease;
}

.description {
  display: -webkit-box;
  overflow: hidden;
  color: #718b98;
  font-size: 10px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
}

.link-indicator {
  display: grid;
  flex: 0 0 28px;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(54, 163, 190, 0.22);
  color: #2aa5bd;
  font-size: 11px;
  opacity: 0.65;
  transition: background-color 180ms ease, color 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.link:hover,
.link:focus-visible {
  background: rgba(220, 248, 252, 0.75);
  color: #087f9c;
}

.link:hover .friends-avatar,
.link:focus-visible .friends-avatar {
  border-color: #36c5dc;
  box-shadow: 0 0 0 4px rgba(54, 197, 220, 0.18);
  transform: scale(1.04);
}

.link:hover .name,
.link:focus-visible .name { color: #087f9c; }

.link:hover .link-indicator,
.link:focus-visible .link-indicator {
  background: #21a9c7;
  color: white;
  opacity: 1;
  transform: translate(1px, -1px);
}

.link:focus-visible {
  outline: 2px solid #21a9c7;
  outline-offset: -2px;
}

@include dark {
  .name { color: #e0edf0; }

  .description { color: #9bb8c1; }

  .link:hover,
  .link:focus-visible { background: rgba(49, 103, 115, 0.35); }
}

@media (max-width: 480px) {
  .link { gap: 10px; min-height: 68px; padding: 8px; }

  .friends-avatar { flex-basis: 38px; width: 38px; height: 38px; }
}

@media (prefers-reduced-motion: reduce) {
  .link,
  .friends-avatar,
  .name,
  .link-indicator { transition: none; }
}
</style>
