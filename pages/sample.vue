<template>
  <div>
    <EditSidebar />
    <HeaderNav />
    <Header />
    <Features />
    <Contact />
  </div>
</template>

<script>
import EditSidebar from '~/components/admin-ui/EditSidebar.vue'
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Features from './components/Features.vue'
import HeaderNav from './components/HeaderNav.vue'

export default {
  components: { 
    Features,
    Contact,
    EditSidebar,
    Header,
    HeaderNav
  },
}
  </script>

<style lang="scss" scoped>

</style>