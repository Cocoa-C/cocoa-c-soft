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
                </NuxtLink>
                <NuxtLink to="/profile" class="NLink":class="{'is-active': isActive('/profile')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-user"/>
                    </div>
                </NuxtLink>
                <NuxtLink to="/links" class="NLink":class="{'is-active': isActive('/links')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-link"/>
                    </div>
                </NuxtLink>
                <NuxtLink to="/blog" class="NLink":class="{'is-active': isActive('/blog')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-blog"/>
                    </div>
                </NuxtLink>
                <NuxtLink to="/about" class="NLink":class="{'is-active': isActive('/about')}">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-info-circle"/>
                    </div>
                </NuxtLink>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.navigation{
    display: flex;
    position: fixed;
    height: 80px;
    width: 100%;
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
    left: 10px;
    font-size: 65px;
    z-index: 100;
    @include phone {
        opacity: 0;
    }
}

.right{
    position: fixed;
    display: flex;
    right: 10px;
    z-index: 100;
    justify-content: flex-end;
}

#nav {
    position: relative;
    border: none;
    width: 100%;
    max-width: 270px;
    padding: 5px;
    border-radius: 10em;
    display: flex;
    list-style: none;
    background: #42bbcc10;
    backdrop-filter: blur(3px);
    box-shadow: 0px 0px 20px #104f584d;
    justify-content: center;
}

.NLink {
    font-size: 15px;
    width: 15px;
    height: 15px;
    padding: 20px;
    color: var(--neutral);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.is-active {
      color: var(--accent-500);
    }
    &:hover::after {
    transition: 0.3s;
    }
}

.NLink:hover .icon {
    color: var(--accent-500);
}

.NLink.is-active .icon {
    color: var(--accent-500);
}

.icon{
    position: fixed;
    display: flex;
    font-size: 16.66px;
    transition: 0.2s;
}

.NLink::after{
    content: "";
    background: var(--hover-overlay-light);
    width: 75%;
    height: 75%;
    border-radius: 50%;
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