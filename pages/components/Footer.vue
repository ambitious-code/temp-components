<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <FooterOne v-if="activeLayout == 'one'" />
      <FooterTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import FooterOne from '~/components/footer/FooterOne.vue'
  import FooterTwo from '~/components/footer/FooterTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    components: {
      FooterOne,
      FooterTwo,
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