<script setup lang="ts">
useHead({
    title: "Blog",
})
const { data: articles } = await useAsyncData('blog', () =>
  queryCollection('blog').all(),
)
</script>

<template>
    <div class="container">
        <div class="content">
            <div class="title">
                <h2>Blog</h2>
            </div>
            <div class="blog-list" v-for="article in articles" :key="article.path">
                <NuxtLink :to="`/blog/${article.slug ?? article.path.split('/').pop()}`" class="blogs">
                    <BlogCard :title="article.title" :date="article.date" :description="article.description" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 840px;
    padding-top: 200px;
}

.title{
    display: flex;
    align-items: center;
}

h2 { 
    margin: 1rem; 
    opacity: 0;
    animation: slideInUp 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.blog-list{
    max-width: 840px;
    width: 100%;
    animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: 0.2s;
    opacity: 0;
    animation-delay: 0.1s;
}

h2{
    margin: 2rem;
}

.blogs{
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    border-radius: 10px;
    background-color: var(--card);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    &:hover{
    box-shadow: 0 15px 10px rgba(0,0,0,0.15);
    color: var(--accent-500);
    transform: translateY(-5px);
    }
}
</style>