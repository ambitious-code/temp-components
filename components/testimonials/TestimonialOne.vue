<template>
  <div class="am__background">
    <div class="am__container">
      <section>
        <h2>Loved by almost everyone</h2>
        <p>We've asked our favorite users to tell us kind things. Those are below. We decided to throw away the bad things.</p>
      </section>
    </div>
    <div class="am__testimonial-outer-wrapper">
      <div class="am__no-scrollbar am__testimonial-wrapper">
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/slack.png" alt="">
          </div>
          <div class="am__testimonial-content">
            <div class="am__testimonial-quote">
              <p>"It happens sometimes. Friends come in and out of our lives, like busboys in a restaurant."</p>
            </div>
            <div class="attribute">Gordie Lachance, Writer</div>
          </div>
        </article>
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/netlify.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>“My mama always said life was like a box of chocolates. You never know what you're gonna get.”</p>
              </div>
              <div class="attribute">Forrest Gump, Shrimper</div>
            </div>
        </article>
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/ps.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>“You're gonna need a bigger boat.”</p>
              </div>
              <div class="attribute">One Armed Willie, Fisherman</div>
            </div>
        </article>
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/apple.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>“Magic Mirror on the wall, who is the fairest one of all?"</p>
              </div>
              <div class="attribute">Evil Witch, Sourcerer</div>
            </div>
        </article>
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/amazon.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>“Roads? Where we're going we don't need roads.”</p>
              </div>
              <div class="attribute">Emmet Brown, "Doctor"</div>
            </div>
        </article>
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/nike.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>"Hello. My name is Inigo Montoya. You killed my father. Prepare to die."</p>
              </div>
              <div class="attribute">Inigo Montoya, Swordsman</div>
            </div>
        </article>
        <!-- Start of testimonial, copy/paste section to add more -->
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/starbucks.jpg" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>"I spent my whole life not knowing what I want out of it, just chasing my tail. Now for the first time I know exactly what I want and who... that's the damnable misery of it."</p>
              </div>
              <div class="attribute">Wyatt Earp, Marshall</div>
            </div>
        </article>
        <!-- End of testimonial, copy/paste to here -->
        <article>
          <div class="am__testimonial-avatar">
            <img src="/img/testimonials/github.png" alt="">
          </div>
            <div class="am__testimonial-content">
              <div class="am__testimonial-quote">
                <p>"You're a real cool customer on the court, real chill out there, can't be rattled in your game."</p>
              </div>
              <div class="attribute">Sidney Deane, Baller</div>
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
  .am__background {
    background: var(--bg);
  }
  .am__container {
    padding: 5rem 2rem 0;
    margin-bottom: 3rem;
  }
  section {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1024px) {
      width: 60%;
    }
  }
  .am__testimonial-outer-wrapper {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    padding-bottom: 3rem;
  }
  .am__testimonial-wrapper {
    display: flex;
    flex-direction: row;
    grid-column: 1 / -1;
    column-gap: 2rem;
    padding: 3rem 1.5rem;
    overflow-x: auto;
    overflow-y: visible;
    overscroll-behavior-x: none;
  }
  article {
    position: relative;
    padding: 3rem 2.5rem 2rem;
    min-height: 16rem;
    border-radius: var(--round-sm);
    background: var(--bg-secondary);
    color: var(--color);
    box-shadow: var(--shadow-lg);
  }
  .am__testimonial-avatar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: -0.75rem auto 0;
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    img {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  .am__testimonial-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .am__testimonial-quote {
    flex-grow: 1;
    p {
      width: 16rem;
    }
  }
  .attribute {
    font-weight: 700;
    margin-top: 1rem;
  }

</style>