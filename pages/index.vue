<template>
  <div>
    <h1>Sample pages</h1>
    <ul>
      <li>
        <a href="/sample">Example one</a>
      </li>
    </ul>
    <h1>Components</h1>
    <ul>
      <li>
        <a href="/components/features">Features</a>
      </li>
      <li>
        <a href="/components/contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 1.875rem;
    font-weight: 600;
  }
  a {
    color: #3182ce;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
