<script setup lang="ts">
useHead({
	title: "About",
})
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>About</h2>
        </div>
        <h3>Use Technologies</h3>
        <div class="tech-item">
            <technologies name="Vue" techicon="icon:vue" description="v3.5.51" to="https://vuejs.org/" target="_blank" class="tech-link"/>
        </div>
        <div class="tech-item">
            <technologies name="Nuxt" techicon="icon:nuxt" description="v4.4.2" to="https://nuxt.com/" target="_blank" class="tech-link"/>
        </div>
        <div class="tech-item">
            <technologies name="Typescript" techicon="icon:typescript" description="v5" to="https://www.typescriptlang.org/" target="_blank" class="tech-link"/>
        </div>
        <div class="tech-item">
            <technologies name="Node.js" techicon="icon:nodejs" description="v24.8.0" to="https://nodejs.org/" target="_blank" class="tech-link"/>
        </div>
        <h3>Code Repository</h3>
    </div>
</template>

<style scoped lang="scss">
.title{
    display: flex;
    align-items: center;
    padding-top: 1rem;
}

.tech-item{
    display: flex;
    opacity: 0;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    animation-delay: 0.2s;
    @for $i from 1 through 6 {
        &:nth-child(#{$i}) { animation-delay: #{(1 + $i - 1) * 0.1}s; }
    }
}

.tech-link{
    padding: 5px;
    width: 300px;
    border-radius: 5px;
    transition: 0.3s;
    &:hover{
    transform: translateY(-5px);
    box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 10%);
    color: var(--accent-500);
    background-color: var(--card);
        @include dark {
            box-shadow: 0 0.25rem 1rem #42bbcc1a;
        }
    }
}

h2{
    margin: 2rem;
    opacity: 0;
    animation: slideInUp 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

h3{
    margin: 0.5rem;
    opacity: 0;
    animation: slideInUp 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.1s;
}

.texts {
    display: flex;
    flex-direction: column;
    color: var(--text);
    > * {
    padding-left: 1rem;
    }
}
</style>