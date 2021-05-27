<template>
  <div class="nav">
    <Logo negative />

    <div class="nav__links">
      <div
        v-for="item in $t('global.header.navLinks')"
        :key="item.title"
      >
        <a
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.title }}
        </a>
      </div>

      <b-form-select
        v-model="$i18n.locale"
      >
        <b-form-select-option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.name }}
        </b-form-select-option>
      </b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      padding: .5rem 1rem;
      color: #fff;
    }

    ::v-deep .custom-select {
      text-align-last: center;
      margin: 0;
      padding: .25rem 1rem;
      color: #fff;
      background: rgba(#fff, .2);
      font-weight: 600;
      border: none;
      border-radius: .5rem;
      cursor: pointer;

      &::after {
        color: $primary;
      }
    }
  }
}
</style>
