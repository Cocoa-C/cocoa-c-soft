<script setup lang="ts">
useHead({
	title: "Profile",
})
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Profile</h2>
        </div>
        <div class="Profile-container">
            <div class="Profile-info">
                <div class="Primary-Profile">
                    <div class="Profile-item">
                        <div class="item-inner">
                            <font-awesome-icon icon="fa-solid fa-location-dot" class="Profile-icon"/>
                            <div class="Profile-text">Shanghai</div>
                        </div>
                    </div>
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
                            <ProfileIcon name="icon:soka" class="Profile-icon"/>
                            <div class="Profile-text">Soka Gakkai</div>
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
                            <font-awesome-icon icon="fa-solid fa-gamepad" class="Profile-icon"/>
                            <div class="Profile-text">Galgames</div>
                        </div>
                    </div>
                    <div class="Profile-item">
                        <div class="item-inner">
                            <ProfileIcon name="icon:maimai" class="Profile-icon"/>
                            <div class="Profile-text">maimai</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    align-items: center;
    padding-top: 1rem;
}

h2 { 
    margin: 2rem; 
    opacity: 0;
    animation: slideInUp 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.Profile-container { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

.Profile-info { 
    display: flex; 
    flex-direction: column; 
    gap: 2rem; 
}

.Primary-Profile, .Secondary-Profile { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    @include small-tablet {
        grid-template-columns: repeat(2, 1fr); 
    }
}

.Profile-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    opacity: 0;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @include small-tablet {
            flex-direction: row;
            height: 50px;
            width: 150px;
            margin: 10px;
        }
    .item-inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: var(--card);
        color: var(--neutral);
        cursor: pointer;
        
        transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1), 
                    box-shadow 0.3s ease, 
                    color 0.2s ease;
        will-change: transform;
        @include small-tablet {
            flex-direction: row;
            justify-content: flex-start;
            gap: 8px; 
        }
    }

    &:hover .item-inner {
        transform: translateY(-5px); 
        box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 10%);
        color: var(--accent-500);
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
    @include small-tablet {
        font-size: 17.5px;
        width: 30px;
    }
}

.Profile-text { 
    font-size: 13px; 
    margin-top: 8px; 
    text-align: center; 
    @include small-tablet {
        margin-top: 0;
    }
}

:deep(.profile-icon svg) {
    fill: currentColor;
}
</style>