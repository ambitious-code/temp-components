<template>
  <div>
    <EditSidebar />
    <HeaderNav />
    <Hero />
    <Features />
    <Contact />
  </div>
</template>

<script>
import EditSidebar from '~/components/admin-ui/EditSidebar.vue'
import Hero from './components/Hero.vue'
import Contact from './components/Contact.vue'
import Features from './components/Features.vue'
import HeaderNav from './components/HeaderNav.vue'

export default {
  components: { 
    Features,
    Contact,
    EditSidebar,
    Hero,
    HeaderNav
  },
}
  </script>

<style lang="scss" scoped>

</style>