<template>
  <div class="component-group">
    <section class="selector">
      <button @click="changeContact('one')" class="bg-gray-200 p-2 rounded" :class="{active: activeContact == 'one'}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      </button>
      <button @click="changeContact('two')" class="bg-gray-200 p-2 rounded" :class="{active: activeContact == 'two'}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>
    </section>
      <ContactOne v-if="activeContact == 'one'" class="my-12"/>
      <ContactTwo v-if="activeContact == 'two'" class="my-12"/>
  </div>
</template>

<script>
import ContactOne from '~/components/contact/ContactOne.vue'
import ContactTwo from '~/components/contact/ContactTwo.vue'
  export default {
    components: {
      ContactOne,
      ContactTwo
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
</style>