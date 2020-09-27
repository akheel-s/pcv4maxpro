<template>
  <div>
    <v-parallax
      dark
      height="600"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/ppa_grey.png"
      class="landing__hero"
    >
      <div class="landing__hero-body">
        <div class="landing__hero-logo">
          <v-img
            src="https://f.hubspotusercontent00.net/hubfs/2480959/PilotCity_Wireframe_White.svg"
          ></v-img>
        </div>

        <div class="landing__hero-title">Digital programs, for digital cities.</div>

        <div class="landing__hero-cta">
          <v-text-field dark rounded outlined label="Enter your email"></v-text-field
          ><v-btn class="landing__hero-cta-button" x-large rounded depressed dark
            >Build Communities</v-btn
          >
        </div>

        <div class="landing__hero-citizenchips text-center">
          <v-chip center dark color="green" class="landing__hero-citizenchips-group"
            >For Students</v-chip
          >
          <v-chip center dark color="purple" class="landing__hero-citizenchips-group"
            >For Employers</v-chip
          >
          <v-chip center dark color="pink" class="landing__hero-citizenchips-group"
            >For Teachers</v-chip
          >
          <v-chip center dark color="blue" class="landing__hero-citizenchips-group"
            >For Schools</v-chip
          >
          <v-chip center dark color="yellow" class="landing__hero-citizenchips-group"
            >For Parents</v-chip
          >
        </div>
      </div>
    </v-parallax>

    <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__single-column">
        <div class="landing__row1">
          <v-btn dark depressed outlined small>PilotCity's Flagship Program</v-btn>
        </div>
        <div class="landing__row2">
          PilotCity enables students to build employer projects to win internships. 97% of our
          alumni and 90% of our parents would recommend our program.
        </div>
        <div class="landing__row3">
          <v-btn dark depressed outlined small color="green"
            >A civic engine for resilience, equity and digital transformation</v-btn
          >
        </div>
      </div>
    </v-parallax>

    <!-- <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__single-column">
        <div class="landing__row1">
          <v-btn dark depressed outlined small>Program Timeline</v-btn>
        </div>
        <div class="landing__row2"></div>
        <div class="landing__row1">
          <v-btn dark depressed outlined small color="green"
            >A civic engine for resilience, equity and digital transformation</v-btn
          >
        </div>
      </div>
    </v-parallax> -->

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Activities</div>
      <div class="">
        <v-img
          src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_ProgramTimeline_v2.svg"
          class="landing__primary-image"
          width="75%"
        ></v-img>
      </div>
      <div class="landing__banner-cta">
        <v-btn x-large depressed dark rounded color="blue">Signup and Invite</v-btn>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/students.png"
      dark
      class="landing__hero-default-padded"
      height="100%"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-btn dark depressed outlined small rounded>Program Timeline</v-btn>
          <div class="landing__timeline-card">
            <v-timeline dark dense>
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Explore programs</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Build employer projects</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Auto-apply for internships</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Interviews</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Position Offers</v-timeline-item
              >
              <v-timeline-item class="landing__timeline-card-step" fill-dot color="green" small
                >Internships</v-timeline-item
              >
              <!-- <v-timeline-item small>Practice Log</v-timeline-item> -->
              <!-- <v-timeline-item small>Business Model Canvas</v-timeline-item>
            <v-timeline-item small>Your One Sentence Pitch</v-timeline-item>

            <v-timeline-item small>Write Your 60-Second Elevator Pitch</v-timeline-item>
            <v-timeline-item small>Hack Day</v-timeline-item>
            <v-timeline-item small>Post-Hack Reflection</v-timeline-item>

            <v-timeline-item small>Design & Prototype Process Log</v-timeline-item>

            <v-timeline-item small>Enter Prototype Demonstration Video</v-timeline-item>
            <v-timeline-item small>Enter Link to Presentation Deck</v-timeline-item>
            <v-timeline-item small>Demo Day</v-timeline-item>
            <v-timeline-item small>Complete The Program</v-timeline-item>
            <v-timeline-item small>Auto-Application</v-timeline-item> -->
            </v-timeline>
          </div>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="green">mdi-telegram</v-icon><br />
          <div class="landing__text-subtitle-green">Student choice of employer</div>
          <div class="landing__text-body">
            Freely explore employer programs and projects<br />
            Auto-join program, or pre-qualify<br />
            Get sponsored to participate<br />
            Build portfolio projects<br />
            Win internships
          </div>

          <v-btn rounded outlined depressed dark large>Sign-up to get sponsored</v-btn>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__primary-title">The highest potential energy</div>
      <v-img
        src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_CrossSector_v3.svg"
        class="landing__primary-image"
        width="35%"
      ></v-img>

      <div class="landing__banner-cta">
        <v-btn x-large depressed dark rounded color="green">Sponsor Students</v-btn>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/teacher-2.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="pink">mdi-telegram</v-icon><br />
          <div class="landing__text-subtitle-pink">Teacher as coach, and monitor</div>
          <div class="landing__text-body">
            Share explore programs page with students<br />
            Collect, and distribute sponsorship tickets<br />
            Accept stakeholder invitation, and monitor programs
          </div>
          <v-btn rounded outlined depressed dark large>Invite Schools, Students and Peers</v-btn>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/school.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="blue">mdi-telegram</v-icon><br />
          <div class="landing__text-subtitle-blue">School as sponsor, and stakeholder</div>
          <div class="landing__text-body">
            Sponsor student participants<br />
            Transfer tickets to teacher stakeholders<br />
            Monitor sponsorships
          </div>

          <v-btn rounded outlined depressed dark large
            >Sponsor and Invite Teachers and Students</v-btn
          >
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/parent.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="yellow">mdi-telegram</v-icon><br />
          <div class="landing__text-subtitle-yellow">Parent as sponsor, and stakeholder</div>
          <div class="landing__text-body">
            Sponsor student participants<br />
            Transfer tickets to student participants<br />
            Monitor sponsorships
          </div>

          <v-btn rounded outlined depressed dark large>Invite Your Student and School</v-btn>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/employer.png"
      dark
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="purple">mdi-telegram</v-icon>
          <div class="landing__text-subtitle-purple">Employer simple, low-commitment setup</div>
          <div class="landing__text-body">
            Setup program from template<br />
            Get your program running in 4-hours<br />
            Asynchronous interactions, or zero-management option
          </div>
          <v-btn rounded outlined depressed dark large>Onboard Now</v-btn>
        </div>
      </div>
    </v-parallax>

    <v-footer dark height="100"></v-footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Landing',
  setup() {
    return {};
  },
  data() {
    return {
      e6: 1
    };
  }
};
</script>

<style lang="scss">
.landing {
  &__hero {
    justify-content: flex-start;
    align-items: flex-start;
    display: block;
  }

  &__hero-default {
    background-color: #404142;
    // padding-top: 50px;
    // padding-bottom: 50px;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // flex-grow: 1;
    // padding: none;
    // margin: none;
    // height: fit-content;
    // width: fit-content;
  }

  &__hero-default-padded {
    background-color: #404142;
    padding-top: 50px;
    padding-bottom: 50px;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    // flex-grow: 1;
    // padding: none;
    // margin: none;
    // height: fit-content;
    // width: fit-content;
  }

  &__hero-body {
    margin-bottom: auto;
  }
  &__hero-title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 52px;
    text-align: center;

    letter-spacing: -1px;
    line-height: 65px;
  }

  &__hero-logo {
    width: 65px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    margin-bottom: 50px;
  }

  &__hero-cta {
    width: 45%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    display: flex;
  }

  &__hero-cta-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  &__hero-citizenchips {
    width: 50%;
    padding-top: 25px;
    font-family: Montserrat;
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
    // justify-content: center;
    // align-items: center;
    // display: block;
  }

  &__hero-citizenchips-group {
    // justify-content: center;
    // align-items: center;
    margin: 5px;
  }

  &__2-column {
    display: flex;
    flex-direction: row;
  }

  &__left {
    // justify-content: center;
    // align-items: center;
    // flex-grow: 1;
    padding-left: 100px;
    margin-top: auto;
    margin-bottom: auto;
  }

  &__timeline-card {
    border: 1px solid #6fbb81;
    border-radius: 25px;
    padding-right: 25px;
    margin-top: 15px;
  }

  &__timeline-card-step {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__right {
    justify-content: flex-end;
    flex-grow: 0.25;
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    padding-left: 50px;
  }

  &__text-subtitle-pink {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #eda1bf;
  }

  &__text-subtitle-purple {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #ae92b1;
  }

  &__text-subtitle-blue {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #3c9dcd;
  }

  &__text-subtitle-yellow {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #fdd35a;
  }

  &__text-subtitle-green {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #6fba7f;
  }

  &__text-body {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    line-height: 50px;
  }

  &__single-column {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    justify-content: flex-start;
    // align-items: center;
    padding: 50px;
  }

  &__row1 {
    font-family: Montserrat;
    font-weight: 800;
  }

  &__row2 {
    font-family: Montserrat;
    font-weight: 800;
    padding-top: 35px;
    font-size: 50px;
    line-height: 75px;
  }

  &__row3 {
    font-family: Montserrat;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 35px;
    margin-left: auto;
  }

  &__banner-cta {
    text-align: center;
    margin-bottom: 4%;

    margin-top: auto;
  }

  &__primary-image {
    // justify-content: center;
    // align-items: center;
    // margin-left: auto;
    // margin-right: auto;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 4%;
  }

  &__primary-title {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 42px;
    color: #ffffff;
    text-align: center;
    margin-top: 4%;
  }
}
</style>
