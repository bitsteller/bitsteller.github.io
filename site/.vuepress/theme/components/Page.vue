<template>


  <main>
    <div v-if="$page.frontmatter.cover" v-bind:style="{'background-image':'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + $withBase($page.frontmatter.cover) + ')'}" class="cover" />
    <div class="page">
      <slot name="top" />

      <Content class="theme-default-content" />

      <PageNav v-bind="{ sidebarItems }" />

      <slot name="bottom" />
    </div>
  </main>
</template>

<script>
import PageNav from '@theme/components/PageNav.vue'
export default {
  components: { PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
.page
  padding-bottom 2rem
  display block
</style>