<script setup lang="ts">
useHead({
	title: "Links",
})
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Links</h2>
        </div>
        <h3>Friend's Sites</h3>
        <div class="content">
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
                        name="Lian" 
                        avatar="https://avatars.githubusercontent.com/u/172176062" 
                        to="https://blog.yeastar.xin" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

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

h3 { 
    margin: 1rem; 
    opacity: 0;
    animation: slideInUp 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.1s;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 840px;
}

.linkslist {
    display: grid;
    width: 100%;
    max-width: 840px;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 1rem;
    background-color: var(--card);
    box-shadow: 0px 5px 10px rgba(0,0,0,0.15);
    padding: 1.5rem; 
    opacity: 0;
    margin: 0 -35px;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.2s;
        @include tablet { 
        grid-template-columns: repeat(2, 1fr); 
        max-width: 600px;
        }
        @include small-tablet {
         grid-template-columns: repeat(1, 1fr); 
         max-width: 250px;
        }
}

.link-wrapper {
    opacity: 0;
    will-change: transform, opacity, filter;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @for $i from 1 through 12 {
        &:nth-child(#{$i}) {
            animation-delay: #{($i - 1) * 0.1}s;
        }
    }

}
</style>