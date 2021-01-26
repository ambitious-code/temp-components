<template>
  <div>
    <EditSidebar />
    <Features />
    <Contact />
  </div>
</template>

<script>
import EditSidebar from '~/components/admin-ui/EditSidebar.vue'
import Contact from './components/Contact.vue'
import Features from './components/Features.vue'
  export default {
    components: { 
      Features,
      Contact,
      EditSidebar
    },
  }
  </script>

<style lang="scss" scoped>

</style>