<template>
  <div class="background">
    <div class="container mx-auto px-8 py-16">
      <footer class="flex flex-col lg:flex-row">
        <div class="flex flex-auto flex-wrap lg:flex-no-wrap">
          <section class="w-1/2 lg:w-auto flex-auto mr-0 lg:mr-8 mt-12 lg:mt-0">
            <h3>Company</h3>
            <ul>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
          <section class="w-1/2 lg:w-auto flex-auto mr-0 lg:mr-8 mt-12 lg:mt-0">
            <h3>Products</h3>
            <ul>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
          <section class="w-1/2 lg:w-auto flex-auto mr-0 lg:mr-8 mt-12 lg:mt-0">
            <h3>Users</h3>
            <ul>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
          <section class="w-1/2 lg:w-auto flex-auto mr-0 lg:mr-8 mt-12 lg:mt-0">
            <h3>Legal</h3>
            <ul>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
        </div>
        <section class="max-w-full lg:max-w-xs mt-12 lg:mt-0">
          <h3>Join Our Newsletter</h3>
          <p class="mt-2">
            Be the first to know about new features and resources. All you need to do is turn over that precious email.
          </p>
          <form class="mt-6 flex flex-row">
            <input type="text" placeholder="Email" class="px-4 py-2 flex-auto">
            <button class="flex-1 md:inline-block p-2 ml-2">Join</button>
          </form>
        </section>
      </footer>
      <section class="footnote flex flex-row mt-8 pt-8 lg:mt-16 lg:pt-16 w-full justify-items-stretch">
        <div class="flex-1">
          <p>© 2021 Source. All rights reserved.</p>
        </div>
        <div class="social-icons flex flex-row flex-1 justify-end">
          <a href="#" class="ml-4">
            <Twitter class="w-6"/>
          </a>
          <a href="#" class="ml-4">
            <Facebook class="w-6"/>
          </a>
          <a href="#" class="ml-4">
            <Instagram class="w-6"/>
          </a>
          <a href="#" class="ml-4">
            <Pinterest class="w-6"/>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Twitter from '../icons/social/Twitter.vue'
  import Facebook from '../icons/social/Facebook.vue'
  import Instagram from '../icons/social/Instagram.vue'
  import Pinterest from '../icons/social/Pinterest.vue'

  export default {
    components: { 
      Twitter,
      Facebook,
      Instagram,
      Pinterest
    },
    name: 'FooterTewo',
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg);
  }
  .social-icons {
    a {
      color: var(--color-tertiary);
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  h3 {
    font-weight: 600;
  }
  li {
    a {
      color: var(--color);
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  input {
    background: var(--bg-secondary);
    border-radius: var(--round-sm);
    border: 1px solid var(--border);
  }
  button {
    border-radius: var(--round-sm);
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
    color: var(--color-inverse);
    &:hover {
      background: var(--color-secondary);
      border-color: var(--color-secondary);
    }
  }
  .footnote {
    color: var(--color-tertiary);
    border-top: 1px solid var(--border);
  }
</style>