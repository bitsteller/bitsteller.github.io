<template>
    <div class="blocks">
        <div v-for="article in articles" class="block">
            <img v-if="article.frontmatter.cover" v-bind:src="$withBase(article.frontmatter.cover)" />
            <h2>
                <router-link :to="article.path">
                    {{ article.frontmatter.title }}
                </router-link>
            </h2>
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