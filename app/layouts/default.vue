<script setup lang="ts">
</script>

<template>
    <div>
        <Navigation />
        <slot></slot>
		<Bottom v-if="route.name !== 'blog-slug'" />
    </div>
</template>

<style scoped lang="scss">
::slotted {
	padding-top: 3rem;
}
</style>
