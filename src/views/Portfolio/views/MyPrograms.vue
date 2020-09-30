<template>
  <div>
    <div class="my-program">
      <div class="my-programs pc-container">
        <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">My Programs</h4>
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="my-programs__card1 text-h5 font-weight-black"
              :elevation="hover ? 12 : 2"
              outlined
            >
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="gray" v-bind="attrs" v-on="on">
                    <v-icon x-large>mdi-plus</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2"> Coming Soon </v-card-title>

                  <v-divider></v-divider>

                  <v-card-text>
                    The Programs section of the platform is at the end of development and will be
                    released soon.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-hover>
        </div>
        <div v-if="role !== 'none'" class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">{{ role }}</h4>
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="my-programs__card1 text-h5 font-weight-black"
              :elevation="hover ? 12 : 2"
              outlined
            >
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="gray" v-bind="attrs" v-on="on">
                    <v-icon x-large>mdi-plus</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2"> Coming Soon </v-card-title>

                  <v-divider></v-divider>

                  <v-card-text>
                    The Programs section of the platform is at the end of development and will be
                    released soon.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-hover>
        </div>
        <!-- <div class="my-programs__wrapper">
          <h4 class="my-programs__programs-title">Completed</h4>
          <div class="my-programs__wrapper-col">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="my-programs__card1 text-h5 font-weight-black"
                :elevation="hover ? 12 : 2"
                outlined
              >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="gray" v-bind="attrs" v-on="on">
                      <v-icon x-large>mdi-plus</v-icon>
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline grey lighten-2"> Coming Soon </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                      The Programs section of the platform is at the end of development and will be
                      released soon.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </v-hover>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.my-programs {
  & {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 93.5%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &__programs-title {
    width: 100%;
    font-size: 25px;
    line-height: 35px;
    margin-bottom: 33px;
    font-family: Raleway;
    font-weight: 800;
  }
  &__wrapper {
    width: 100%;
    max-width: 80%;
    margin-top: 50px;
  }
  &__wrapper-col {
    display: -ms-grid;
    display: grid;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    justify-items: start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-areas: 'Area Area-2' 'Area-3 Area-4';
    -ms-grid-columns: 1fr 0vw 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto 16px auto;
    grid-template-rows: auto auto;
  }
  &__card1 {
    width: 100%;
    height: 200px;
    background-color: white;
    text-align: center;
    color: gray;
    padding-top: 10%;
    border: 2px dashed #dbdbdb;
  }
}
.my-program {
  display: block;
}
@media screen and (min-width: 1920px) {
  .my-programs__wrapper-col {
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 991px) {
  .my-programs__tab {
    margin-right: 0px;
    margin-left: 0px;
  }
  .my-programs__wrapper-col {
    grid-template-areas: 'Area' 'Area-3';
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 767px) {
  .my-programs__container {
    margin-top: 213px;
  }
}
</style>
<script lang="ts">
import { computed, ref } from '@vue/composition-api';
import { useDbState } from '@/store';
// import ProgramCard from '../components/PCProgramCard.vue';

export default {
  components: {
    // 'program-card': ProgramCard
  },
  setup() {
    const dialog = ref(false);
    const { user } = useDbState(['user']);
    const role = computed(() => {
      const types = user.value?.userTypes;
      if (types?.includes('School') || types?.includes('Parent') || types?.includes('Teacher'))
        return 'Monitor';
      if (types?.includes('Employer')) return 'Manage';
      return 'none';
    });
    return {
      role,
      dialog
    };
  }
};
</script>
