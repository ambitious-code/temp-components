<template>
  <div class="background">
    <div class="contact-wrapper container mx-auto px-8 pt-6 md:pt-12">
      <header>
        <div class="pt-6 flex flex-col md:flex-col">
          <section class="flex-1 pt-2 text-center">
            <h1 class="leading-none md:w-4/5 mx-auto">
              Powerful features for working with a larger title
            </h1>
            <p class="mt-6 w-full md:w-3/5 mx-auto">
              Millions of people of all shapes and sizes, from wanna be founders to tik tok stars use our software to do all sorts of things like look at new Apple products and swap design layouts.
            </p>
            <button class="flex items-center w-full md:w-auto justify-center py-2 px-6 md:px-6 mt-8 mx-auto">
              Get started in seconds
            </button>
          </section>
          <section class="hero-img flex flex-1 justify-center text-center mt-6 mx-auto md:mt-0 max-h-56 md:max-h-64">
            <div class="h-64 overflow-hidden">
              <img src="/img/iphone2.png" alt="" class="h-more w-auto mx-auto">
            </div>
          </section>
        </div>
      </header>
    </div>
  </div>
</template>

<script>

  export default {
    name: "HeroTwo",
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg);
  }
  h1 {
    color: var(--color);
    font-size: 3rem;
    font-weight: 800;
    @media(min-width:768px) {
      font-size: 4rem;
    }
  }
  button {
    background: var(--color-primary);
    color: var(--color-inverse);
    border-radius: var(--round);
    font-weight: 700;
    font-size: 1rem;
  }
</style>
