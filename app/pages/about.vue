<script setup lang="ts">
useHead({
	title: "About",
})
</script>

<template>
    <div class="container">
        <div class="content">
            <section class="about-section">
                <div class="section-heading">
                    <span class="section-index">01</span>
                    <div>
                        <span class="section-label">SYSTEM STACK</span>
                        <h2>Use Technologies</h2>
                    </div>
                </div>
                <div class="box box-two">
                    <div class="tech-item">
                        <technologies name="Vue" techicon="icon:vue" description="v3.5.31" to="https://vuejs.org/" target="_blank" class="tech-link"/>
                    </div>
                    <div class="tech-item">
                        <technologies name="Nuxt" techicon="icon:nuxt" description="v4.4.2" to="https://nuxt.com/" target="_blank" class="tech-link"/>
                    </div>
                    <div class="tech-item">
                        <technologies name="Typescript" techicon="icon:typescript" description="v5" to="https://www.typescriptlang.org/" target="_blank" class="tech-link"/>
                    </div>
                    <div class="tech-item">
                        <technologies name="Node.js" techicon="icon:nodejs" description="v24.16.0" to="https://nodejs.org/" target="_blank" class="tech-link"/>
                    </div>
                </div>
            </section>
            <section class="about-section repository-section">
                <div class="section-heading">
                    <span class="section-index">02</span>
                    <div>
                        <span class="section-label">SOURCE ACCESS</span>
                        <h2>Code Repository</h2>
                    </div>
                </div>
                <div class="box box-one">
                    <div class="tech-item">
                        <technologies name="GitHub Repository" techicon="icon:github" to="https://github.com/Cocoa-C/cocoa-c-soft" target="_blank" class="tech-link"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: min(100%, 660px);
    margin: 0 auto;
    padding: 112px 16px 80px;
    box-sizing: border-box;
}

.about-section {
    width: 100%;
    animation: slideInUp 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.repository-section {
    animation-delay: 0.14s;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 12px 4px;
    color: #245363;
}

.section-index {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 1px solid rgba(50, 167, 193, 0.42);
    color: var(--accent-300);
    background: rgba(225, 249, 253, 0.8);
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 800;
}

.section-label {
    display: block;
    margin-bottom: 3px;
    color: #6d8994;
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 1.4px;
}

.section-heading h2 {
    margin: 0;
    color: var(--accent-300);
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 800;
}

.box {
    position: relative;
    width: 100%;
    padding: 14px;
    border: 1px solid rgba(54, 163, 190, 0.25);
    background-color: rgba(249, 254, 255, 0.94);
    background-image: radial-gradient(rgba(40, 157, 185, 0.1) 0.7px, transparent 0.7px);
    background-size: 9px 9px;
    box-shadow: 0 8px 20px rgba(34, 85, 101, 0.1), inset 0 1px 0 #fff;
    box-sizing: border-box;
}

.box::before {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 52px;
    height: 3px;
    content: '';
    background: #36c5dc;
    box-shadow: 0 0 10px rgba(55, 197, 220, 0.45);
}

.box-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px 14px;
}

.box-one {
    display: flex;
}

.box-one .tech-item {
    flex: 1;
    width: 100%;
}

.tech-item {
    display: flex;
    width: 100%;
    min-width: 0;
    opacity: 0;
    height: 56px;
    align-items: center;
    animation: slideInUp 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both;

    @for $i from 1 through 5 {
        &:nth-child(#{$i}) { animation-delay: #{0.08 + ($i - 1) * 0.09}s; }
    }
}

.tech-link {
    display: flex;
    align-items: center;
    min-width: 0;
    min-height: 48px;
    padding: 6px 10px;
    width: 100%;
    border: 1px solid transparent;
    color: var(--text);
    transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;

    &:hover,
    &:focus-visible {
        border-color: rgba(54, 163, 190, 0.25);
        background-color: rgba(220, 248, 252, 0.85);
        color: #087f9c;
        transform: translateY(-2px);
    }

    &:focus-visible {
        outline: 2px solid #21a9c7;
        outline-offset: 2px;
    }
}

:deep(.texts) { color: #244b5c; }

:deep(.name) {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
}

:deep(.version) {
    color: #718b98;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
}

:deep(.icon) { color: #239eb9; }

@include dark {
    .section-heading { color: #d9edf1; }

    .section-index {
        border-color: rgba(88, 190, 211, 0.35);
        color: #65d2e4;
        background: rgba(36, 91, 104, 0.35);
    }

    .section-label,
    :deep(.version) { color: #9bb8c1; }

    .section-heading h2 { color: #65d2e4; }

    .box {
        border-color: rgba(88, 190, 211, 0.25);
        background-color: rgba(30, 47, 55, 0.96);
        background-image: radial-gradient(rgba(88, 190, 211, 0.1) 0.7px, transparent 0.7px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .tech-link:hover,
    .tech-link:focus-visible { background-color: rgba(49, 103, 115, 0.35); }

    :deep(.texts) { color: #e0edf0; }
}

@media (max-width: 480px) {
    .content {
        width: 100%;
        gap: 22px;
        padding: 96px 12px 64px;
    }

    .box {
        padding: 10px;
    }

    .box-two {
        gap: 4px;
        grid-template-columns: 1fr;
    }

    .section-heading h2 {
        font-size: 18px;
    }

    :deep(.inner) {
        gap: 14px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .about-section,
    .tech-item {
        opacity: 1;
        animation: none;
    }

    .tech-link {
        transition: none;
    }
}
</style>

