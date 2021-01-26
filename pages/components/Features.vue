<template>
  <div class="component-group">
    <section class="selector">
      <button @click="changeFeature('two')" class="bg-gray-200 p-2 rounded" :class="{active: activeFeature == 'two'}">
        <ViewBoards class="w-4"/>
      </button>
      <button @click="changeFeature('three')" class="bg-gray-200 p-2 rounded" :class="{active: activeFeature == 'three'}">
        <ViewGrid class="w-4"/>
      </button>
    </section>
    <transition name="fade" mode="out-in">
      <FeaturesTwo v-if="activeFeature == 'two'" class="my-12"/>
      <FeaturesThree v-if="activeFeature == 'three'" class="my-12"/>
    </transition>
  </div>
</template>

<script>
  import FeaturesTwo from '~/components/features/FeaturesTwo.vue'
  import FeaturesThree from '~/components/features/FeaturesThree.vue'
  import ViewGrid from '~/components/icons/heroicons/ViewGrid.vue'
  import ViewBoards from '~/components/icons/heroicons/ViewBoards.vue'

  export default {
    components: {
      FeaturesTwo,
      FeaturesThree,
      ViewBoards,
      ViewGrid
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
    button {
      &.active {
        background: var(--color-primary);
        color: white;
      }
    }
  }
</style>