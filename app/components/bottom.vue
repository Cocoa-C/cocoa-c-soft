<script lang="ts">
export default {
    name: 'Bottom'
}
</script>

<template>
    <footer class="bottom">
        <a href="https://icp.gov.moe/?keyword=20260629" target="_blank" rel="noopener noreferrer">
            萌ICP备20260629号
        </a>
    </footer>
</template>

<style scoped lang="scss">
.bottom {
    --footer-panel: rgba(246, 253, 255, 0.9);
    --footer-dot: rgba(33, 169, 199, 0.1);
    --footer-line: rgba(54, 163, 190, 0.24);
    --footer-ink: #315d6d;
    display: flex;
    position: fixed;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    z-index: 1000;
    bottom: 0;
    border-top: 1px solid var(--footer-line);
    background-color: var(--footer-panel);
    background-image: radial-gradient(var(--footer-dot) 0.7px, transparent 0.7px);
    background-size: 9px 9px;
    box-shadow: 0 -8px 24px rgba(28, 83, 101, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(16px);

    &::before {
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        content: '';
        background: linear-gradient(90deg, transparent, var(--accent-500) 20%, var(--accent-500) 80%, transparent);
        opacity: 0.8;
        pointer-events: none;
    }

    a {
        position: relative;
        display: inline-flex;
        align-items: center;
        min-height: 34px;
        padding: 0 15px 0 28px;
        border: 1px solid var(--footer-line);
        color: var(--footer-ink);
        background: rgba(255, 255, 255, 0.42);
        font-family: 'Montserrat', 'Microsoft YaHei UI', 'Microsoft YaHei', sans-serif;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease;

        &::before {
            position: absolute;
            left: 12px;
            width: 6px;
            height: 6px;
            content: '';
            background: var(--accent-500);
            box-shadow: 0 0 7px rgba(54, 197, 220, 0.55);
        }

        &:hover,
        &:focus-visible {
            border-color: var(--accent-500);
            color: #087f9c;
            background: rgba(220, 248, 252, 0.8);
        }

        &:focus-visible {
            outline: 2px solid var(--accent-500);
            outline-offset: 3px;
        }
    }

    @include dark {
        --footer-panel: rgba(30, 47, 55, 0.94);
        --footer-dot: rgba(88, 190, 211, 0.1);
        --footer-line: rgba(88, 190, 211, 0.25);
        --footer-ink: #d2e8ed;

        box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04);

        a {
            background: rgba(41, 72, 81, 0.55);

            &:hover,
            &:focus-visible {
                color: #80e5f1;
                background: rgba(49, 103, 115, 0.55);
            }
        }
    }

    @include small-tablet {
        height: 40px;

        a {
            min-height: 26px;
            padding-right: 11px;
            padding-left: 24px;
            font-size: 11px;
        }

        a::before { left: 10px; width: 5px; height: 5px; }
    }
}

@media (prefers-reduced-motion: reduce) {
    .bottom a { transition: none; }
}
</style>
