<template>
  <!--  TODO: make the inputs into actual components -->
  <Loading ref="loader" v-slot="{ loading }" :callback="processQuery">
    <div class="profile__wrapper">
      <v-skeleton-loader
        :loading="loading || !user"
        type="heading, list-item-two-line, list-item-two-line, list-item-three-line"
      >
        <div class="profile__mode-container pc-container">
          <!-- <v-btn class="profile__mode" depressed outlined color="grey" small>View</v-btn> -->
          <!-- <v-btn class="profile__mode" depressed outlined color="grey" small>Public</v-btn>
          <v-btn
            class="profile__mode"
            depressed
            color="grey"
            dark
            small
            @click="currentTab = 'my-programs'"
            >Manage</v-btn
          > -->
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
          <div v-if="user" class="profile__sub-container text-center mt-12">
            <div>
              <profile :size="150" editable />
              <span class="profile__name">{{ user.firstName }} {{ user.lastName }}</span>
            </div>

            <div>
              <v-chip
                class="pl-8 pr-8 ma-2"
                color="black"
                outlined
                @click="currentTab = 'my programs'"
              >
                <v-icon left>mdi-server-plus</v-icon>
                Programs
              </v-chip>

              <v-chip
                class="pl-8 pr-8 ma-2"
                color="black"
                outlined
                @click="currentTab = 'settings'"
              >
                <v-icon left>mdi-wrench</v-icon>
                Settings
              </v-chip>

              <v-chip
                v-for="id in user.userTypes"
                :key="id"
                class="pl-8 pr-8 ma-2"
                dark
                :color="IDs[id]"
                @click="(currentTab = 'id'), (currentProfile = `${id} id`)"
              >
                <v-icon left>mdi-account-outline</v-icon>
                {{ id }}
              </v-chip>
            </div>
          </div>

          <component :is="getComponent" :exp-component="getProfile" />
        </div>
      </v-skeleton-loader>
    </div>
  </Loading>
</template>

<style lang="scss"></style>
<script lang="ts">
import { ref, computed, Ref, onMounted } from '@vue/composition-api';
import gql from 'graphql-tag';
import { Token } from '@/generated/graphql';
import { useAuthGetters, useDbState } from '@/store';
import LoadingVue from '@/components/Loading.vue';
import Profile from '@/components/Profile.vue';
import Portfolio from './views';

export default {
  name: 'Portfolio',
  components: {
    'my-programs': Portfolio.MyPrograms,
    id: Portfolio.CitizenID,
    balance: Portfolio.Balance,
    payment: Portfolio.Payment,
    referral: Portfolio.Referral,
    Loading: LoadingVue,
    settings: Portfolio.Settings,
    Profile
  },
  setup(_props, { root: { $apolloProvider } }) {
    // Layout Generation
    const { user } = useDbState(['user']);
    const currentTab: Ref<string> = ref('My Programs');
    const currentProfile: Ref<string> = ref('');
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
    const getProfile = computed(() => {
      let profile = currentProfile.value.toLowerCase();
      profile = profile.split(' ').join('-');
      return profile;
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
          tickets.value = tokens.length;
        });
    // File Storage

    // Skeleton Loader
    const loader: Ref<ReturnType<typeof LoadingVue['setup']> | null> = ref(null);

    onMounted(() => {
      const types = user.value?.userTypes;
      if (types?.includes('School') || types?.includes('Parent')) currentTab.value = 'payment';
      else if (types?.includes('Teacher')) currentTab.value = 'invite';
      else currentTab.value = 'my programs';
      loader.value!.process();
    });
    return {
      currentTab,
      currentProfile,
      getComponent,
      getProfile,
      IDs,
      tickets,
      loader,
      processQuery,
      user
    };
  }
};
</script>
