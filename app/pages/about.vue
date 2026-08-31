<script setup lang="ts">
useHead({
	title: "About",
})
</script>

<template>
    <div class="container">
        <div class="content">
            <h2>Use Technologies</h2>
            <div class="box box-two">
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
            </div>
            <h2>Code Repository</h2>
            <div class="box box-one">
                <div class="tech-item">
                    <technologies name="GitHub Repository" techicon="icon:github" to="https://github.com/Cocoa-C/cocoa-c-soft" target="_blank" class="tech-link"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: min(100%, 560px);
    margin: 0 auto;
    padding: 0 12px;
    box-sizing: border-box;
}

.box{
    width: min(100%, 520px);
    max-width: 520px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(16px);
    animation: slideInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    box-sizing: border-box;
}

.box-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding: 12px 14px;
    background-color: var(--card);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    animation-delay: 0.08s;
    box-sizing: border-box;
}

.box-one {
    display: flex;
    width: min(100%, 520px);
    padding: 12px 14px;
    background-color: var(--card);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    animation-delay: 0.18s;
    box-sizing: border-box;
}

.box-one .tech-item {
    flex: 1;
    width: 100%;
}

.title{
    display: flex;
    align-items: center;
    padding-top: 1rem;
}

.tech-item{
    display: flex;
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(16px);
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    height: 56px;
    align-items: center;
    @for $i from 1 through 5 {
        &:nth-child(#{$i}) { animation-delay: #{($i - 1) * 0.12}s; }
    }
}

.tech-link{
    display: flex;
    align-items: center;
    padding: 8px 12px;
    width: 100%;
    border-radius: 8px;
    transition: 0.3s ease;
    &:hover{
        background-color: var(--card);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        color: var(--accent-500);
        transform: translateY(-0.25rem);
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

@media (max-width: 480px) {
    .content {
        width: 100%;
        padding: 0 10px;
    }

    .box,
    .box-one,
    .box-two {
        width: 100%;
        max-width: 100%;
    }
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