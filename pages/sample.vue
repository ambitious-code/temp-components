<template>
  <div>
    <EditSidebar />
    <HeaderNav />
    <Hero />
    <Features />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import EditSidebar from '~/components/admin-ui/EditSidebar.vue'
import Hero from './components/Hero.vue'
import Contact from './components/Contact.vue'
import Features from './components/Features.vue'
import HeaderNav from './components/HeaderNav.vue'
import Footer from './components/Footer.vue'
import Testimonials from './components/Testimonials.vue'

export default {
  components: { 
    Features,
    Contact,
    EditSidebar,
    Hero,
    HeaderNav,
    Footer,
    Testimonials
  },
}
  </script>

<style lang="scss" scoped>

</style>