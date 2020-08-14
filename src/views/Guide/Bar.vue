<template>
  <div class="guide-bar">
    <v-expand-x-transition>
      <v-card v-show="expand">
        <div class="guide-bar__container">
          <v-stepper vertical class="guide-bar__stepper">
            <template v-for="n in steps">
              <v-stepper-step
                :key="`${n}-step`"
                v-ripple="{ center: true }"
                color="green"
                :step="''"
                :complete="activeStep > n"
                @click="activeStep = n"
              >
                <span class="font-weight-black text-subtitle-1 text-uppercase">Step {{ n }}</span>
              </v-stepper-step>
              <v-stepper-content :key="`${n}-content`" :step="n" />
            </template>
          </v-stepper>
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

        <div style="height: 100%;"></div>
      </v-card>
      <div v-show="!expand" class="guide-bar__expand">
        <v-icon>mdi-drag-vertical-variant</v-icon>
      </div>
    </v-expand-x-transition>
    <v-btn color="secondary" @click="expand = !expand"> Expand is {{ expand }} </v-btn>
  </div>
</template>
<style lang="scss">
$stepper-step-step-width: 100px;
$stepper-step-step-height: 50px;
.guide-bar {
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  .v-card {
    height: 100%;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    border: 1px solid black;
  }
  &__stepper {
    height: 100%;
    max-height: 100vh;
  }
  &__expand {
    display: flex;
    height: 100%;
    align-content: center;
  }
  &__actions {
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    &-list {
      display: flex;
      justify-content: space-between;
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
    const expand = ref(true); // open or closed sidebar
    const steps = ref(10); // number of lines
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
    return { steps, expand, activeStep, sequence, actions, logThis };
  }
};
</script>
