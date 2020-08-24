<template>
  <v-card class="pc-card__entire-body" rounded-lg>
    <div class="pc-card__title text-h6 font-weight-black">
      <div class="pc-card__main_title">
        <slot name="title">
          Data Card
        </slot>
      </div>
      <div class="pc-card__main_settings">
        <slot name="actions">
          <v-icon>mdi-cog</v-icon>
        </slot>
      </div>
    </div>
    <div class="pc-card__content">
      <div class="pc-card__graph">
        <slot name="graph">
          <v-img src="https://picsum.photos/510/300?random" class="pc-card__image"></v-img>
        </slot>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import {} from '@vue/composition-api';

export default {
  name: 'PCCard',
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
.pc-card {
  &__entire-body {
    height: 100%;
  }
  &__title {
    display: flex;
    justify-content: space-between;
  }
  &__main_title {
    display: flex;
  }
  &__main_settings {
    display: flex;
  }
  &__content {
    padding: 10px;
    background: #f2f2f2;
    border: 1px solid #828282;
    border-radius: 10px;
  }

  &__graph {
  }
}
</style>
