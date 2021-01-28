<template>
  <div class="background">
    <div class="contact-wrapper container mx-auto">
      <nav class="m-0">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="/" class="header-logo">Source</a>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="#" class="px-3 py-2">Products</a>

                  <a href="#" class="px-3 py-2">Users</a>

                  <a href="#" class="px-3 py-2">Pricing</a>

                  <a href="#" class="px-3 py-2">Company</a>
                </div>
              </div>
                <div class="ml-3 relative">
                  <button class="cta max-w-xs rounded flex items-center text-sm font-bold text-white py-2 px-4">
                    <span class="sr-only">Sign up</span>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            <div class="flex md:hidden">
              <!-- Mobile menu button -->
              <button
                class="mobile-nav-btn inline-flex items-center justify-center p-2"
                @click.prevent="toggleDropdown"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Show when menu is closed -->
                <Menu class="block h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile nav -->
        <div
          class="mobile-nav"
          :class="{open: state}"
        >
          <!-- Close icon: X -->
          <button
            class="close-icon inline-flex items-center justify-center p-2"
            @click.prevent="toggleDropdown"
          >
            <X class="h-6 w-6" />
          </button>
          <div class="flex items-center">
            <div class="flex flex-col w-full items-baseline">
              <a href="#" class="px-4 py-3 w-auto">Products</a>

              <a href="#" class="px-4 py-3 w-auto">Users</a>

              <a href="#" class="px-4 py-3 w-auto">Pricing</a>

              <a href="#" class="px-4 py-3 w-auto">Company</a>
              <div class="mobile-cta px-4 py-4 w-full flex justify-center">
                <button class="cta max-w-xs rounded flex items-center text-sm font-bold text-white py-2 px-4">
                  <span class="sr-only">Sign up</span>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import Menu from '../icons/heroicons/Menu.vue'
  import X from '../icons/heroicons/X.vue'
  
  export default {
    name: "HeaderNav",
    components: {
      Menu,
      X
    },
    data: function() {
      return {
        state: false
      }
    },
    methods: {
      toggleDropdown () {
        this.state = !this.state
      },
    }
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg);
  }
  nav {
    background: transparent;
    border-radius: var(--round);
    a {
      color: vra(--color);
      font-weight: 700;
      font-size: 1rem;
      &:hover {
        color: var(--color-primary);
      }
      &.header-logo {
        color: var(--color-primary);
        font-weight: 800;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
  }
  .cta {
    background: var(--color-primary);
    border-radius: var(--round);
    &:hover {
      background: var(--color-secondary);
    }
  }
  .mobile-nav-btn {
    color: var(--color);
  }
  .mobile-nav {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    display: none;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--round);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform-origin: 100% 0;
    z-index: 100;
    &.open {
      display: block;
    }
    .close-icon {
      position: absolute;
      right: 0.25rem;
      top: 0;
      color: var(--color-tertiary);
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  .mobile-cta  {
    background: var(--bg-secondary);
    width: 100%;
    border-bottom-left-radius: var(--round);
    border-bottom-right-radius: var(--round);
  }
</style>