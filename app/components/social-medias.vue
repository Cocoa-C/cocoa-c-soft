<script lang="ts">
import SocialButton from './social-button.vue';
</script>

<template>
<div class="social-medias">
    <a href="https://x.com/cocoackrnmy" target="_blank" class="icon">
        <SocialButton name="icon:twitter"/>
    </a>
    <a href="https://bsky.app/profile/cocoa-c.bsky.social" target="_blank" class="icon">
        <SocialButton name="icon:bluesky"/>
    </a>
    <a href="https://github.com/Cocoa-C" target="_blank" class="icon">
        <SocialButton name="icon:github"/>
    </a>
    <a href="https://www.pixiv.net/users/67811398" target="_blank" class="icon">
        <SocialButton name="icon:pixiv"/>
    </a>
    <a href="https://www.youtube.com/@cocoa-c" target="_blank" class="icon">
        <SocialButton name="icon:youtube"/>
    </a>
    <a href="https://www.nicovideo.jp/user/126988636" target="_blank" class="icon">
        <SocialButton name="icon:niconico"/>
    </a>
    <a href="https://space.bilibili.com/282158685" target="_blank" class="icon">
        <SocialButton name="icon:bilibili"/>
    </a>
    <a href="https://kirakira.moe/user/24" target="_blank" class="icon">
        <SocialButton name="icon:kirakira"/>
    </a>
</div>
</template>

<style lang="scss" scoped>
.social-medias{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 2rem;
    a{
        text-decoration: none;
    }
}

@keyframes blurAppear {
  0% {
    opacity: 0;
    filter: blur(20px);
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
}

.icon{
    opacity: 0;
    animation: blurAppear 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    @for $i from 1 through 8 {
        &:nth-child(#{$i}) { animation-delay: #{(4 + $i - 1) * 0.1}s; }
    }
}
</style>