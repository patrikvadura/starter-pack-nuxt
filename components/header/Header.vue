<template>
  <div class="header">
    <Nav />
  </div>
</template>

<script>
export default {
  components: {
    Nav: () => import('@/components/header/Nav')
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 2rem;
  width: 100%;
  background: $primary;
}
</style>
