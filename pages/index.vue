<template>
  <div>
    <h1>Components</h1>
    <ul>
      <li>
        <a href="/pages/sample-one">Sample number one</a>
      </li>
      <li>
        <a href="/pages/sample-two">Sample number two</a>
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
