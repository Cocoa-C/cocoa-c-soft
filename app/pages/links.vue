<script setup lang="ts">
useHead({
	title: "Links",
})
</script>

<template>
    <div class="container">

        <div class="content">
            <header class="title">
                <span class="page-index">COMMUNITY / NETWORK</span>
                <h2>Friend's Sites</h2>
            </header>
            <div class="linkslist">
                <div class="link-wrapper">
                    <FriendLinks 
                        name="Aira Sakuranomiya" 
                        avatar="https://avatars.githubusercontent.com/u/45261195"  
                        to="https://aira.cafe" 
                        description="Kind and Kawaii, Forever!~"
                    />
                </div>
                <div class="link-wrapper">
                    <FriendLinks 
                        name="Cyahega" 
                        avatar="https://avatars.githubusercontent.com/u/114506758" 
                        to="https://linktr.ee/cyahega" 
                    />
                </div>
                <div class="link-wrapper">
                    <FriendLinks 
                        name="Hakadao" 
                        avatar="https://avatars.githubusercontent.com/u/33394391"  
                        to="https://hakadao.cc" 
                    />
                </div>
                <div class="link-wrapper">
                    <FriendLinks 
                        name="KumaKorin" 
                        avatar="https://i1.mcobj.com/uploads/20210623_b735dde7c665d.jpeg"  
                        to="https://korin.im" 
                        description="Nothing easy is worth doing."
                    />
                </div>
                <div class="link-wrapper">
                    <FriendLinks 
                        name="Mochizunda" 
                        avatar="https://avatars.githubusercontent.com/u/177280187" 
                        to="https://mochizunda.dev" 
                    />
                </div>
                <!-- <div class="link-wrapper">
                    <FriendLinks 
                        name="Lian" 
                        avatar="https://avatars.githubusercontent.com/u/172176062" 
                        to="https://blog.yeastar.xin" 
                    />
                </div>-->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.title {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    align-items: flex-start;
    margin-bottom: 24px;
}

.page-index {
    margin-bottom: 6px;
    color: #718b98;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.4px;
    opacity: 0;
    animation: slideInUp 0.4s ease both;
}

h2 {
    position: relative;
    margin: 0;
    padding-left: 16px;
    color: var(--accent-300);
    font-family: 'Montserrat', sans-serif;
    font-size: 26px;
    font-weight: 800;
    opacity: 0;
    animation: slideInUp 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    &::before {
        position: absolute;
        top: 2px;
        bottom: 2px;
        left: 0;
        width: 4px;
        content: '';
        background: var(--accent-500);
        box-shadow: 0 0 10px rgba(55, 197, 220, 0.45);
    }
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 840px);
    margin: 0 auto;
    padding: 112px 16px 80px;
    box-sizing: border-box;
}

.linkslist {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    box-sizing: border-box;

    @include tablet {
        grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }

    @include small-tablet {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        max-width: 480px;
    }
}

.link-wrapper {
    position: relative;
    min-width: 0;
    overflow: hidden;
    border: 1px solid rgba(54, 163, 190, 0.24);
    background-color: rgba(249, 254, 255, 0.94);
    background-image: radial-gradient(rgba(40, 157, 185, 0.09) 0.7px, transparent 0.7px);
    background-size: 9px 9px;
    box-shadow: 0 7px 18px rgba(34, 85, 101, 0.09), inset 0 1px 0 #fff;
    opacity: 0;
    animation: slideInUp 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 3px;
        content: '';
        background: var(--accent-500);
        box-shadow: 0 0 9px rgba(55, 197, 220, 0.4);
        pointer-events: none;
        z-index: 1;
    }

    &:hover,
    &:focus-within {
        border-color: rgba(33, 169, 199, 0.52);
        box-shadow: 0 11px 22px rgba(34, 120, 143, 0.15), inset 0 1px 0 #fff;
        transform: translateY(-2px);
    }

    @for $i from 1 through 12 {
        &:nth-child(#{$i}) {
            animation-delay: #{($i - 1) * 0.08}s;
        }
    }
}

:deep(.link) {
    min-height: 76px;
    padding: 10px;
    box-sizing: border-box;
}

:deep(.link:focus-visible) {
    outline: 2px solid #21a9c7;
    outline-offset: -3px;
}

:deep(.friends-avatar) {
    width: 44px;
    height: 44px;
    border: 2px solid rgba(54, 163, 190, 0.42);
    object-fit: cover;
    box-shadow: 0 0 0 3px rgba(54, 197, 220, 0.1);
}

:deep(.name) {
    color: #244b5c;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 700;
}

:deep(.description) {
    color: #718b98;
    line-height: 1.4;
}

@include dark {
    h2 { color: #65d2e4; }

    .link-wrapper {
        border-color: rgba(88, 190, 211, 0.25);
        background-color: rgba(30, 47, 55, 0.96);
        background-image: radial-gradient(rgba(88, 190, 211, 0.1) 0.7px, transparent 0.7px);
        box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .link-wrapper:hover,
    .link-wrapper:focus-within { box-shadow: 0 11px 22px rgba(0, 0, 0, 0.3); }

    :deep(.name) { color: #e0edf0; }

    :deep(.description) { color: #9bb8c1; }
}

@media (max-width: 640px) {
    .content { padding: 96px 12px 64px; }
}

@media (prefers-reduced-motion: reduce) {
    .page-index,
    h2,
    .link-wrapper {
        opacity: 1;
        animation: none;
    }

    .link-wrapper { transition: none; }
}
</style>

