<template>
  <div class="guide__container">
    <div class="guide__bar">
      <guide-bar />
    </div>
    <div class="guide__page">
      <div class="guide__locks guide__locks--left unlocked">
        <v-icon class="guide__lock">mdi-lock</v-icon>
      </div>
      <div class="">
        <component :is="currentUnit" />
      </div>
      <div class="guide__locks guide__locks--right locked">
        <v-icon class="guide__lock">mdi-lock-open</v-icon>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.guide__ {
  &container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  &bar {
    max-width: 23vw; //325/1440
  }
  &page {
    width: 100%;
    display: flex;
    position: relative;
  }
  &locks {
    height: 100%;
    width: 70px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    &--left {
      left: 0;
      top: 0;
    }
    &--right {
      right: 0;
      top: 0;
    }
  }
  &lock {
    color: var(--v-accent-base);
    &.unlocked {
      &:hover {
        color: var(--v-success-base);
      }
    }

    &.locked {
      &:hover {
        color: var(--v-error-base);
      }
    }
  }
}
</style>
<script>
import Home from '@/views/Home.vue';
import { ref } from '@vue/composition-api';
import Bar from './Bar.vue';

export default {
  setup() {
    const currentUnit = ref(Home);
    return {
      currentUnit
    };
  },
  components: {
    'guide-bar': Bar,
    Home
  }
};
</script>
