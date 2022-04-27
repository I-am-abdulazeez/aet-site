import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi' || 'fa',
  },
  theme: {
    themes: {
      light: {
        primary: '#FA7414',
        secondary: '#020740',
        accent: '#F5C3A0',
        success: '#3cd1c2',
        error: '#f83e70',
      },
    },
  },
  //   vuetify: {
  //     customVariables: ['~/assets/variables.scss'], // need treeShake
  //     treeShake: true,
  //   },
});
