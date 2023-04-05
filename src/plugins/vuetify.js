import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            HwRequired: {
                primary: '#384ffe',
                background: '#ffffff',
                other: '#787c9d'
            }
        }
    }
});
