<template>
  <div class="background">
    <div class="container mx-auto px-8 pt-20 mb-12">
      <section class="text-center w-full lg:w-3/5 mx-auto">
        <h2 class="leading-none">Loved by almost everyone</h2>
        <p>We've asked our favorite users to tell us kind things. Those are below. We decided to throw away the bad things.</p>
      </section>
    </div>
    <div class="grid grid-flow-col grid-cols-7 pb-20">
      <div class="no-scrollbar flex flex-row col-span-full gap-x-8 py-12 px-6 overflow-x-auto overflow-y-visible overscroll-x-none">
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/slack.png" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">"It happens sometimes. Friends come in and out of our lives, like busboys in a restaurant."</p>
            </div>
            <div class="attribute mt-4">Gordie Lachance, Writer</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/netlify.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">“My mama always said life was like a box of chocolates. You never know what you're gonna get.”</p>
            </div>
            <div class="attribute mt-4">Forrest Gump, Shrimper</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/ps.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">“You're gonna need a bigger boat.”</p>
            </div>
            <div class="attribute mt-4">One Armed Willie, Fisherman</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/apple.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">“Magic Mirror on the wall, who is the fairest one of all?"</p>
            </div>
            <div class="attribute mt-4">Evil Witch, Sourcerer</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/amazon.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">“Roads? Where we're going we don't need roads.”</p>
            </div>
            <div class="attribute mt-4">Emmet Brown, "Doctor"</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/nike.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">"Hello. My name is Inigo Montoya. You killed my father. Prepare to die."</p>
            </div>
            <div class="attribute mt-4">Inigo Montoya, Swordsman</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/starbucks.jpg" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">"I spent my whole life not knowing what I want out of it, just chasing my tail. Now for the first time I know exactly what I want and who... that's the damnable misery of it."</p>
            </div>
            <div class="attribute mt-4">Wyatt Earp, Marshall</div>
          </div>
        </article>
        <article class="pt-12 pb-8 px-10 relative shadow-lg min-h-64">
          <div class="w-12 h-12 overflow-hidden absolute top-0 rounded-full inset-x-0 mx-auto -mt-3 shadow-md">
            <img src="/img/testimonials/github.png" alt="" class="min-w-full min-h-full object-cover">
          </div>
          <div class="flex flex-col h-full">
            <div class="flex-grow">
              <p class="w-64">"You're a real cool customer on the court, real chill out there, can't be rattled in your game."</p>
            </div>
            <div class="attribute mt-4">Sidney Deane, Baller</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TestimonialOne',
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg);
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }
  article {
    border-radius: var(--round-sm);
    background: var(--bg-secondary);
    color: var(--color);
  }
  .attribute {
    font-weight: 700;
  }
</style>