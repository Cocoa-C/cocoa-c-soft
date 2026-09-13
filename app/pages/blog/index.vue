<script setup lang="ts">
useHead({
    title: "Blog",
})

type BlogArticle = {
  title?: string
  date?: string
  description?: string
  slug?: string
  path?: string
}

const getArticleSlug = (article?: BlogArticle | null) => {
  if (!article) return ''

  if (article.slug) return article.slug

  if (!article.path) return ''

  const segments = article.path.split('/')
  return segments[segments.length - 1] ?? ''
}

const toSlugNumber = (article?: BlogArticle | null) => {
  const raw = getArticleSlug(article) || '0'
  const parsed = Number.parseInt(raw, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

const getArticleLink = (article?: BlogArticle | null) => {
  const slug = getArticleSlug(article)
  return slug ? `/blog/${slug}` : '/blog'
}

const { data: articles } = await useAsyncData<BlogArticle[]>('blog', async () => {
  const list = await queryCollection('blog').all()
  return [...list].sort((a, b) => toSlugNumber(b) - toSlugNumber(a))
})
</script>

<template>
    <div class="container">
        <div class="content">
            <div class="title">
                <h2>Blog</h2>
            </div>
            <div class="blog-list" v-for="article in articles" :key="getArticleSlug(article) || article.title || 'blog-item'">
                <NuxtLink :to="getArticleLink(article)" class="blogs">
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
    padding-top: 100px;
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
    margin: 10px;
    background-color: var(--card);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    &:hover{
    box-shadow: 0 15px 10px rgba(0,0,0,0.15);
    color: var(--accent-500);
    transform: translateY(-5px);
    }
}
</style>
