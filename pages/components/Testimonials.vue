<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <TestimonialOne v-if="activeLayout == 'one'" />
      <TestimonialTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import TestimonialOne from '~/components/testimonials/TestimonialOne.vue'
  import TestimonialTwo from '~/components/testimonials/TestimonialTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    components: {
      TestimonialOne,
      TestimonialTwo,
      Selector
    },
    methods: {
      layoutSelection(value) {
        this.activeLayout = value
      }
    },
    data: function() {
      return {
        activeLayout: 'one',
      }
    },
  }
</script>

<style lang="scss" scoped>
  section {
    button {
      &.active {
        background: var(--color-primary);
        color: white;
      }
    }
  }
</style>