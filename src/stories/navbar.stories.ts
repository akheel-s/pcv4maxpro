import Navbar from '@/components/Navbar.vue';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

export default {
  component: Navbar,
  title: 'Navbar',
  decorators: [withKnobs]
};
export const asDefault = () => ({
  components: { Navbar },
  template: '<Navbar></Navbar>'
});

export const whileLoading = () => ({
  components: { Navbar },
  template: '<Navbar :loading="loading"></Navbar>',
  props: {
    loading: {
      default: boolean('loading', true)
    }
  }
});
const mockUser = {
  _accessToken: 'testToken',
  _id: 'secretId',
  _profile: {
    email: 'poopmonster@flex.com'
  }
};
export const loggedIn = () => ({
  components: { Navbar },
  props: {
    user: {
      default: object('mockUser', mockUser)
    }
  },
  template: '<Navbar :user="user"></Navbar>'
});
