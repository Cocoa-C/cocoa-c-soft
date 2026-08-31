<script setup lang="ts">
const route = useRoute()
const slug = String(route.params.slug || '')
const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').where('slug', '==' as any, slug).first())

// update head section with md title (uses Nuxt's useHead composable)
useHead(() => ({
  title: article?.value?.title ? String(article.value.title) : 'Blog',
}))
</script>

<template>
    <div class="slug-page">
        <article class="article-content">
            <div class="content-title-block">
                <div class="title">
                    <h2>{{ article?.title }}</h2>
                </div>
                <div class="date">
                    <font-awesome-icon icon="fa-solid fa-calendar" class="calendar-icon"/>
                    <p>{{ article?.date }}</p>
                </div>
            </div>
            <div v-if="article" class="article">                
                <ContentRenderer :value="article?.body" class="content-render"/>
            </div>
        </article>
    </div>
</template>

<style scoped lang="scss">
.slug-page{
    width: 100%;
    padding-top: 200px;
    .content-title-block{
        opacity: 0;
        animation: slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-delay: 0.1s;
        will-change: transform, opacity;
    }
    .article {
        opacity: 0;
        animation: slideInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-delay: 0.2s;
        will-change: transform, opacity;
    }
    .content-title-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 35px;
        h2{
            margin: 2rem;
        }
        .date{
            display: flex;
            flex-direction: row;
            align-items: center;
            color: var(--neutral);
            margin-bottom: 10px;
        }
    }
    .content-render {
        display: flex;
        flex-direction: column;
        max-width: 960px;
        margin: 20px auto;
        padding: 0 60px;
        :deep(a) {
            color: var(--accent-500) !important;
            text-decoration: none;
        }

        :deep(h1),
        :deep(h2),
        :deep(h3) {
            margin: 1.2rem 0;
        }

        :deep(p) {
            margin: 0 0 1rem;
            line-height: 1.8;
            color: var(--text);
        }
    }

}
</style>