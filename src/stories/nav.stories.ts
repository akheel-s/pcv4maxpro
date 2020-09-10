import VueCompositionAPI from '@vue/composition-api';
import Nav from '@/views/ManageProgram/components/Nav.vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import Vue from 'vue';

Vue.use(VueCompositionAPI);

export default {
  component: Nav,
  title: 'Manage Program Sidebar',
  decorators: [withKnobs]
};

export const asDefault = () => ({
  components: {
    Nav
  },
  template: '<Nav :startDate="startDate" :endDate="endDate"></Nav>',
  props: {
    startDate: {
      default: text('startDate', 'DAY, MON 1'),
       
    },
    endDate: {
      default: text('endDate', 'DAY, MON 1'),
       
    }
  }
});
