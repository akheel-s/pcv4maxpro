import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#4F4F4F', // primary
        secondary: '#FFFFFF', // white
        accent: '#BDBDBD', // grey
        error: '#EA6763', // red
        info: '#3C9CCC', // blue
        success: '#6EBA7F', // green
        warning: '#FDD35A', // yellow
        purple: '#AE90B0'
      }
    }
  }
});
