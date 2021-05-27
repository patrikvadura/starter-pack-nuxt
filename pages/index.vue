<template>
  <div class="homepage">
    <h1 class="homepage__title">
      starter-pack-nuxt
    </h1>

    <CustomButton title="Button" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.homepage {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  &__title {
    padding-bottom: 2rem;
    color: $primary;
  }
}
</style>
