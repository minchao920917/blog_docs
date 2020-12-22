<template>
  <Common :sidebarItems="sidebarItems">
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import HomeBlog from '@theme/components/HomeBlog'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'

export default {
  components: { HomeBlog, Page, Common, Footer },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    homeCom () {
      const { type } = this.$themeConfig
      if (type !== undefined) {
        return type == 'blog' ? 'HomeBlog' : type
      }
      return 'HomeBlog'
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
