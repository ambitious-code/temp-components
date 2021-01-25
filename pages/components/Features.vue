<template>
  <div>
    <section class="my-8">
      <button @click="changeFeature('two')" class="bg-gray-200 p-2 rounded" :class="{active: activeFeature == 'two'}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      </button>
      <button @click="changeFeature('three')" class="bg-gray-200 p-2 rounded" :class="{active: activeFeature == 'three'}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </button>
    </section>
    <FeaturesTwo v-if="activeFeature == 'two'"/>
    <FeaturesThree v-if="activeFeature == 'three'"/>
  </div>
</template>

<script>
  import FeaturesTwo from '~/components/features/FeaturesTwo.vue'
  import FeaturesThree from '~/components/features/FeaturesThree.vue'

  export default {
    components: { 
      FeaturesTwo,
      FeaturesThree
    },
    data: function() {
      return {
        activeFeature: 'two',
      }
    },
    methods: {
      changeFeature: function(value) {
        this.activeFeature = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  section {
    opacity: 60%;
    &:hover {
      opacity: 100%;
    }
    button {
      &.active {
        background: var(--color-primary);
        color: white;
      }
    }
  }
</style>