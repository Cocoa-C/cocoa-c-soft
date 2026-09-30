<script setup lang="ts">
useHead({
	title: "Profile",
})
</script>

<template>
    <div class="container">
        <main class="profile-page">
            <header class="title">
                <span class="page-index">STUDENT DATA / 01</span>
                <h2>Profile</h2>
            </header>
            <div class="Profile-container">
                <div class="Profile-info">
                    <section class="profile-section">
                        <h3>
                            <span class="section-number">01</span>
                            <span>Basic Data</span>
                            <span class="section-rule" aria-hidden="true"></span>
                        </h3>
                        <div class="Primary-Profile">
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-transgender" class="Profile-icon"/>
                            <div class="Profile-text">He, Him</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-cake-candles" class="Profile-icon"/>
                            <div class="Profile-text">2003-6-29</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-star-and-crescent" class="Profile-icon"/>
                            <div class="Profile-text">Cancer</div>
                        </div>
                    </div>
                        </div>
                    </section>
                    <section class="profile-section interests-section">
                        <h3>
                            <span class="section-number">02</span>
                            <span>Interests</span>
                            <span class="section-rule" aria-hidden="true"></span>
                        </h3>
                        <div class="Secondary-Profile">
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-clover" class="Profile-icon"/>
                            <div class="Profile-text">Houbunsha</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-music" class="Profile-icon"/>
                            <div class="Profile-text">Otomads</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-code" class="Profile-icon"/>
                            <div class="Profile-text">Coding</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <ProfileIcon name="icon:touhou" class="Profile-icon"/>
                            <div class="Profile-text">Touhou</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-cubes" class="Profile-icon"/>
                            <div class="Profile-text">Minecraft</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <ProfileIcon name="icon:maimai" class="Profile-icon"/>
                            <div class="Profile-text">maimai</div>
                        </div>
                    </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}

.title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 28px;
}

.profile-page {
    width: min(100%, 760px);
    padding: 112px 16px 80px;
    box-sizing: border-box;
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
    color: #168ca9;
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
        background: #36c5dc;
        box-shadow: 0 0 10px rgba(55, 197, 220, 0.45);
    }
}

.Profile-container { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.Profile-info { 
    display: flex; 
    flex-direction: column; 
    gap: 22px;
    width: 100%;
}

.profile-section h3 {
    display: flex;
    align-items: center;
    gap: 9px;
    margin: 0 4px 10px;
    color: #315d6d;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 800;
    opacity: 0;
    animation: slideInUp 0.45s cubic-bezier(0.2, 0.7, 0.2, 1) 0.12s both;
}

.profile-section h3 > span:not(.section-rule) {
    font-family: 'Montserrat', sans-serif;
}

.interests-section h3 {
    animation-delay: 0.28s;
}

.section-number {
    display: grid;
    flex: 0 0 30px;
    place-items: center;
    width: 30px;
    height: 26px;
    border: 1px solid rgba(54, 163, 190, 0.34);
    color: #168ca9;
    background: rgba(225, 249, 253, 0.85);
    font-size: 11px;
    font-weight: 800;
    line-height: 1;
}

.section-rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(54, 163, 190, 0.38), transparent);
}

.Primary-Profile, .Secondary-Profile { 
    display: grid; 
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    padding: 12px;
    border: 1px solid rgba(54, 163, 190, 0.24);
    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
    background-color: rgba(249, 254, 255, 0.92);
    background-image: radial-gradient(rgba(40, 157, 185, 0.09) 0.7px, transparent 0.7px);
    background-size: 9px 9px;
    box-shadow: 0 8px 20px rgba(34, 85, 101, 0.09), inset 0 1px 0 #fff;

    @include small-tablet {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.Primary-Profile {
    opacity: 0;
    animation: slideInUp 0.65s cubic-bezier(0.2, 0.7, 0.2, 1) 0.08s both;
}

.Secondary-Profile {
    opacity: 0;
    animation: slideInUp 0.65s cubic-bezier(0.2, 0.7, 0.2, 1) 0.24s both;
}

.Profile-item {
    min-width: 0;
    min-height: 96px;
    opacity: 0;
    animation: slideInUp 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;

    @include small-tablet {
        min-height: 54px;
    }

    .item-inner {
        width: 100%;
        height: 100%;
        min-height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: 1px solid rgba(54, 163, 190, 0.16);
        clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px));
        background: rgba(255, 255, 255, 0.62);
        color: #64818d;
        transition: transform 180ms ease, box-shadow 180ms ease, color 180ms ease, border-color 180ms ease;

        @include small-tablet {
            display: grid;
            grid-template-columns: minmax(0, calc(50% - 41px)) 24px 10px minmax(0, 1fr);
            align-items: center;
            gap: 0;
        }
    }

    &:hover .item-inner {
        transform: translateY(-3px);
        border-color: rgba(33, 169, 199, 0.48);
        box-shadow: 0 8px 18px rgba(34, 120, 143, 0.14);
        color: #087f9c;
    }
}

.Primary-Profile .Profile-item {
    @for $i from 1 through 4 {
        &:nth-child(#{$i}) { animation-delay: #{($i - 1) * 0.05}s; }
    }
}
.Secondary-Profile .Profile-item {
    @for $i from 1 through 8 {
        &:nth-child(#{$i}) { animation-delay: #{(4 + $i - 1) * 0.05}s; }
    }
}

.Profile-icon { 
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: #2aa5bd;
    @include small-tablet {
        font-size: 18px;
        flex: 0 0 24px;
        width: 24px;
        grid-column: 2;
        grid-row: 1;
        justify-self: center;
    }
}

.Profile-text { 
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    @include small-tablet {
        font-size: 11px;
        grid-column: 4;
        grid-row: 1;
        min-width: 0;
        text-align: left;
    }
}

:deep(.profile-icon svg) {
    fill: currentColor;
}

@include dark {
    .profile-section h3 { color: #d5e9ed; }

    .section-number {
        border-color: rgba(88, 190, 211, 0.35);
        color: #65d2e4;
        background: rgba(36, 91, 104, 0.35);
    }

    .section-rule {
        background: linear-gradient(90deg, rgba(88, 190, 211, 0.45), transparent);
    }

    .Primary-Profile,
    .Secondary-Profile {
        border-color: rgba(88, 190, 211, 0.25);
        background-color: rgba(30, 47, 55, 0.96);
        background-image: radial-gradient(rgba(88, 190, 211, 0.1) 0.7px, transparent 0.7px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .Profile-item .item-inner {
        border-color: rgba(88, 190, 211, 0.16);
        background: rgba(41, 72, 81, 0.45);
        color: #b2cbd1;
    }

    h2 { color: #65d2e4; }
}

@media (max-width: 480px) {
    .profile-page { padding: 96px 12px 64px; }

    .Primary-Profile,
    .Secondary-Profile { gap: 7px; padding: 9px; }

    .Profile-item { min-height: 52px; }
}

@media (prefers-reduced-motion: reduce) {
    .page-index,
    h2,
    .profile-section h3,
    .Profile-item {
        opacity: 1;
        animation: none;
    }

    .Primary-Profile,
    .Secondary-Profile {
        opacity: 1;
        animation: none;
    }

    .item-inner { transition: none; }
}
</style>
