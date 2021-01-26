<template>
  <div>
    <div class="selector">
      <div class="relative" :class="{shown: state}">
        <button
          class="bg-gray-200 p-2 rounded"
          type="button"
          @click.prevent="toggleDropdown"
        >
          <Adjustments class="w-4"/>
        </button>
      </div>
      <div
        class="menu bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 absolute right-0"
        style="min-width: 8rem"
        v-show="state"
        @click.prevent="state = false"
      >
        <span
          @click="changeLayout('one')"
          :class="{active: activeLayout == 'one'}"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-gray-200 cursor-pointer bg-transparent text-gray-800 flex items-center"
        >
          <ViewBoards class="w-4 inline-block mr-2"/>
          One
        </span>
        <span
          @click="changeLayout('two')"
          :class="{active: activeLayout == 'two'}"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-gray-200 cursor-pointer bg-transparent text-gray-800 flex items-center"
        >
          <ViewGrid class="w-4 inline-block mr-2"/>
          Two
        </span>
        <div
          class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
        >
        </div>
        <span
          class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-gray-200 cursor-pointer bg-transparent text-gray-800 flex items-center"
          @click="openSidebar()"
        >
          <Cog class="w-4 inline-block mr-2" />
          Edit Styles
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mutations } from '~/store/store.js'
  import ViewGrid from '~/components/icons/heroicons/ViewGrid.vue'
  import ViewBoards from '~/components/icons/heroicons/ViewBoards.vue'
  import Adjustments from '~/components/icons/heroicons/Adjustments.vue'
  import Cog from '../icons/heroicons/Cog.vue'
  
  export default {
    name: "Selector",
    components: {
      ViewBoards,
      ViewGrid,
      Adjustments,
      Cog
    },
    data: function() {
      return {
        activeLayout: 'one',
        state: false
      }
    },
    methods: {
      changeLayout: function(value) {
        this.activeLayout = value
        this.$emit('selection', value)
      },
      openSidebar() {
        mutations.toggleNav()
      },
      toggleDropdown () {
        this.state = !this.state
      },
      close (e) {
        if (!this.$el.contains(e.target)) {
          this.state = false
        }
      },
    },
    created() {
      this.$emit('selected');
    },
    mounted () {
      document.addEventListener('click', this.close)
    },
    beforeDestroy () {
      document.removeEventListener('click',this.close)
    }
  }
</script>

<style lang="scss" scoped>
  .selector {
    position: absolute;
    top: 1rem;
    right: 3rem;
    opacity: 0.1;
    transition: opacity 0.3s;
    z-index: 10;
    span {
      &.active {
        background: var(--color-primary);
        color: white;
      }
    }
  }
</style>