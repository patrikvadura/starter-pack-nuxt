<template>
  <b-button
    :id="id"
    :href="href"
    type="submit"
    class="custom-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <template v-if="icon">
      <div class="custom-button__box">
        <template v-if="!right">
          <b-icon
            class="custom-button__box--icon-left"
            :icon="icon"
            :style="{ color: `#fff` }"
          />

          {{ title }}
        </template>

        <template v-else>
          {{ title }}

          <b-icon
            class="custom-button__box--icon-right"
            :icon="icon"
            :style="{ color: `#fff` }"
          />
        </template>
      </div>
    </template>

    <template v-else>
      {{ title }}
    </template>
  </b-button>
</template>

<script>
export default {
  props: {
    // default
    title: { type: String, required: false, default: '' },
    id: { type: String, required: false, default: '' },
    href: { type: String, required: false, default: '' },

    // color variations
    primary: { type: Boolean, required: false, default: false },
    secondary: { type: Boolean, required: false, default: false },
    light: { type: Boolean, required: false, default: false },
    gray: { type: Boolean, required: false, default: false },

    // atributes
    disabled: { type: Boolean, required: false, default: false },
    plain: { type: Boolean, required: false, default: false },

    // icons
    icon: { type: String, required: false, default: '' },

    // positioning
    right: { type: Boolean, required: false, default: false },

    // sizing
    wide: { type: Boolean, required: false, default: false },
    wideTablet: { type: Boolean, required: false, default: false },
    wideMobile: { type: Boolean, required: false, default: false },
    height: { type: Boolean, required: false, default: false },
    heightTablet: { type: Boolean, required: false, default: false },
    heightMobile: { type: Boolean, required: false, default: false }
  },

  computed: {
    classes () {
      return {
        // color variations
        'custom-button': this.primary,
        'custom-button--secondary': this.secondary,
        'custom-button--light': this.light,
        'custom-button--gray': this.gray,

        // atributes
        'custom-button--disabled': this.disabled,
        'custom-button--plain': this.plain,

        // sizing
        'custom-button--wide': this.wide,
        'custom-button--wideTablet': this.wideTablet,
        'custom-button--wideMobile': this.wideMobile,
        'custom-button--height': this.height,
        'custom-button--heightTablet': this.heightTablet,
        'custom-button--heightMobile': this.heightMobile
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin heightBtn {
  margin: .5rem 0 0 0;
  height: 4rem;
  line-height: 2rem;
}

@mixin widthBtn {
  margin: .5rem 0 0 0;
  width: 100%;
}

button:focus {
  outline: none;
}

.custom-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 3rem;
  line-height: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  padding: .5rem 3rem;
  color: #fff;
  border: none;
  border-radius: .5rem;
  background: $primary;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background: $secondary;
    color: #fff;
  }

  // atributes
  &--disabled {
    opacity: .3;
    cursor: none;
  }

  &--plain {
    padding: 0 0 .5rem 0;
    margin: 0;
    height: inherit;
    width: inherit;
    text-align: left;
    background: none;
    color: $primary;
    line-height: 1rem !important;

    &:hover {
      background: none;
      color: $primary;
    }
  }

  // icons
  &__box {
    display: inline-flex;
    align-items: center;
    padding: 0;

    &--icon {
      display: inline-flex;
      width: 2rem;

      &-right {
        margin-left: .5rem;
      }

      &-left {
        margin-right: .5rem;
      }
    }
  }

  // color variables
  &--secondary {
    background: $secondary;
    color: $white;

    &:hover {
      background: $primary;
    }
  }

  &--light {
    background: rgba(#fff, .05);
    color: #fff;

    &:hover {
      background: $secondary;
      color: #fff;
    }
  }

  &--gray {
    background: rgba(#fff, .05);
    color: $primary;

    &:hover {
      background: $secondary;
    }
  }

  // sizing
  &--height {
    @include heightBtn;

    &Tablet {
      @include media-breakpoint-down(md) {
        @include heightBtn;
      }
    }

    &Mobile {
      @include media-breakpoint-down(sm) {
        @include heightBtn;
      }
    }
  }

  &--wide {
    @include widthBtn;

    &Tablet {
      @include media-breakpoint-down(md) {
        @include widthBtn;
      }
    }

    &Mobile {
      @include media-breakpoint-down(sm) {
        @include widthBtn;
      }
    }
  }
}
</style>
