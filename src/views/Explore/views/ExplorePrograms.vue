<template>
  <div class="explore-program__entire-body">
    <div class="explore-program__title text-h3 font-weight-black">Explore Programs</div>
    <div class="explore-program__image-card">
      <ImageCard> </ImageCard>
    </div>

    <div class="explore-program__explore-card">
      <explore-card v-for="item in items" :key="item.title"></explore-card>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/composition-api';
import { ImageCard, ExploreCard } from '../components';

export default {
  name: 'ExploreProgram',
  components: {
    ImageCard,
    ExploreCard
  },
  setup() {
    const items = ref([
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' },
      { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
      { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
      { title: 'Participant', image: 'https://picsum.photos/510/300?random' }
    ]);
    return { items };
  }
};
</script>

<style lang="scss">
.explore-program {
  &__entire-body {
    width: 100%;
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-top: 126px;
    margin-bottom: 47px;
  }

  &__image-card {
    margin-left: 145px;
    margin-right: 145px;
  }

  &__explore-card {
    margin-top: 44px;
    margin-left: 185px;
    margin-bottom: 43px;
    display: grid;
    grid-template-columns: repeat(2, 475px);
    grid-template-rows: repeat(2, 375px);
    grid-column-gap: 120px;
    grid-row-gap: 43px;
  }
}
</style>
