<template>
  <div class="component-group">
    <Selector @selection="layoutSelection" />
    <transition name="fade" mode="out-in">
      <ContactOne v-if="activeLayout == 'one'" />
      <ContactTwo v-if="activeLayout == 'two'" />
    </transition>
  </div>
</template>

<script>
  import ContactOne from '~/components/contact/ContactOne.vue'
  import ContactTwo from '~/components/contact/ContactTwo.vue'
  import Selector from '~/components/admin-ui/Selector.vue'

  export default {
    components: {
      ContactOne,
      ContactTwo,
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