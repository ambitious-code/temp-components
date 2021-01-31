<template>
  <div class="background">
    <div class="container mx-auto px-8 py-16">
      <footer class="flex flex-col lg:flex-row">
        <section class="max-w-full lg:max-w-xs">
          <a href="/" class="footer-logo mb-4 block">Source</a>
          Making the world a better place by making it easier for you to design websites. That's all the world needs, right? Another website creator.
          <div class="social-icons mt-6 flex flex-row">
            <a href="#" class="mr-4">
              <Twitter class="w-6"/>
            </a>
            <a href="#" class="mr-4">
              <Facebook class="w-6"/>
            </a>
            <a href="#" class="mr-4">
              <Instagram class="w-6"/>
            </a>
            <a href="#" class="mr-4">
              <Pinterest class="w-6"/>
            </a>
          </div>
        </section>
        <div class="flex flex-auto flex-wrap lg:flex-no-wrap">
          <section class="w-1/2 lg:w-auto flex-auto ml-0 lg:ml-24 mt-12 lg:mt-0">
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
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
          <section class="w-1/2 lg:w-auto flex-auto ml-0 lg:ml-8 mt-12 lg:mt-0">
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
          <section class="w-1/2 lg:w-auto flex-auto ml-0 lg:ml-8 mt-12 lg:mt-0">
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
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
          <section class="w-1/2 lg:w-auto flex-auto ml-0 lg:ml-8 mt-12 lg:mt-0">
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
              <li class="mt-2">
                <a href="#">Link Here</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
      <section class="footnote mt-8 pt-8 lg:mt-16 lg:pt-16 w-full text-center">
        <p>© 2021 Source. All rights reserved.</p>
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
    name: 'FooterOne',
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
  .footer-logo {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .footnote {
    color: var(--color-tertiary);
    border-top: 1px solid var(--border);
  }
</style>