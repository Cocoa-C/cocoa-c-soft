<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const underlineStyle = ref({})
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
        <div class="right">
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
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation{
    display: flex;
    position: fixed;
    width: 100%;
    height: 80px;
    top: 40px;
    z-index: 1000;
    align-items: center;
}

.logo{
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    justify-content: flex-start
}

.logo-icon{
    display: flex;
    position: fixed;
    left: 30px;
    font-size: 100px;
    z-index: 100;
    @include small-tablet {
        opacity: 0;
    }
}

.right{
    position: fixed;
    display: flex;
    right: 55px;
    z-index: 100;
    justify-content: flex-end;
    @include small-tablet {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        justify-content: center;
    }
}

#nav {
    position: relative;
    border: none;
    width: 100%;
    max-width: auto;
    padding: 1px;
    border-radius: 10em;
    display: flex;
    list-style: none;
    background: #42bbcc00;
    backdrop-filter: blur(3px);
    box-shadow: 0px 0px 0px #104f584d;
    justify-content: center;
    @include small-tablet {
        width: auto;
        max-width: calc(100vw - 24px);
        background: #42bbcc10;
        box-shadow: 0px 0px 20px #104f584d;
    }
}

.NLink {
    font-size: 15px;
    width: 75px;
    min-height: 15px;
    padding: 15px;
    color: var(--neutral);
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    column-gap: 10px;
    position: relative;
    &.is-active {
      color: var(--accent-500);
    }
    &:hover::after {
    transition: 0.3s;
    }
    @include small-tablet {
        width: 30px;
        height: 30px;
    }
}

.NLink:hover .icon {
    color: var(--accent-500);
}

.NLink.is-active .icon {
    color: var(--accent-500);
}

.icon{
    position: relative;
    display: flex;
    justify-self: start;
    align-items: center;
    justify-content: center;
    width: 20px;
    font-size: 16.66px;
    transition: 0.2s;
    line-height: 1;
    @include small-tablet {
        width: 30px;
        font-size: 20px;
    }
}

.text {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    font-size: 15px;
    text-align: right;
    @include small-tablet {
        display: none;
        opacity: 0;
    }
}

.NLink::after{
    content: "";
    background: var(--hover-overlay-light);
    width: 87.5%;
    height: 87.5%;
    border-radius: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0px 0px 5px #104f584d;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    z-index: -1;
}

.NLink:hover::after {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0px 0px 10px #42bbcc4d;
}
</style>