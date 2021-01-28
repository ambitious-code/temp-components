<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <HeaderOne v-if="activeLayout == 'one'" />
      <HeaderTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import HeaderOne from '~/components/header/HeaderOne.vue'
  import HeaderTwo from '~/components/header/HeaderTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    name: "Header",
    components: {
      HeaderOne,
      HeaderTwo,
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