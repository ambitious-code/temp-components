<template>
  <div class="background">
    <div class="contact-wrapper container mx-auto px-8 py-8">
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
            <input type="email" placeholder="Email">
            <input type="text" placeholder="Message">
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
    background: url("https://images.unsplash.com/photo-1611314601750-d9e27361fe95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2604&q=80") center center;
    background-size: cover;
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
      border-radius: 0.25rem;
      &:hover {
        background: var(--color-secondary);
      }
    }
    input {
      padding: 0.75rem;
      margin: 0.25rem 0;
      width: 100%;
      border-radius: 0.25rem;
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
      @media (min-width: 640px) {
        min-width: 6rem;
      }
    }
  }
  .contact-info {
    padding: 2rem;
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
      border-radius: 0;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
  }
</style>