import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { OrangeTheme } from '~/theme/LightTheme';
import {
  DarkOrangeTheme,
} from '~/theme/DarkTheme';
import 'vuetify/styles';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'OrangeTheme',
    themes: {
      OrangeTheme,
      DarkOrangeTheme,
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    }
  }
});
