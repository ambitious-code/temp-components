<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <HeaderNavOne v-if="activeLayout == 'one'" />
      <HeaderNavTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import HeaderNavOne from '~/components/header-nav/HeaderNavOne.vue'
  import HeaderNavTwo from '~/components/header-nav/HeaderNavTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    components: {
      HeaderNavOne,
      HeaderNavTwo,
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