<template>
  <!--  TODO: make the inputs into actual components -->
  <Loading ref="loader" v-slot="{ loading }" :callback="processQuery">
    <div>
      <v-skeleton-loader
        :loading="loading || !user"
        type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
      >
        <div class="profile__mode-container pc-container">
          <!-- <v-btn class="profile__mode" depressed outlined color="grey" small>View</v-btn> -->
          <v-btn class="profile__mode" depressed outlined color="grey" small>Public</v-btn>
          <v-btn
            class="profile__mode"
            depressed
            color="grey"
            dark
            small
            @click="currentTab = 'my-programs'"
            >Manage</v-btn
          >
          <div class="profile__spacer"></div>
          <v-btn
            class="profile__mode font-weight-bold"
            text
            color="grey"
            small
            @click="currentTab = 'balance'"
            >{{ tickets }} Tickets</v-btn
          >
          <v-btn
            class="profile__mode white--text font-weight-bold"
            depressed
            color="purple"
            small
            @click="currentTab = 'payment'"
            ><v-icon left>mdi-shield-star</v-icon>Sponsor</v-btn
          >
          <v-btn
            class="profile__mode white--text font-weight-bold"
            depressed
            color="green"
            small
            @click="currentTab = 'referral'"
            ><v-icon left>mdi-telegram</v-icon>Invite</v-btn
          >
        </div>
        <div class="profile__container pc-container">
          <!-- <div class="profile__namepate"> -->
          <!-- <div class="profile__image"></div> -->
          <!-- </div> -->

          <!-- Chip Tabs -->

          <div v-if="user" class="profile__sub-container text-center mt-12">
            <div>
              <v-badge bordered color="orange" offset-x="32" offset-y="32">
                <v-avatar color="orange" size="150">
                  <v-img
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/91356050_3160034130674652_4990180745826795520_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=wHg8nkrEmDAAX_l8bBN&_nc_ht=scontent-sjc3-1.xx&oh=2280183a7bf702fd605883a9dacd3984&oe=5F75E2E0"
                  ></v-img>
                </v-avatar>
              </v-badge>

              <span class="profile__name">{{ user.firstName }} {{ user.lastName }}</span>
            </div>

            <v-chip
              class="pl-8 pr-8 ma-2"
              color="black"
              outlined
              @click="currentTab = 'my programs'"
            >
              <v-icon left>mdi-server-plus</v-icon>
              Programs
            </v-chip>

            <v-chip class="pl-8 pr-8 ma-2" color="black" outlined @click="currentTab = 'settings'">
              <v-icon left>mdi-wrench</v-icon>
              Settings
            </v-chip>

            <v-chip
              v-for="id in user.userTypes"
              :key="id"
              class="pl-8 pr-8 ma-2"
              dark
              :color="IDs[id]"
            >
              <v-icon left>mdi-account-outline</v-icon>
              {{ id }}
            </v-chip>

            <!-- <v-chip class="pl-8 pr-8 ma-2" color="black" outlined>
              <v-icon left>mdi-plus</v-icon>
              Add Citizen Type
            </v-chip> -->
          </div>

          <component :is="getComponent" />
        </div>

        <div class="profile__tabs">
          <div v-for="tab in tabs" :key="tab" class="profile__tab" @click="currentTab = tab">
            <div class="pc-highlight"></div>
            <span class="font-weight-black text-h6 text-subtitle-2-md text-uppercase">{{
              tab
            }}</span>
          </div>
        </div>
      </v-skeleton-loader>
    </div>
  </Loading>
</template>

<style lang="scss">
.profile {
  &__spacer {
    // justify-content: space-between;
    width: 100%;
  }
  &__name {
    font-family: Raleway;
    font-size: 40px;
    font-weight: 800;
  }

  &__mode {
    margin-left: 5px;
    margin-right: 5px;
  }

  &__mode-container {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    margin-top: 50px;
    max-width: 80%;
  }

  &__namepate {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    // height: 300px;
    margin-top: 0px;
    margin-bottom: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    background-color: #4f4f4f;
  }
  &__name {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: visible;
    margin-right: 20%;
    margin-bottom: 15px;
    margin-top: 15px;
    margin-left: 20%;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    // border: 1px solid #828282;
    border-radius: 5px;
    text-align: center;
    padding: 18px;
  }
  &__image {
    // position: absolute;
    // left: 0%;
    // top: -40%;
    // right: 0px;
    // bottom: auto;
    // display: block;
    width: 250px;
    height: 250px;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #4f4f4f;
  }
  &__container {
    display: block;
    max-width: 80%;
    // margin-top: 213px;
    margin-top: 25px;
    margin-bottom: 50px;
    // border: 15px solid #f1f2f2;
    // border: 15px solid #6fba7f;
    border: 15px solid var(--v-secondary-darken1);
    // box-shadow: none;
    // padding-bottom: 125px;
    padding-bottom: 75px;
    border-radius: 50px;

    &.edit {
      border: 15px solid var(--v-error-base);
    }
  }

  &__sub-container {
    // max-width: 80%;
    //     align-items: center !important;
    // justify-content: center !important;
    //     justify-content: center;
  }

  &__tabs {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 6.4px;
  }
  &__tab {
    // width: 25%;
    flex: 0 1 33.33%;
    margin-right: 12.5px;
    margin-left: 12.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.image {
  border-radius: 50%;
  background-image: url('https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg');
  background-position: 0px 0px;
  background-size: auto;
  background-clip: border-box;
}

@media screen and (max-width: 991px) {
  .profile__tab {
    margin-right: 0px;
    margin-left: 0px;
  }
}

@media screen and (max-width: 767px) {
  .profile {
    &__container {
      margin-top: 213px;
    }
    &__name {
      margin-right: 10%;
      margin-left: 10%;
    }
  }
}

@media screen and (max-width: 479px) {
  .heading {
    font-size: 25px;
    line-height: 25px;
    font-weight: 800;
  }
  .profile {
    &__container {
      margin-top: 106.5px;
    }
    &__image {
      top: -20%;
      width: 135px;
      height: 135px;
    }
    &__name {
      margin: 100px 10% 30px;
      font-family: Raleway, sans-serif;
    }
    &__namepate {
      height: auto;
      min-height: 177px;
    }
  }
}
</style>
<script lang="ts">
import { ref, computed, Ref, onMounted, toRefs } from '@vue/composition-api';
import gql from 'graphql-tag';
import { Token } from '@/generated/graphql';
import { useAuthGetters, useDbState } from '@/store';
import LoadingVue from '@/components/Loading.vue';
import Portfolio from './views';

export default {
  name: 'Portfolio',
  components: {
    'my-programs': Portfolio.MyPrograms,
    id: Portfolio.CitizenID,
    balance: Portfolio.Balance,
    payment: Portfolio.Payment,
    referral: Portfolio.Referral,
    Loading: LoadingVue
  },
  setup(_props, { root: { $apolloProvider } }) {
    // Layout Generation
    const tabs = ref(['My Programs', 'ID']);
    const currentTab = ref('My Programs');
    const IDs = ref({
      Employer: 'purple',
      Student: 'green',
      Teacher: 'pink',
      School: 'blue',
      Parent: 'yellow'
    });
    const getComponent = computed(() => {
      let tab = currentTab.value.toLowerCase();
      tab = tab.split(' ').join('-');
      return tab;
    });
    // Data Handling
    const id = useAuthGetters(['getId']).getId;
    const tickets = ref(0);
    const MYTOKENQUERY = gql`
      query myTokensCustomer($id: ObjectId!) {
        tokens(query: { newOwner_id: $id }) {
          customer_id
        }
      }
    `;
    const processQuery = () =>
      $apolloProvider.defaultClient
        .query<{ tokens: Token[] }>({
          query: MYTOKENQUERY,
          variables: { id: id.value }
        })
        .then(({ data: { tokens } }) => {
          console.log(tokens);
          tickets.value = tokens.length;
        });
    // Skeleton Loader
    const loader: Ref<ReturnType<typeof LoadingVue['setup']> | null> = ref(null);

    onMounted(() => {
      loader.value!.process();
    });
    return {
      tabs,
      currentTab,
      getComponent,
      IDs,
      tickets,
      loader,
      processQuery,
      user: useDbState(['user']).user
    };
  }
};
</script>
