<template>
  <aside 
    :class="{shown: isSidebarActive}">
    <div
      class="close pr-6 pt-1"
      @click.prevent="closeSidebar"
    >
      <XCircle class="w-5 absolute cursor-pointer text-gray-400 hover:text-blue-600" />
    </div>
    <h2>Edit</h2>
    <p>
      This is where users would edit details for this component.
    </p>
  </aside>
</template>

<script>
  import { store, mutations } from '~/store/store.js'
  import XCircle from '../icons/heroicons/XCircle.vue'

  export default {
    name: "EditSidebar",
    components: {
      XCircle
    },
    computed: {
      isSidebarActive() {
        return store.isNavOpen
      }
    },
    methods: {
      toggleSidebar () {
        mutations.toggleNav()
      },
      closeSidebar: mutations.toggleNav
      // close (e) {
      //   if (!this.$el.contains(e.target)) {
      //     this.isSidebarActive = false
      //   }
      // },
    },
    created() {
      this.$emit('selected');
    }
  }
</script>

<style lang="scss" scoped>
  aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    right: -450px;
    width: calc(450px - 2rem);
    background: var(--admin-bg);
    z-index: 20;
    padding: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition:
      left 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s,
      right 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    &.shown {
      left: calc(100% - 450px + 2rem);
      right: 0;
      transition:
        left 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s,
        right 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    }
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
  }
</style>