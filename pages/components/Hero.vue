<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <HeroOne v-if="activeLayout == 'one'" />
      <HeroTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import HeroOne from '~/components/hero/HeroOne.vue'
  import HeroTwo from '~/components/hero/HeroTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    name: "Hero",
    components: {
      HeroOne,
      HeroTwo,
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