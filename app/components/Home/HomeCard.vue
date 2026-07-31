<script setup lang="ts">
import { ref } from 'vue'
const options = ['cocoa-c', 'ココア-C', '阿蘅仔']
const idx = ref(0)
const message = ref(options[idx.value])

function onClick() {
  idx.value = (idx.value + 1) % options.length
  message.value = options[idx.value]
}
</script>

<template>
    <div class="home-card">
        <div class="left">
            <img src="/images/avatar.webp" class="avatar" alt="My avatar" referrerpolicy="no-referrer"/>
        </div>
        <div class="right">
            <div class="titles">
                <div class="title">
                    <div class="username">
                        <h1 @click="onClick">
                            {{ message }}
                        </h1>
                    </div>
                </div>
                <div class="title">
                    <div class="slogan">
                        <h2>Discover a pure future</h2>
                    </div>
                </div>
                <div class="title">
                    <div class="social-media">
                        <SocialMedias />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes blurAppear {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes blurAppear2 {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
}

.left{
    padding-right: 40px;
    animation: blurAppear 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
    @include small-tablet {
        padding-right: 0;
        margin-bottom: 20px;
    }
}

.home-card {
    height: 100dvh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1,h2{
        margin: 0;
        font-family: "Montserrat","Microsoft YaHei UI", "Microsoft YaHei";
    }
    @include small-tablet {
        flex-direction: column;
    }
}

.username {
    font-size: 40px;
    display: flex;
    height: 110px;
    justify-content: flex-start;
    transition: filter 0.4s ease, transform 0.4s ease;
    transform-origin: left center; 
    h1 {    
        font-weight: bold;
    }
    @include small-tablet {
        font-size: 35px;
        transform-origin: center center; 
        justify-content: center;
    }
}

.username:hover {
    transform: scale(1.1); 
}

.username:active {
    transform: scale(0.9); 
    filter: blur(5px);
}

.title{
    opacity: 0;
    animation: blurAppear2 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    @for $i from 1 through 3 {
        &:nth-child(#{$i}) { animation-delay: #{(4 + $i - 1) * 0.12}s; }
    }
    @include small-tablet {
        animation: blurAppear 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        justify-content: center;
    }
}

.slogan {
    display: flex;
    justify-content: flex-start;
    padding-top: 10px;
    padding-bottom: 25px;
    font-size: 20px;
    transition: transform 0.35s ease; 
    transform-origin: left center; 
    h2 {
        font-weight: normal;
    }
        @include small-tablet {
        font-size: 15px;
        padding-top: 0px;
        transform-origin: center center; 
        justify-content: center;
    }
};

.slogan:hover {
    transform: scale(1.1); 
} 

.slogan:active {
    transform: scale(0.9); 
}

.avatar {
    width: 200px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 60px #42bbcc4d;
    transition: transform 0.35s ease; 
}

.avatar:hover {
    transform: scale(1.2); 
}

.avatar:active {
    transform: scale(1.1); 
}
</style>