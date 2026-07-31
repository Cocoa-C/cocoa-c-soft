<script setup lang="ts">
const props = defineProps<{
    title?: string
    date?: string
    description?: string
}>()
</script>

<template>
    <div class="blog-card">
        <h2 v-if="title">
            {{ title }}
        </h2>
        <p class="description">
            {{ description }}
        </p>
        <div class="calendar">
            <font-awesome-icon icon="fa-solid fa-calendar" class="calendar-icon"/>
            <p>
                {{ date }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.blog-card{
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.description{
    margin-top: 5px;
}

.calendar{
    display: flex;
    color: var(--neutral);
    align-items: center;
    justify-content: flex-end;
    margin: 5px;
}

.calendar-icon{
    margin: 5px;
}
</style>