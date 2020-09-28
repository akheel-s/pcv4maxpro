<template>
  <div>
    <v-parallax
      dark
      height="625"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/pilotcitypaperplanes_grey.png"
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
          <v-text-field dark rounded outlined label="Signup with email"></v-text-field
          ><v-btn class="landing__hero-cta-button" x-large rounded depressed dark
            >Build Communities</v-btn
          >
        </div>

        <div class="landing__hero-citizenchips text-center">
          <v-btn
            center
            rounded
            depressed
            dark
            color="green"
            class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-clover</v-icon>Students</v-btn
          >
          <v-btn
            center
            rounded
            depressed
            dark
            color="purple"
            class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-graph-outline</v-icon>Employers</v-btn
          >
          <v-btn center rounded depressed dark color="pink" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-head-heart</v-icon>Teachers</v-btn
          >
          <v-btn center rounded depressed dark color="blue" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-airballoon</v-icon>Schools</v-btn
          >
          <v-btn
            center
            rounded
            depressed
            dark
            color="yellow"
            class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-sign-direction</v-icon>Parents</v-btn
          >
          <v-btn center rounded depressed dark color="red" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-currency-usd-circle</v-icon>Sponsors</v-btn
          >

          <!-- <v-btn
            center
            dark
            color="green"
            class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-clover</v-icon>For Students</v-btn
          >
          <v-chip center dark color="purple" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-graph-outline</v-icon>For Employers</v-chip
          >
          <v-chip center dark color="pink" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-head-heart</v-icon>For Teachers</v-chip
          >
          <v-chip center dark color="blue" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-airballoon</v-icon>For Schools</v-chip
          >
          <v-chip center dark color="yellow" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-sign-direction</v-icon>For Parents</v-chip
          >
          <v-chip center dark color="red" class="landing__hero-citizenchips-group"
            ><v-icon left>mdi-currency-usd-circle</v-icon>For Sponsors</v-chip
          > -->
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
        <div>
          <v-btn class="landing__row1-button" color="white" dark depressed outlined small
            >PilotCity's Flagship Program</v-btn
          >
        </div>
        <div class="landing__row2">
          PilotCity enables students to build employer projects to win internships. 97% of our
          alumni and 90% of our parents would recommend our program.
        </div>
        <div class="landing__row3">
          <v-btn class="landing__row3-button" dark depressed outlined small color="white"
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-background4.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity kicks the idea of 'coffee fetching and document copying' internships to the
            curb
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/_DSC4843_small.jpg"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Kevin C.</div>
              <div class="landing__text-testimonial-position">Intern, Strategy of Things</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="200"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/StrategyOfThings_white.png"
          ></v-img>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Activities</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Key events and program activities</v-btn
      >
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-backgroundB.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity was a fresh breath of air. It was a new program that offered a mind-blowing
            and unique experience.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.36%20AM.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Amratha R.</div>
              <div class="landing__text-testimonial-position">
                Healthtech Entrepreneur, PilotCity
              </div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <!-- <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img> -->
        </div>
      </div>
    </v-parallax>

    <v-parallax
      dark
      class="landing__hero-default"
      height="100%"
      src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
    >
      <div class="landing__primary-title">People</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle">
        Students are the protagonist, the community is their village</v-btn
      >
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/students.png"
      dark
      class="landing__hero-default-padded"
      height="700"
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
          <v-icon dark x-large color="green">mdi-clover</v-icon><br />
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-backgroundE.png"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-green">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity is more than just a program... it's a family.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.31.38%20AM.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-green">Pranav P.</div>
              <div class="landing__text-testimonial-position">MESH Fellow, Takeoff Point</div>
            </div>
          </div>
        </div>
        <!-- <div class="landing__right landing__testimonial-logo"> -->
        <!-- <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img> -->
        <!-- </div> -->
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/teacher-2.png"
      dark
      height="650"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <v-card elevation="0" tile depressed>
            <!-- <v-img max-height="300px" max-width="300px" src="" depressed></v-img> -->
          </v-card>
        </div>
        <div class="landing__right">
          <v-icon dark x-large color="pink">mdi-head-heart</v-icon><br />
          <div class="landing__text-subtitle-pink">Teacher as coach, and monitor</div>
          <div class="landing__text-body">
            Share explore programs page with students<br />
            Collect, and distribute sponsorship tickets<br />
            Accept stakeholder invitation, and monitor programs
          </div>
          <v-btn rounded outlined depressed dark large>Invite Schools, Students and Peers</v-btn>
        </div>
      </div>

      <div class="landing__content-grid">
        <v-chip-group>
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Computer Science</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large>Engineering</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo" large>Digital Media</v-chip>
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Public Service</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Transportation</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Business & Finance</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Education & Family</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large
            >Energy & Sustainability</v-chip
          >
          <v-chip dark color="pink" class="landing__content-grid-combo" large>Healthcare</v-chip>
        </v-chip-group>
      </div>
    </v-parallax>

    <!-- <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Subject Areas</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Classes that find our program amplifying</v-btn
      >
      <div class="landing__content-grid">
        <v-chip-group>
          <v-chip dark class="landing__content-grid-combo" large>Computer Science</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Engineering</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Digital Media</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Public Service</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Transportation</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Business & Finance</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Education & Family</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Energy & Sustainability</v-chip>
          <v-chip dark class="landing__content-grid-combo" large>Healthcare</v-chip>
        </v-chip-group>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Computer Science
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Engineering
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Digital Media
        </div>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Public Service
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Transportation
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Business & Finance
        </div>
      </div>

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Education & Family
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Energy & Sustainability
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Healthcare
        </div>
      </div>
    </v-parallax> -->

    <!-- <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity kicks the idea of 'coffee fetching and document copying' internships to the
            curb
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/_DSC4843_small.jpg"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name">Kevin C.</div>
              <div class="landing__text-testimonial-position">Intern, Strategy of Things</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="200"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/StrategyOfThings_white.png"
          ></v-img>
        </div>
      </div>
    </v-parallax> -->

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
          <v-icon dark x-large color="blue">mdi-airballoon</v-icon><br />
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_blue-1.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Outcomes</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >What our program delivers to our student participants</v-btn
      >

      <div class="landing__content-grid">
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Project-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Work-based Learning
        </div>
        <div class="landing__content-grid-combo">
          <v-icon dark x-large>mdi-telegram</v-icon>Service-based Learning
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
          <v-icon dark x-large color="purple">mdi-graph-outline</v-icon>
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

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_purple-1.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Deliverables</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Prototypes, pilots and products for employer goals</v-btn
      >
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/sponsor.png"
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
          <v-icon dark x-large color="red">mdi-currency-usd-circle</v-icon>
          <div class="landing__text-subtitle-red">
            Sponsor participants, and monitor your impact
          </div>
          <div class="landing__text-body">
            Sign-up for an account<br />
            Sponsor and purchase program tokens<br />
            Transfer to participants and stakeholders for use
          </div>
          <v-btn rounded outlined depressed dark large>Sponsor and fund participants</v-btn>
        </div>
      </div>
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_red-1.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__primary-title">Impact</div>

      <v-btn outlined color="white" rounded class="landing__primary-subtitle"
        >Sponsor participants to advance outcome goals</v-btn
      >
    </v-parallax>

    <v-parallax
      src="https://f.hubspotusercontent00.net/hubfs/2480959/parent_v2.png"
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
          <v-icon dark x-large color="yellow">mdi-sign-direction</v-icon><br />
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
      src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_yellow.svg"
      dark
      height="100%"
      class="landing__hero-default"
    >
      <div class="landing__2-column">
        <div class="landing__left">
          <div class="landing__text-testimonial-black">
            <v-icon left dark>mdi-comment-quote</v-icon>
            PilotCity is 'too good to be true' for people of all ages who would like to rediscover
            themselves.
          </div>
          <div class="landing__text-testimonial-body">
            <div>
              <v-avatar size="75">
                <v-img
                  src="https://f.hubspotusercontent00.net/hubfs/2480959/flipped2019_panel.png"
                ></v-img>
              </v-avatar>
            </div>
            <div class="landing__text-testimonial-title">
              <div class="landing__text-testimonial-name-black">Nina S.</div>
              <div class="landing__text-testimonial-position">PilotCity Parent & Guardian</div>
            </div>
          </div>
        </div>
        <div class="landing__right landing__testimonial-logo">
          <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img>
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
    padding-top: 75px;
    display: flex;
  }

  &__hero-cta-button {
    margin-left: 10px;
    margin-right: 10px;
    font-family: Montserrat;
    font-weight: 700;
  }

  &__hero-citizenchips {
    width: 75%;
    padding-top: 50px;
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
    font-weight: 800;
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

  &__testimonial-logo {
    margin-top: auto;
    margin-bottom: auto;
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

  &__text-subtitle-red {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 42px;
    color: #ea6764;
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

  &__text-testimonial {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-green {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #6fba7f;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-yellow {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #fec34b;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-black {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #404142;
    max-width: 75%;
    margin-top: 100px;
    margin-bottom: 35px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }

  &__text-testimonial-body {
    flex-direction: row;
    display: flex;
    margin-bottom: 100px;
  }

  &__text-testimonial-title {
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding-left: 25px;
  }

  &__text-testimonial-name {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }

  &__text-testimonial-name-green {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #6fba7f;
  }

  &__text-testimonial-name-yellow {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #fec34b;
  }

  &__text-testimonial-name-black {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
    color: #404142;
  }

  &__text-testimonial-position {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 15px;
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
  }

  &__row1-button {
    font-family: Montserrat;
    font-weight: 800;
  }

  &__row2 {
    font-family: Montserrat;
    font-weight: 700;
    padding-top: 35px;
    font-size: 50px;
    line-height: 75px;
    color: #fec34b;
  }

  &__row3 {
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 35px;
    margin-left: auto;
  }

  &__row3-button {
    font-family: Montserrat;

    font-weight: 800;
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

  &__primary-subtitle {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 1%;
    width: 50%;
    margin: auto;
    // justify-content: center;
    // align-items: center;
    // font-style:italic;
  }

  &__content-grid {
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 50px;
    max-width: 100%;
  }

  &__content-grid-combo {
    font-family: Montserrat;
    font-weight: 800;
    font-size: 22px;
  }
}
</style>
