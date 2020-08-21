<template>
  <div class="guide-bar">
    <v-card id="program-card">
      <v-expand-x-transition>
        <div v-show="expand" class="guide-bar__container">
          <div class="guide-bar__highlight" />
          <div class="guide-bar__title font-weight-black text-h5">
            Lawrence Berkeley National Laboratory
          </div>
          <div class="guide-bar__stepper">
            <div class="guide-bar__stepper-content">
              <v-stepper vertical>
                <template v-for="n in steps">
                  <v-stepper-step
                    :key="`${n}-step`"
                    v-ripple="{ center: true }"
                    color="green"
                    :step="''"
                    :complete="activeStep > n"
                    @click="activeStep = n + 1"
                  >
                    <span class="font-weight-bold text-subtitle-1 text-uppercase"
                      >research and practice</span
                    >
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
                x-large
                @click="logThis(action.fn)"
              >
                {{ 'mdi-' + action.icon }}
              </v-icon>
              <v-icon x-large @click="logThis('opened settings')">mdi-cog</v-icon>
            </div>
          </div>
        </div>
      </v-expand-x-transition>
    </v-card>
    <div class="guide-bar__expand" @click="expand = !expand">
      <v-icon>mdi-drag-vertical-variant</v-icon>
    </div>
  </div>
</template>
<style lang="scss">
$stepper-step-step-width: 100px;
$stepper-step-step-height: 50px;
.v-application--is-ltr .guide-bar .v-stepper--vertical .v-stepper__content {
  margin: -16px -12px -24px 12px;
}
.guide-bar {
  height: 100%;
  display: flex;
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
    height: 100%;
    max-height: 100vh;
    border: 1px solid black;
    border-right: none;
  }
}
.guide-bar {
  &__highlight {
    height: 7px;
    width: 80%;
    border-radius: 0 0 5px 5px;
    background-color: green;
    margin-bottom: 47px;
  }
  &__title {
    max-width: 80%;
    display: flex;
  }
  &__stepper {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    justify-content: center;
    overflow-y: auto;
    margin-top: 30px;
    &-content {
      max-width: 80%;
      min-height: webkit-min-content;
      display: flex;
    }
  }
  &__expand {
    display: flex;
    align-content: center;
    border: 1px solid black;
  }
  &__actions {
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    padding: 24px 0 27px 0;
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
