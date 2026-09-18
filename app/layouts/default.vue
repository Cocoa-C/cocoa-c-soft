<script setup lang="ts">
</script>

<template>
    <div>
        <Navigation />
        <slot></slot>
		<Bottom />
    </div>
</template>

<style scoped lang="scss">
::slotted {
	padding-top: 3rem;
}
</style>
