import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { mdi, aliases } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
