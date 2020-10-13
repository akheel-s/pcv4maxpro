<template>
  <div class="invite__container">
    <div v-if="pass !== invitePages[getInvitee].password" class="invite__wrapper-password">
      <div class="invite__password-title">
        <v-btn
          :color="
            invitePages[getInvitee].user == 'school'
              ? 'blue'
              : invitePages[getInvitee].user == 'employer'
              ? 'purple'
              : invitePages[getInvitee].user == 'parent'
              ? 'yellow'
              : invitePages[getInvitee].user == 'teacher'
              ? 'pink'
              : invitePages[getInvitee].user == 'student'
              ? 'green'
              : invitePages[getInvitee].user == 'sponsor'
              ? 'red'
              : ''
          "
          class="invite__password-title-button"
          x-small
          outlined
          depressed
          >Invite for {{ getInvitee }}</v-btn
        >
      </div>

      <validation-observer v-slot="{ invalid, handleSubmit }" class="invite__password">
        <validation-provider
          v-slot="{ errors }"
          slim
          :rules="`password:${invitePages[getInvitee].password}`"
        >
          <v-text-field
            v-model="inputPassword"
            :error-messages="errors"
            :type="show1 ? 'text' : 'password'"
            depressed
            label="Password"
            outlined
            required
            @keyup.enter="
              handleSubmit(() => {
                pass = inputPassword;
              })
            "
          />
        </validation-provider>
        <v-btn
          class="invite__password-button text-uppercase"
          outlined
          :disabled="invalid || pass == ''"
          hide-details
          depressed
          @click="
            handleSubmit(() => {
              pass = inputPassword;
            })
          "
          >View Invite</v-btn
        >
      </validation-observer>
    </div>
    <!--
    <div
      :class="[{invitePages[getInvitee].type == 'school' ? teacherbutton-css : '' }, {invitePages[getInvitee].type == 'employer' ? employerbutton-css : '' }]"
    ></div> -->

    <!-- START OF PRIMARY PAGE   -->

    <div
      v-else
      :class="[
        invitePages[getInvitee].user == 'school' ? schoolContainer : '',
        invitePages[getInvitee].user == 'employer' ? employerContainer : '',
        invitePages[getInvitee].user == 'teacher' ? teacherContainer : '',
        invitePages[getInvitee].user == 'parent' ? parentContainer : '',
        invitePages[getInvitee].user == 'student' ? studentContainer : '',
        invitePages[getInvitee].user == 'sponsor' ? sponsorContainer : ''
      ]"
    >
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
            color="purple"
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
          <span class="invite__title text-center">
            <v-icon
              v-if="invitePages[getInvitee].user == 'school'"
              :color="
                invitePages[getInvitee].user == 'school'
                  ? 'blue'
                  : invitePages[getInvitee].user == 'employer'
                  ? 'purple'
                  : invitePages[getInvitee].user == 'parent'
                  ? 'yellow'
                  : invitePages[getInvitee].user == 'teacher'
                  ? 'pink'
                  : invitePages[getInvitee].user == 'student'
                  ? 'green'
                  : invitePages[getInvitee].user == 'sponsor'
                  ? 'red'
                  : ''
              "
              class="invite__title-icon"
              x-large
              >mdi-telegram</v-icon
            >

            Invite for
            <span
              :class="[
                invitePages[getInvitee].user == 'school' ? schoolTitleEntity : '',
                invitePages[getInvitee].user == 'employer' ? employerTitleEntity : '',
                invitePages[getInvitee].user == 'teacher' ? teacherTitleEntity : '',
                invitePages[getInvitee].user == 'parent' ? parentTitleEntity : '',
                invitePages[getInvitee].user == 'student' ? studentTitleEntity : '',
                invitePages[getInvitee].user == 'sponsor' ? sponsorTitleEntity : ''
              ]"
              >{{ getInvitee }}</span
            ></span
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
        <div>
          <a
            href="https://app.hubspot.com/meetings/dericklee/programinvite"
            target="_blank"
            style="text-decoration: none"
            ><v-btn class="invite__cta2" x-large outlined depressed
              >Schedule 30-Minute Meeting</v-btn
            >
          </a>
        </div>

        <div class="invite__accept-decline">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="https://www.pilotcity.com/signup"
                target="_blank"
                style="text-decoration: none"
                class="invite__cta-accept-decline-link"
              >
                <v-btn
                  v-bind="attrs"
                  class="invite__cta-accept-decline"
                  color="green"
                  large
                  dark
                  depressed
                  v-on="on"
                  >Sign-up</v-btn
                ></a
              >
            </template>
            <span>Sign-up for account</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <a
                href="https://share.hsforms.com/1FhBLzFLZSPSHPUk3TEvv0w1h6bj"
                target="_blank"
                style="text-decoration: none"
                class="invite__cta-accept-decline-link"
                ><v-btn
                  v-bind="attrs"
                  class="invite__cta-accept-decline"
                  color="red"
                  large
                  dark
                  depressed
                  v-on="on"
                  >Decline</v-btn
                ></a
              >
            </template>
            <span>Decline to participate</span>
          </v-tooltip>
        </div>

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
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none">
              <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >Learn more on Homepage</v-btn
              ></a
            >
          </div>

          <!-- ACTIVITIES AND TIMELINE -->
          <template>
            <div class="text-center">
              <v-dialog v-model="activitiesDialog" width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="invite__cta"
                    color="grey darken-3"
                    small
                    rounded
                    dark
                    depressed
                    v-on="on"
                    >Timeline & Activities</v-btn
                  >
                </template>

                <v-card>
                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/Final_19500_Background.svg"
                    dark
                    height="50%"
                    class="invite__hero-default"
                  >
                    <div class="landing__primary-title">Activities</div>

                    <v-btn outlined small color="white" rounded class="landing__primary-subtitle"
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
                      <v-btn icon dark @click="activitiesDialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>

                      <!-- <v-btn
                        x-large
                        depressed
                        dark
                        rounded
                        color="blue"
                        @click="$router.push({ name: 'signup', query: { email: starterEmail } })"
                        >Signup and Invite</v-btn
                      > -->
                    </div>
                  </v-parallax>
                  <!-- <v-card-title class="headline grey lighten-2"> Privacy Policy </v-card-title>

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
                  </v-card-actions> -->
                </v-card>
              </v-dialog>
            </div>
          </template>

          <template>
            <div class="text-center">
              <v-dialog v-model="testimonialsDialog" width="90%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    class="invite__cta"
                    color="grey darken-3"
                    small
                    rounded
                    dark
                    depressed
                    v-on="on"
                    >Student & Parent Testimonials</v-btn
                  >
                </template>

                <v-card>
                  <!-- <div class="invite__close-dialog">
                    <v-btn icon @click="testimonialsDialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </div> -->
                  <!-- <v-card>
                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-background4.png"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="landing__text-testimonial-green">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity kicks the idea of 'coffee fetching and document copying'
                          internships to the curb
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
                            <div class="landing__text-testimonial-position">
                              Intern, Strategy of Things
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/testimonial-backgroundB.png"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="landing__text-testimonial-green">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity was a fresh breath of air. It was a new program that offered a
                          mind-blowing and unique experience.
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
                      <div class="landing__right landing__testimonial-logo"> -->
                  <!-- <v-img
            max-width="75"
            src="https://f.hubspotusercontent00.net/hubfs/2480959/WI_P_Wireframe-1.png"
          ></v-img> -->
                  <!-- </div>
                    </div>
                  </v-parallax> -->

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_green_darkgreenstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity was a fresh breath of air. It was a new program that was
                          offering a mind-blowing and unique experience.
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
                            <div class="landing__text-testimonial-name-black">Amratha R.</div>
                            <div class="landing__text-testimonial-position">
                              Healthtech Entrepreneur, PilotCity
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink-1.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          My child has grown right before my eyes. She has matured into a young
                          woman who can achieve what she sets her mind to thanks to this program.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.11%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Vanesa C.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_blue-3.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Most employers wouldn’t want high schoolers to work for them since there’s
                          a stigma that we aren’t prepared and under-qualified. PilotCity pushes
                          that stigma away and recognizes the capability of high schoolers to do
                          something that isn’t normally seen among us.
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
                            <div class="landing__text-testimonial-name-black">Rosa S.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, San Leandro Library
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_purple-2.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          PilotCity is an excellent program for high school kids as it gives them
                          invaluable experience in entrepreneurship, confidence, and team building
                          as it pushes kids to the limits. It teaches them real-life experiences. A
                          program must for all high school kids.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/3_SeeProjectExamples-1-1.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Shuchita G.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_red-2.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Being with PilotCity has allowed me to transform and grow in so many ways.
                          Thanks to this experience, I'm going to be working with my employer to
                          implement my service past this internship. The PilotCity team is full of
                          supportive, hard-working people, and I'm lucky to have been able to join
                          this experience this summer. Thank you PilotCity!
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.09.15%20AM-1.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Allyson L.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, City of East Palo Alto
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_yellow_darkyellowstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          Through PilotCity, my incoming 10th-grade daughter got internships with
                          two different companies during the Summer of 2020. PilotCity encouraged
                          her to accept both the offers, which helped her realize her own capacity
                          and learn how to manage her time well. That exposure helped her improve
                          her technical, presentation, and collaboration skills, as well as boosted
                          her confidence.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.32.52%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Nina S.</div>
                            <div class="landing__text-testimonial-position">Rashmi K.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_orange_darkorangestripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          The second time around with PilotCity was amazing. Even though I didn't
                          have a main project this year, I got to work under someone and learn about
                          the workforce. I got to improve my skill level. And I really enjoyed
                          learning something different every week.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.31.51%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Kyara G.</div>
                            <div class="landing__text-testimonial-position">
                              Intern, Shannon Leigh
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_green_darkgreenstripes.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          What a great experience. My daughter, a rising Sophomore, signed up for a
                          weekend hackathon program. A weekend turned out to be the entire summer.
                          She loved the experience so much that she made a proposal to her employer
                          to continue through the school year. Besides the obvious benefits of this
                          work experience for her college resume, she built up her self confidence
                          and leadership skills.
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.33.56%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Jeff L.</div>
                            <div class="landing__text-testimonial-position">
                              PilotCity Parent & Guardian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <v-parallax
                    src="https://f.hubspotusercontent00.net/hubfs/2480959/19500_pink-1.svg"
                    dark
                    height="100%"
                    class="invite__hero-default"
                  >
                    <div class="landing__2-column">
                      <div class="landing__left">
                        <div class="invite__text-testimonial-white">
                          <v-icon left dark>mdi-comment-quote</v-icon>
                          "PilotCity is more than just a program... it's a family"
                        </div>
                        <div class="landing__text-testimonial-body">
                          <div>
                            <v-avatar size="75">
                              <v-img
                                src="https://f.hubspotusercontent00.net/hubfs/2480959/Screen%20Shot%202020-08-31%20at%2012.34.07%20AM.png"
                              ></v-img>
                            </v-avatar>
                          </div>
                          <div class="landing__text-testimonial-title">
                            <div class="landing__text-testimonial-name-black">Pranav P.</div>
                            <div class="landing__text-testimonial-position">
                              MESH Fellow, Takeoff Point
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-parallax>

                  <!-- <v-card-title class="headline grey lighten-2"> Privacy Policy </v-card-title>

                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
                  </v-card-actions> -->
                </v-card>
              </v-dialog>
            </div>
          </template>

          <!-- <div>
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none">
              <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >Testimonials</v-btn
              ></a
            >
          </div> -->

          <!-- <div>
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none">
              <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >Survey Data</v-btn
              ></a
            >
          </div> -->

          <!-- <div>
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none">
              <v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >Program Videos</v-btn
              ></a
            >
          </div> -->

          <!-- <div>
            <v-btn class="invite__cta" color="blue" small rounded dark depressed
              >Employer Examples</v-btn
            >
          </div> -->

          <!-- <div>
            <a href="https://www.pilotcity.com" target="_blank" style="text-decoration: none"
              ><v-btn class="invite__cta" color="grey darken-3" small rounded dark depressed
                >FAQ</v-btn
              ></a
            >
          </div> -->

          <!-- VIDEOASK BUTTON -->
          <!-- <div class="invite__resources-title3">NEED HELP?</div>
          <div>
            <a
              href="https://www.videoask.com/fntxxoz2y"
              target="_blank"
              style="text-decoration: none"
            >
              <v-btn
                class="invite__cta-ask-question"
                color="grey darken-3"
                small
                rounded
                outlined
                depressed
                >Ask Video Question</v-btn
              ></a
            >
          </div> -->
        </div>

        <div class="invite__questions-tip">
          <v-icon small color="grey darken-3">mdi-comment-question-outline</v-icon> GOT QUESTIONS?
          WE GOT ANSWERS<v-icon small color="grey darken-3">mdi-arrow-bottom-right-thick</v-icon>
        </div>

        <!-- <div class="invite__resources">hi</div> -->
      </div>

      <!-- <div><v-btn>Students</v-btn> <v-btn>Teachers</v-btn></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from '@vue/composition-api';

export default {
  name: 'Invite',
  props: {
    schoolName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activitiesDialog: false,
      testimonialssDialog: false,
      schoolContainer: 'invite__wrapper-school',
      employerContainer: 'invite__wrapper-employer',
      teacherContainer: 'invite__wrapper-teacher',
      parentContainer: 'invite__wrapper-parent',
      studentContainer: 'invite__wrapper-student',
      sponsorContainer: 'invite__wrapper-sponsor',
      schoolTitleEntity: 'invite__title-entity-school',
      employerTitleEntity: 'invite__title-entity-employer',
      teacherTitleEntity: 'invite__title-entity-teacher',
      parentTitleEntity: 'invite__title-entity-parent',
      studentTitleEntity: 'invite__title-entity-student',
      sponsorTitleEntity: 'invite__title-entity-sponsor'
    };
  },

  setup(props, { root: { $router } }) {
    // video ask setup

    const invitePages = {
      // SCHOOLS

      'Antioch High School': {
        user: 'school',
        password: 'antiochhighschool',
        video: '_ic0VQUY4pA'
      },

      // EMPLOYERS

      'Alameda County': {
        user: 'employer',
        password: 'alamedacounty',
        video: '4LJOPWtwf3c'
      },

      'AP Racing': {
        user: 'employer',
        password: 'apracing',
        video: '18YDhUToetw'
      },

      // TESTS

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
      'Office Of Supervisor Nate Miley': {
        user: 'employer',
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

      'Verizon 5G Labs': {
        user: 'sponsor',
        password: '321',
        video: 'L_jWHffIx5E'
      }
    };
    const pass = ref('');
    const inputPassword = ref('');
    const getInvitee = computed(() =>
      (props.schoolName as string)
        .split('-')
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(' ')
    );
    watch(pass, newpass => {
      if (newpass === invitePages[getInvitee.value].password) {
        console.log('mounting');
        (window as any).videoask.loadEmbed({
          kind: 'widget',
          url: 'https://www.videoask.com/fntxxoz2y',
          options: {
            widgetType: 'VideoThumbnailLarge',
            text: 'Talk to me',
            backgroundColor: '#dedede',
            position: 'bottom-right'
          }
        });
      }
    });
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
      getInvitee,
      show1: ref(false)
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
    // margin-top: 50px;
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

  // COLOR V-BIND

  &__wrapper-school {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #3c9dcd;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-employer {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #ae90b0;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-teacher {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #eda1bf;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-parent {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #fec34b;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-student {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #6eba80;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  &__wrapper-sponsor {
    // width: 100%;
    // max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 15px solid #ea6764;
    border-radius: 50px;
    padding: 45px;
    // background-color: #dddddd;
  }

  // COLOR V-BIND

  &__title-entity-school {
    color: #3c9dcd;
  }

  &__title-entity-employer {
    color: #ae90b0;
  }

  &__title-entity-teacher {
    color: #eda1bf;
  }

  &__title-entity-parent {
    color: #fec34b;
  }

  &__title-entity-student {
    color: #6eba80;
  }

  &__title-entity-sponsor {
    color: #ea6764;
  }

  // COLOR V-BIND

  &__title-icon {
    margin-right: 12px;
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
    justify-content: flex-start;

    // justify-content: flex-start;
    // align-items: flex-start;
  }
  &__video {
    // width: 720px;
    // height: 405px;
    width: 619.5px;
    height: 350px;
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
    // margin-top: 10%;
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

  &__questions-tip {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #404142;
    text-align: center;
    // margin-bottom: 5%;
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
    margin-top: 8%;
    // margin-bottom: 25px;
    // margin-bottom: auto;
    margin-bottom: 8%;
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
    width: 98%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
  }

  &__cta-accept-decline-link {
    width: 100%;
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
  // TESTIMONIALS CSS

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

  &__text-testimonial-white {
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

  &__close-dialog {
    text-align: right;
    background-color: transparent;
    position: fixed;
    // position: absolute;
  }

  &__hero-default {
    background-color: #404142;
    // object-fit: cover;
    // height: 100%;
    // height: 100%;
  }
}
@media screen and (max-width: 1280px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
      // padding-right: 50px;
    }

    &__container {
      // max-width: 100%;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 540px;
    }
  }
}

@media screen and (min-width: 425px) and (max-width: 767px) {
  .invite {
    &__wrapper-school {
      display: block;
      padding: 20px;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 275px;
    }
  }
}

@media screen and (max-width: 375px) {
  .invite {
    &__container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      // margin-top: 50px;
      align-items: center;
      // background-color: #404142;
    }
    &__wrapper-school {
      max-width: none;
      align-items: center;
      border: none;
      border-radius: none;
    }
    &__wrapper-column-right {
      margin-left: 0px;
    }
    &__video {
      // width: 275px;
    }
  }
}
</style>
