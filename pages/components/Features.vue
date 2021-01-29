<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <FeaturesOne v-if="activeLayout == 'one'"/>
      <FeaturesTwo v-if="activeLayout == 'two'"/>
    </transition>
  </div>
</template>

<script>
  import FeaturesTwo from '~/components/features/FeaturesTwo.vue'
  import FeaturesOne from '~/components/features/FeaturesOne.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    components: {
      FeaturesTwo,
      FeaturesOne,
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