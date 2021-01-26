<template>
  <div class="component-group">
    <section class="selector">
      <button @click="changeContact('one')" class="bg-gray-200 p-2 rounded" :class="{active: activeContact == 'one'}">
        <ViewBoards class="w-4" />
      </button>
      <button @click="changeContact('two')" class="bg-gray-200 p-2 rounded" :class="{active: activeContact == 'two'}">
        <ViewGrid class="w-4" />
      </button>
    </section>
      <ContactOne v-if="activeContact == 'one'" class="my-12"/>
      <ContactTwo v-if="activeContact == 'two'" class="my-12"/>
  </div>
</template>

<script>
  import ContactOne from '~/components/contact/ContactOne.vue'
  import ContactTwo from '~/components/contact/ContactTwo.vue'
  import ViewBoards from '~/components/icons/heroicons/ViewBoards.vue'
  import ViewGrid from '~/components/icons/heroicons/ViewGrid.vue'
  export default {
    components: {
      ContactOne,
      ContactTwo,
      ViewBoards,
      ViewGrid
    },
    data: function() {
      return {
        activeContact: 'one',
      }
    },
    methods: {
      changeContact: function(value) {
        this.activeContact = value
      }
    }
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