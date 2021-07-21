<template>
    <div class="blocks">
        <div v-for="article in articles" class="block">
            <router-link :to="article.path">
                <div v-if="article.frontmatter.cover" v-bind:style="{'background-image':'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + $withBase(article.frontmatter.cover) + ')'}" class="cover" />
                <h2>
                        {{ article.frontmatter.title }}
                </h2>
            </router-link>
            <p>{{ article.frontmatter.date | formatDate }}</p>
            <p>{{ article.frontmatter.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['dir'],
    computed: {
        articles() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.dir) && !x.frontmatter.article_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>