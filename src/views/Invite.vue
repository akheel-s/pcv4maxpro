<template>
  <div class="invite__container">
    <div v-if="pass !== invitePages[getSchool].password" class="invite__wrapper">
      <div class="invite__password">
        <v-text-field
          v-model="inputPassword"
          depressed
          outlined
          @keyup.enter="pass = inputPassword"
        />
        <v-btn class="text-uppercase" outlined depressed @click="pass = inputPassword">enter</v-btn>
      </div>
    </div>
    <div v-else class="invite__wrapper">
      <span class="invite__title text-h1 font-weight-bold text-center">{{ getSchool }}</span>
      <iframe
        class="invite__video"
        :src="`https://www.youtube.com/embed/${invitePages[getSchool].video}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<style lang="scss">
.invite {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__password {
    display: flex;
  }
  &__wrapper {
    width: 100%;
    max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &__video {
    width: 560px;
    height: 315px;
    //.56 ratio (1.125:2)
  }
}
</style>
<script lang="ts">
import { computed, onMounted } from '@vue/composition-api';

export default {
  name: 'Invite',
  props: {
    schoolName: {
      type: String,
      default: ''
    }
  },
  setup(props, { root: { $route, $router } }) {
    const invitePages = {
      'Arroyo High School': {
        password: '123',
        video: 'dQw4w9WgXcQ'
      },
      'San Mateo High School': {
        password: '321',
        video: 'L_jWHffIx5E'
      }
    };
    const pass = '';
    const inputPassword = '';
    const getSchool = computed(() =>
      (props.schoolName as string)
        .split('-')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ')
    );
    onMounted(() => {
      const valid =
        typeof invitePages[
          (props.schoolName as string)
            .split('-')
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join(' ')
        ] !== 'undefined';
      if (!valid) $router.push({ name: '404' });
    });
    return {
      pass,
      inputPassword,
      invitePages,
      getSchool
    };
  }
};
</script>
