<script setup lang="ts">
</script>

<template>
    <div>
        <Navigation />
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
::slotted {
	padding-top: 3rem;
}
</style>