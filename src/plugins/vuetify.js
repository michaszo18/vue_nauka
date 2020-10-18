import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#6dc66b',
                secondary: '#ee7b0c',
                anchor: '#8c9eff',
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})