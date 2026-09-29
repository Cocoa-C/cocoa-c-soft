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
            <div
                class="blog-list"
                v-for="(article, index) in articles"
                :key="getArticleSlug(article) || article.title || 'blog-item'"
                :style="{ animationDelay: `${120 + Math.min(index, 8) * 100}ms` }"
            >
                <NuxtLink :to="getArticleLink(article)" class="blogs">
                    <BlogCard :title="article.title" :date="article.date" :description="article.description" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 840px;
    padding: 112px 16px 80px;
    box-sizing: border-box;
}

.title {
    display: flex;
    align-items: center;
    align-self: stretch;
    margin: 0 10px 12px;
    opacity: 0;
    animation: slideInUp 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.title h2 {
    position: relative;
    margin: 0;
    padding-left: 15px;
    color: var(--accent-300);
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 800;

    &::before {
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 0;
        width: 4px;
        content: '';
        background: var(--accent-500);
        box-shadow: 0 0 10px rgba(55, 197, 220, 0.5);
    }
}

.blog-list {
    max-width: 840px;
    width: 100%;
    opacity: 0;
    animation: slideInUp 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.blogs {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 8px 10px;
    border: 1px solid rgba(54, 163, 190, 0.24);
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    background-color: rgba(249, 254, 255, 0.96);
    background-image:
        linear-gradient(90deg, var(--accent-500) 0 34px, transparent 34px),
        radial-gradient(rgba(40, 157, 185, 0.09) 0.7px, transparent 0.7px);
    background-position: top left, top left;
    background-size: 100% 3px, 9px 9px;
    background-repeat: no-repeat, repeat;
    box-shadow: 0 7px 18px rgba(34, 85, 101, 0.1), inset 0 1px 0 #fff;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;

    &:hover,
    &:focus-visible {
        border-color: rgba(33, 169, 199, 0.55);
        box-shadow: 0 12px 25px rgba(34, 120, 143, 0.17), inset 0 1px 0 #fff;
        color: inherit;
        transform: translateY(-3px);
    }

    &:focus-visible {
        outline: 2px solid #21a9c7;
        outline-offset: 3px;
    }
}

:deep(.blog-card) {
    padding: 17px 20px 13px;
}

:deep(.blog-card h2) {
    margin: 0;
    color: var(--accent-300);
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 800;
}

:deep(.blog-card .description) {
    margin-top: 6px;
    color: #263e49;
    line-height: 1.6;
}

:deep(.blog-card .calendar) {
    gap: 5px;
    margin: 8px 0 0;
    color: #6e8893;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
}

:deep(.blog-card .calendar-icon) {
    margin: 0;
    color: #35a9c1;
}

@include dark {
    h2{
        color: #65d2e4;
    }
    .blogs {
        border-color: rgba(88, 190, 211, 0.25);
        background-color: rgba(30, 47, 55, 0.96);
        background-image:
            linear-gradient(90deg, var(--accent-500) 0 34px, transparent 34px),
            radial-gradient(rgba(88, 190, 211, 0.1) 0.7px, transparent 0.7px);
        box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    :deep(.blog-card .description) {
        color: #e0edf0;
    }
}

@media (max-width: 640px) {
    .content {
        padding-top: 96px;
    }

    :deep(.blog-card) {
        padding: 15px 16px 12px;
    }

    :deep(.blog-card h2) {
        font-size: 19px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .title,
    .blog-list {
        opacity: 1;
        animation: none;
    }

    .blogs {
        transition: none;
    }
}
</style>

