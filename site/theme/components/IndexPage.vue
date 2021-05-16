<template>
  <main class="page">
    <slot name="top" />

    <!--<Content class="theme-default-content" />-->

    <div>
        <ul>
        <li v-for="page in $pagination.pages">
            <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
        </li>
        </ul>
        <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
        </div>
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page
  padding-bottom 2rem
  display block
</style>