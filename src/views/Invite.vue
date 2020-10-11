<template>
  <div class="invite__container">
    <div v-if="pass !== invitePages[getInvitee].password" class="invite__wrapper-password">
      <!-- <div class="invite__password-title">
        <v-btn color="red" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div> -->

      <div v-if="invitePages[getInvitee].user == 'school'" class="invite__password-title">
        <v-btn color="blue" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div v-if="invitePages[getInvitee].user == 'employer'">
        <v-btn color="employer" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div v-if="invitePages[getInvitee].user == 'parent'">
        <v-btn color="yellow" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div v-if="invitePages[getInvitee].user == 'teacher'">
        <v-btn color="pink" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div v-if="invitePages[getInvitee].user == 'student'">
        <v-btn color="green" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div v-if="invitePages[getInvitee].user == 'sponsor'">
        <v-btn color="red" class="invite__password-title-button" x-small outlined depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <div class="invite__password">
        <v-text-field
          v-model="inputPassword"
          :type="show1 ? 'text' : 'password'"
          depressed
          label="Password"
          outlined
          required
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
        <div v-if="invitePages[getInvitee].user == 'school'">
          <v-btn
            rounded
            color="blue"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >School Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'employer'">
          <v-btn
            rounded
            color="employer"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Employer Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'parent'">
          <v-btn
            rounded
            color="yellow"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Parent Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'teacher'">
          <v-btn
            rounded
            color="pink"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Teacher Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'student'">
          <v-btn
            rounded
            color="green"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Student Invite</v-btn
          >
        </div>

        <div v-if="invitePages[getInvitee].user == 'sponsor'">
          <v-btn
            rounded
            color="red"
            class="invite__password-title-button"
            x-small
            outlined
            depressed
            >Sponsor Invite</v-btn
          >
        </div>

        <div>
          <span class="invite__title text-center"
            ><v-icon color="blue" class="invite__title-icon" x-large>mdi-telegram</v-icon>Invite for
            <span class="invite__title-entity">{{ getInvitee }}</span></span
          >
        </div>

        <div>
          <iframe
            class="invite__video"
            :src="`https://www.youtube.com/embed/${invitePages[getInvitee].video}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="invite__wrapper-column-right">
        <!-- <div class="invite__recommendations-title">NEXT STEP</div>
        <div><v-btn class="invite__cta" x-large outlined depressed>Schedule Meeting</v-btn></div> -->

        <div class="invite__resources-title">NEXT STEP</div>
        <div><v-btn class="invite__cta2" x-large outlined depressed>Schedule Meeting</v-btn></div>
        <!-- <div class="invite__accept-decline">
          <v-btn class="invite__cta-accept-decline" color="green" large dark depressed
            >Accept</v-btn
          >
          <v-btn class="invite__cta-accept-decline" color="red" large dark depressed>Decline</v-btn>
        </div> -->

        <!-- <div>
          <v-btn class="invite__cta" color="blue" small rounded outlined dark depressed
            >Watch Presentation</v-btn
          >
        </div> -->
        <!-- <div class="invite__resources-title">MAKE ACTIONS</div> -->

        <!-- <div>
          <v-btn class="invite__cta" color="blue" small rounded outlined dark depressed
            >Pricing & Sponsorship</v-btn
          >
        </div> -->

        <!-- <div>
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
        </div> -->

        <div class="invite__resources">
          <div class="invite__resources-title2">EXPLORE RESOURCES</div>
          <div>
            <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
              >Testimonials</v-btn
            >
          </div>

          <div>
            <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
              >Survey Data</v-btn
            >
          </div>

          <div>
            <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
              >Program Videos</v-btn
            >
          </div>

          <!-- <div>
            <v-btn class="invite__cta" color="blue" small rounded dark depressed
              >Employer Examples</v-btn
            >
          </div> -->

          <div>
            <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
              >FAQ</v-btn
            >
          </div>

          <div class="invite__resources-title3">NEED HELP?</div>
          <div>
            <v-btn
              class="invite__cta-ask-question"
              color="grey darken-3"
              small
              rounded
              outlined
              depressed
              >Ask Video Question</v-btn
            >
          </div>
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
        user: 'school',
        password: '321',
        video: 'df0ZmKkzuWY'
      },
      'Terri Griffin': {
        user: 'teacher',
        password: '321',
        video: 'L_jWHffIx5E'
      },
      'Adit Garg': {
        user: 'student',
        password: '321',
        video: 'L_jWHffIx5E'
      },
      'Anthony Crecy': {
        user: 'parent',
        password: '321',
        video: 'L_jWHffIx5E'
      },
      'Office of Supervisor Nate Miley': {
        user: 'employer',
        password: '321',
        video: 'L_jWHffIx5E'
      },
      'Verizon 5G Labs': {
        user: 'sponsor',
        password: '321',
        video: 'L_jWHffIx5E'
      }
    };
    const pass = '';
    const inputPassword = '';
    const getInvitee = computed(() =>
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
      getInvitee
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
    // margin: 25px;
    margin-left: 45px;
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
    color: #404142;
    text-align: center;
  }

  &__resources-title {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    margin-top: 10%;
  }

  &__resources-title2 {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    margin-bottom: 5%;
  }

  &__resources-title3 {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    margin-bottom: 5%;
    margin-top: 12%;
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
    font-weight: 800;
  }

  &__resources {
    // width: 200px;
    // height: 200px;
    // background-color: #dedede;
    border: 1px solid #d5d5d5;
    border-radius: 7px;
    width: 100%;
    // height: 100%;
    padding: 25px;
    // margin-top: auto;
    margin-top: 50px;
    // margin-bottom: 25px;
    // margin-bottom: auto;
    margin-bottom: 25px;
  }

  &__cta {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__cta2 {
    width: 100%;
    margin-top: 10px;
    // margin-bottom: 10px;
  }

  &__cta-accept-decline {
    width: 49%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  &__cta-ask-question {
    width: 100%;
    // margin-top: 10px;
    // margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }

  &__accept-decline {
    flex-direction: row;
    display: flex;
    width: 100%;
  }
}
</style>
