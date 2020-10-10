<template>
  <div class="invite__container">
    <div v-if="pass !== invitePages[getSchool].password" class="invite__wrapper-password">
      <div class="invite__password-title">
        <v-btn color="red" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getSchool }}</v-btn
        >
      </div>
      <div class="invite__password">
        <v-text-field
          v-model="inputPassword"
          :type="show1 ? 'text' : 'password'"
          depressed
          label="Password"
          outlined
          @keyup.enter="pass = inputPassword"
        />
        <v-btn
          class="invite__password-button text-uppercase"
          outlined
          hide-details
          depressed
          @click="pass = inputPassword"
          >View Invite</v-btn
        >
      </div>
    </div>

    <!-- START OF PRIMARY PAGE   -->
    <div v-else class="invite__wrapper">
      <div class="invite__wrapper-column-left">
        <div>
          <v-btn
            rounded
            color="grey"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >School Invite</v-btn
          >
        </div>
        <div>
          <span class="invite__title text-center"
            ><v-icon color="blue" class="invite__title-icon" x-large>mdi-telegram</v-icon>Invite for
            <span class="invite__title-entity">{{ getSchool }}</span></span
          >
        </div>

        <div>
          <iframe
            class="invite__video"
            :src="`https://www.youtube.com/embed/${invitePages[getSchool].video}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="invite__wrapper-column-right">
        <div class="invite__recommendations-title">RECOMMENDED</div>
        <div><v-btn class="invite__cta" x-large rounded outlined depressed>Sign-up</v-btn></div>

        <div class="invite__resources-title">RESOURCES</div>
        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Schedule Meeting</v-btn
          >
        </div>

        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Watch Presentation</v-btn
          >
        </div>

        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Ask Video Question</v-btn
          >
        </div>

        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Pricing & Sponsorship</v-btn
          >
        </div>

        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Sponsor & Transfer</v-btn
          >
        </div>
        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed>View Balance</v-btn>
        </div>
        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Explore Programs</v-btn
          >
        </div>
        <div>
          <v-btn class="invite__cta" color="blue" small rounded dark depressed
            >Watch Introduction Video</v-btn
          >
        </div>
        <!-- <div class="invite__resources">hi</div> -->
      </div>

      <!-- <div><v-btn>Students</v-btn> <v-btn>Teachers</v-btn></div> -->
    </div>
  </div>
</template>

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
  setup(props, { root: { $router } }) {
    const invitePages = {
      'Arroyo High School': {
        password: '123',
        video: 'dQw4w9WgXcQ'
      },
      'San Mateo High School': {
        password: '321',
        video: 'L_jWHffIx5E'
      },
      'San Leandro High School': {
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

<style lang="scss">
.invite {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    // background-color: #404142;
  }
  &__password {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
  }

  &__password-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  &__wrapper-password {
    width: 100%;
    max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__wrapper {
    width: 100%;
    max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #3c9dcd;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-column-left {
    flex-direction: column;
    display: flex;
    margin-bottom: auto;
    // justify-content: flex-start;
    // align-items: flex-start;
  }

  &__wrapper-column-right {
    flex-direction: column;
    display: flex;
    margin-bottom: auto;
    width: 100%;
    margin: 25px;
    height: 100%;

    // justify-content: flex-start;
    // align-items: flex-start;
  }
  &__video {
    width: 720px;
    height: 480px;
    // width: 100%;
    // min-width: 360px;
    // max-height: 240px;
    margin-top: 20px;
    // margin-bottom: 20px;
    // border: 15px solid #dedede;
    border-radius: 25px;
    //.56 ratio (1.125:2)
  }

  &__title {
    font-family: Raleway;
    font-size: 30px;
    font-weight: 800;
    // padding-top: 20px;
    // padding-bottom: 20px;
    // margin-bottom: 20px;
    color: #404142;
  }

  &__recommendations-title {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #3c9dcd;
    text-align: center;
  }

  &__resources-title {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #3c9dcd;
    text-align: center;
    margin-top: 20%;
  }

  &__title-entity {
    color: #3c9dcd;
  }

  &__title-icon {
    margin-right: 12px;
  }

  &__password-title {
    width: 100%;
    margin: 20px;
    text-align: center;
  }

  &__password-title-button {
    // margin-top: 20px;
    margin-bottom: 20px;
  }

  &__resources {
    // width: 200px;
    // height: 200px;
    background-color: #dededd;
    border-radius: 25px;
    background-color: #dedede;
    width: 100%;
    // height: 100%;
    padding: 25px;
    margin-top: 25px;
    // margin-bottom: 25px;
    margin-bottom: auto;
  }

  &__cta {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
