<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
    <div class="navigation">
        <div class="logo">
            <LogoIcon name="icon:logo" class="logo-icon"/>
        </div>
        <nav class="right" aria-label="Main navigation">
            <ul id="nav">
                <NuxtLink to="/" class="NLink":class="{'is-active': isActive('/')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-home"/>
                    </div>
                    <div class="text">Home</div>
                </NuxtLink>
                <NuxtLink to="/profile" class="NLink":class="{'is-active': isActive('/profile')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-user"/>
                    </div>
                    <div class="text">Profile</div>
                </NuxtLink>
                <NuxtLink to="/links" class="NLink":class="{'is-active': isActive('/links')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-link"/>
                    </div>
                    <div class="text">Links</div>
                </NuxtLink>
                <NuxtLink to="/blog" class="NLink":class="{'is-active': isActive('/blog')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-blog"/>
                    </div>
                    <div class="text">Blog</div>
                </NuxtLink>
                <NuxtLink to="/about" class="NLink":class="{'is-active': isActive('/about')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-info-circle"/>
                    </div>
                    <div class="text">About</div>
                </NuxtLink>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.navigation {
    --hud-ink: #244b5c;
    --hud-muted: #718b98;
    --hud-blue: #21a9c7;
    --hud-line: rgba(57, 151, 177, 0.22);
    --hud-panel: rgba(250, 254, 255, 0.92);
    --hud-dot: rgba(33, 169, 199, 0.11);
    --hud-shadow: 0 8px 24px rgba(28, 83, 101, 0.11), inset 0 1px 0 #fff;
    --hud-active: rgba(80, 209, 231, 0.15);
    --hud-hover: rgba(80, 209, 231, 0.1);
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 112px;
    z-index: 1000;
    align-items: center;
    justify-content: space-between;
    padding: 22px 36px;
    box-sizing: border-box;
    pointer-events: none;

    > * {
        pointer-events: auto;
    }

    @include small-tablet {
        height: 82px;
        padding: 12px;
        justify-content: center;
    }

    @include dark {
        --hud-ink: #e0edf0;
        --hud-muted: #86a9b5;
        --hud-blue: #36c5dc;
        --hud-line: rgba(88, 190, 211, 0.25);
        --hud-panel: rgba(30, 47, 55, 0.96);
        --hud-dot: rgba(88, 190, 211, 0.1);
        --hud-shadow: 0 8px 24px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.04);
        --hud-active: rgba(54, 197, 220, 0.2);
        --hud-hover: rgba(54, 197, 220, 0.12);
    }
}

.logo {
    display: flex;
    align-items: center;
    gap: 11px;
}

.logo-icon {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    font-size: 80px;
    color: var(--hud-blue);
    filter: drop-shadow(0 2px 2px rgba(25, 108, 133, 0.15));

    @include small-tablet {
        display: none;
    }
}

.right {
    display: flex;
    justify-content: flex-end;

    @include small-tablet {
        width: 100%;
        justify-content: center;
    }
}

#nav {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 4px;
    padding: 5px;
    border: 1px solid var(--hud-line);
    background-color: var(--hud-panel);
    background-image: radial-gradient(var(--hud-dot) 0.7px, transparent 0.7px);
    background-size: 8px 8px;
    box-shadow: var(--hud-shadow);
    backdrop-filter: blur(14px);
    clip-path: polygon(0 0, calc(100% - 13px) 0, 100% 13px, 100% 100%, 13px 100%, 0 calc(100% - 13px));
    transition: background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;

    @include small-tablet {
        width: 100%;
        max-width: 460px;
        gap: 2px;
    }
}

.NLink {
    display: grid;
    position: relative;
    grid-template-columns: 18px auto;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    min-width: 76px;
    min-height: 42px;
    padding: 0 12px;
    color: var(--neutral);
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 600;
    transition: color 180ms ease, background-color 180ms ease;

    &.is-active {
        color: #087f9c;
        background: var(--hud-active);

        &::before {
            transform: scaleX(1);
        }
    }

    &::before {
        position: absolute;
        top: -5px;
        left: 8px;
        right: 8px;
        height: 2px;
        content: '';
        background: var(--hud-blue);
        box-shadow: 0 0 8px rgba(33, 169, 199, 0.55);
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 180ms ease;
    }

    @include small-tablet {
        flex: 1;
        min-width: 0;
        min-height: 44px;
        grid-template-columns: 1fr;
        padding: 0 5px;
    }
}

.NLink:hover,
.NLink:focus-visible {
    color: #087f9c;
    background-color: var(--hud-hover);
}

.NLink:focus-visible {
    outline: 2px solid var(--hud-blue);
    outline-offset: -2px;
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    font-size: 15px;
    line-height: 1;
    transition: transform 180ms ease;

    @include small-tablet {
        justify-self: center;
        width: 22px;
        font-size: 18px;
    }
}

.NLink:hover .icon {
    transform: translateY(-1px);
}

.text {
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    line-height: 1;

    @include small-tablet {
        display: none;
    }
}

@include dark {
    .NLink.is-active,
    .NLink:hover,
    .NLink:focus-visible {
        color: #80e5f1;
    }

    .logo-icon {
        filter: drop-shadow(0 2px 5px rgba(54, 197, 220, 0.28));
    }
}

@media (prefers-reduced-motion: reduce) {
    #nav,
    .NLink,
    .NLink::before,
    .icon {
        transition: none;
    }
}
</style>

