<template>
  <div class="guide-bar">
    <v-card class="program-card">
      <v-expand-x-transition>
        <div v-show="expand" class="guide-bar__container">
          <div class="guide-bar__highlight" />
          <div class="guide-bar__title">Lawrence Berkeley National Laboratory</div>
          <div class="guide-bar__stepper">
            <div class="guide-bar__stepper-content">
              <v-stepper vertical>
                <template v-for="n in steps">
                  <v-stepper-step
                    :key="`${n}-step`"
                    color="green"
                    :step="''"
                    :complete="activeStep > n"
                    @click="activeStep = n + 1"
                  >
                    <span class="guide-bar__timeline-item">Research and Practice</span>
                  </v-stepper-step>
                  <v-stepper-content :key="`${n}-content`" :step="n" />
                </template>
              </v-stepper>
            </div>
          </div>
          <div class="guide-bar__actions">
            <div class="guide-bar__actions-list">
              <v-icon
                v-for="action in actions"
                :key="action.icon"
                color="black"
                @click="logThis(action.fn)"
              >
                {{ 'mdi-' + action.icon }}
              </v-icon>
              <!-- <v-icon @click="logThis('opened settings')">mdi-cog</v-icon> -->
            </div>
          </div>
        </div>
      </v-expand-x-transition>
    </v-card>
    <div class="guide-bar__expand" @click="expand = !expand">
      <v-icon class="guide-bar__expand-icon">mdi-drag-vertical</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from '@vue/composition-api';

export default {
  name: 'Bar',
  setup() {
    function logThis(val: string) {
      console.log(val);
    }
    const vertical = ref(true);
    const expand = ref(true); // open or closed sidebar
    const steps = ref(15); // number of lines
    const activeStep = ref(1); // open line
    const actions = ref([
      {
        icon: 'account-group',
        fn: 'my-portfolio'
      },
      {
        icon: 'message-outline',
        fn: 'my-chat'
      },
      {
        icon: 'square-edit-outline',
        fn: 'my-post'
      },
      {
        icon: 'cog',
        fn: 'my-settings'
      }
    ]);
    const sequence = ref({
      Project: {
        icon: '',
        color: 'green',
        submodule: [
          {
            title: 'Launch Day'
          },
          {
            title: 'Cowork'
          },
          {
            title: 'Research & Practice'
          },
          {
            title: 'Ideate'
          },
          {
            title: 'Hack Day'
          },
          {
            title: 'Reflection'
          },
          {
            title: 'Design & Prototype'
          },
          {
            title: 'Package'
          },
          {
            title: 'Demo Day'
          },
          {
            title: 'Finish Lane'
          }
        ]
      },
      Internship: {
        icon: '',
        color: 'purple',
        submodule: [
          {
            title: 'Auto-App'
          },
          {
            title: 'Interviews'
          },
          {
            title: 'Offers'
          }
        ]
      }
    });
    return { steps, expand, activeStep, sequence, actions, logThis, vertical };
  }
};
</script>

<style lang="scss">
$stepper-step-step-width: 100px;
$stepper-step-step-height: 50px;

.program-card {
  // height: 100%;
  height: 100vh;
}
.v-application--is-ltr .guide-bar .v-stepper--vertical .v-stepper__content {
  margin: -16px -12px -24px 12px;
}
.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
  .v-stepper__step__step {
  // width: 16px;
  // height: 16px;
  // width: 16px;
  // border-radius: 50%;
  // display: inline-block;
  // height: 50%;
  // weight: 50%;
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  font-size: 0.75rem;
  justify-content: center;
  height: 16px;
  min-width: 16px;
  width: 16px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.v-application--is-ltr .v-stepper--vertical .v-stepper__step__step {
  // margin-right: 12px;
}

.theme--light.v-stepper
  .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
  .v-stepper__step__step {
  // background: rgba(0, 0, 0, 0.38);
  background: #ffffff !important;
  border: 1px solid #dedede;
  margin-left: 5px;
}

.v-application .green {
  // background-color: #4caf50 !important;
  background-color: #6eba7f !important;
  // background-color: #ffffff !important;
  // border-color: #4caf50 !important;
  border: 1px solid #dedede !important;
  height: 16px;
  min-width: 16px;
  width: 16px;
  margin-left: 5px;
}

.mdi-check::before {
  font-size: 10px;
  font-weight: 900;
}

// .v-stepper__step__step {
//   align-items: center;
//   border-radius: 50%;
//   display: inline-flex;
//   font-size: 0.75rem;
//   justify-content: center;
//   height: 16px;
//   min-width: 16px;
//   width: 16px;
//   transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
// }
.guide-bar {
  height: 100vh;
  display: flex;

  &__stepper-content {
  }

  &__timeline-item {
    text-transform: uppercase;
    font-size: 9px;
    color: #939598;
    letter-spacing: 1.5px;
    font-weight: 900;
  }
  .v-card.v-sheet {
    display: block;
    -webkit-transition: display 0.35s ease-out;
    transition: display 0.5s ease-in-out;
    height: 100%;
    border-radius: 0;
    box-shadow: none !important;
  }
  .v-stepper {
    box-shadow: none;
    overflow: visible;
    overflow-x: hidden;
    // width: 80%;

    .v-stepper__step:first-child {
      padding: 0 0 16px 0;
    }
    .v-stepper__step {
      padding: 24px 0 16px 0;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    max-height: 100vh;
    // border: 1px solid black;
    // border-right: none;
  }
}
.guide-bar {
  &__container {
    height: 100vh;
  }
  &__highlight {
    height: 7px;
    width: 80%;
    border-radius: 0 0 5px 5px;
    background-color: #404142;
    // margin-bottom: 47px;
  }
  &__title {
    max-width: 80%;
    display: flex;
    font-family: Raleway;
    font-weight: 800;
    margin-top: 25px;
    font-size: 18px;
    text-align: center;
  }
  &__stepper {
    // display: flex;
    flex: 1 1 auto;
    width: 100%;
    // align-items: center;
    // align-content: center;
    // text-align: center;
    padding-left: 12%;
    // padding-left: auto;
    // padding-right: auto;
    justify-content: center;
    overflow-y: auto;
    margin-top: 30px;
    &-content {
      width: 80%;
      min-height: webkit-min-content;
      display: flex;
    }
  }
  &__expand {
    // display: flex;
    margin-top: auto;
    // margin-bottom: auto;
    height: 100vh;
    // flex-direction: column;
    // display: flex;
    justify-content: end;
    align-items: end;
    align-content: end;
    // padding-top: auto;
    // padding-bottom: auto;
    // align-content: center;
    // justify-content: center;
    // border-left: 1px solid black;
    // position: absolute;
  }

  &__expand-icon {
    margin-top: 10px;
    cursor: pointer;
  }
  &__actions {
    width: 90%;
    display: flex;
    justify-content: center;
    border: 1px solid #dedede;
    margin: 10px;
    border-radius: 10px;
    // background-color: #dedede;
    padding: 15px 0 15px 0;
    &-list {
      width: 100%;
      max-width: 80%;
      display: flex;
      justify-content: space-around;
      min-width: 200px;
    }
  }
}
</style>
