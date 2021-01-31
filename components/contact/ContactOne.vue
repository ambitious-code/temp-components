<template>
  <div class="background">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" class="position-absolute top-0 width-full mt-n1-fluid" style="transform: scaleY(-1);"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#f6f9fc"></path></svg>
    <div class="contact-wrapper container mx-auto px-8 pt-12 pb-16">
      <main class="contact-info">
        <h2>Contact Us</h2>
        <p>We want to hear from you! Reach out using one of the options below or send a message here.</p>
        <div class="contact-details">
          <div class="address">
            1234 Acme Avenue <br/>
            Portland, OR 97820
          </div>
          <div class="phone">
            555-900-0987
          </div>
        </div>
        <div class="signup">
          <form action="">
            <input type="email" placeholder="Email" class="p-2 mb-2">
            <input type="text" placeholder="Message" class="p-2 mb-2">
            <button>Submit</button>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactOne',
  }
</script>

<style lang="scss" scoped>
  .background {
    // Use an image for the background
    // background: url("/img/particle-bg.png") center center;
    // background-size: cover;

    // Or a solid color
    background: var(--bg-dark);

    // Or a gradient
    // background: radial-gradient(circle, rgba(44,82,130,1) 0%, rgba(0,96,255,1) 100%);
  }
  // Arc path at top of component
  svg {
    path {
      // Fiil needs to match the bg of the component above
      fill: var(--bg);
    }
  }
  .contact-wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 3rem;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    button {
      background: var(--color-primary);
      color: var(--color-inverse);
      padding: 0.75rem;
      border-radius:var(--button-round);
      &:hover {
        background: var(--color-secondary);
      }
    }
    input {
      width: 100%;
      border-radius: var(--round-sm);
      background: var(--bg);
      @media (min-width: 640px) {
        width: 90%;
      }
      @media (min-width: 768px) {
        width: 90%;
      }
      @media (min-width: 1024px) {
        width: 60%;
      }
    }
    button {
      display: block;
      min-width: 100%;
      border-radius: var(--round-sm);
      @media (min-width: 640px) {
        min-width: 6rem;
      }
    }
  }
  .contact-info {
    padding: 2rem;
    color: var(--color-inverse);
  }
  .address, .phone, .email {
    font-weight: 600;
    margin: 1rem 0;
    font-size: 1.2em;
  }
  img {
    display: none;
    @media (min-width: 640px) {
      position: absolute;
      left: 50%;
      right: 0;
      display: block;
      min-height: 100%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
  }
</style>