<template>
  <div class="background">
    <div class="feature-wrapper container mx-auto px-8 py-24">
      <section class="text">
        <h2>Source for Business</h2>
        <p>A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website. Wireframes are created for the purpose of arranging elements to best accomplish a particular purpose.</p>
      </section>
      <dl>
        <div class="feature">
          <div class="icon">
            <Annotation />
          </div>
          <dt>
            Dynamic website
          </dt>
          <dd>
            It is well recognized that component of interaction design is an essential part
          </dd>
        </div>
        <div class="feature">
          <div class="icon">
            <Adjustments />
          </div>
          <dt>
            Static website
          </dt>
          <dd>
            To enable a pleasurable and desirable end user experience, the following
          </dd>
        </div>
        <div class="feature">
          <div class="icon">
            <Beaker />
          </div>
          <dt>
            Interactive Content
          </dt>
          <dd>
            Usability is attached with all tools used by humans and is extended to both digital 
          </dd>
        </div>
        <div class="feature">
          <div class="icon">
            <ChartSquareBar />
          </div>
          <dt>
            Interactive Design
          </dt>
          <dd>
            The goal of interaction design is to create a product that produces an efficient 
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
  import Annotation from '~/components/icons/heroicons/Annotation.vue'
  import Adjustments from '~/components/icons/heroicons/Adjustments.vue'
  import Beaker from '~/components/icons/heroicons/Beaker.vue'
  import ChartSquareBar from '~/components/icons/heroicons/ChartSquareBar.vue'
  export default {
    name: "FeaturesOne",
    components: {
      Annotation,
      Adjustments,
      Beaker,
      ChartSquareBar
    },
  }
</script>

<style lang="scss" scoped>
  .background {
    background: var(--bg-secondary);
  }
  .feature-wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 3rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
    width: 100%;
    margin: 0 auto;
    font-size: 1.1rem;
    color: var(--color);
    @media (min-width: 640px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 100%;
    }
  }
  dl {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 2rem;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 0;
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 0;
    }
  }
  dt {
    font-weight: 600;
    font-size: 1.3rem;
    margin: 0.5rem auto;
  }
  dd {
    color: var(--color-tertiary);
  }
  .icon {
    width: 2.5rem;
    background: var(--color-primary);
    border-radius: var(--round-sm);
    padding: 0.5rem;
    margin: 0;
    color: var(--color-inverse);
  }
  .feature {
    justify-content: left;
    align-items: left;
    text-align: left;
  }
</style>