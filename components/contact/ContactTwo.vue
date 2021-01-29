<template>
  <div class="background">
    <div class="contact-wrapper container mx-auto px-8 py-16">
      <main class="contact-info">
        <h2>Contact Us</h2>
        <p>We want to hear from you! Reach out using one of the options below or send a message here.</p>
        <div class="contact-details">
          <div class="address">
            1234 Acme Avenue<br/>
            Portland, OR 97820
          </div>
          <div class="phone">
            555-900-0987
          </div>
          <div class="email">
            <a href="#">support@companyname.com</a>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import Mail from '../icons/heroicons/Mail.vue'
  export default {
  components: { Mail },
    name: 'ContactTwo',
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg);
  }
  .contact-wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 3rem;
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    a {
      color: var(--color-primary);
      text-decoration: underline;
      &:hover {
        color: var(--color-secondary);
      }
    }
    button {
      background: var(--color-primary);
      color: var(--color-inverse);
      padding: 0.75rem;
      border-radius: var(--round-sm);
      border: 1px solid var(--color-primary);
      &:hover {
        background: var(--color-secondary);
        border-color: var(--color-secondary);
      }
    }
    label {
      display: block;
    }
    input {
      padding: 0.75rem;
      width: 40%;
      border-radius: var(--round-sm);
      border: 1px solid var(--border);
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
</style>