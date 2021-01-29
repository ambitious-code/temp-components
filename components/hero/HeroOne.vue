<template>
  <div class="background">
    <div class="contact-wrapper container mx-auto px-8 py-6 md:py-16">
      <header>
        <div class="py-6 flex flex-col md:flex-row">
          <section class="flex-1 pt-2 md:mt-6 text-center md:text-left">
            <h1 class="leading-none">
              Powerful features for working with a larger title
            </h1>
            <p class="mt-6 w-full md:w-3/4">
              Millions of people of all shapes and sizes, from wanna be founders to tik tok stars use our software to do all sorts of things like look at new Apple products and swap design layouts.
            </p>
            <button class="flex items-center w-full md:w-auto justify-center py-2 px-6 md:px-6 mt-8 mx-auto md:mx-0">
              Get started in seconds
            </button>
          </section>
          <section class="hero-img flex flex-1 justify-center text-center mt-6 mx-auto md:mt-0 max-h-64 md:max-h-100">
            <div>
              <img src="/img/iphone2.png" alt="" class="max-h-full w-auto mx-auto">
            </div>
          </section>
        </div>
      </header>
    </div>
  </div>
</template>

<script>

  export default {
    name: "HeroOne",
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
