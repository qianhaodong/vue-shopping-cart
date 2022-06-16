import Vue from 'vue'
import { Style, Button, ScrollNav, Dialog } from 'cube-ui'

[Button, ScrollNav, Dialog].forEach(item => {
    Vue.use(item)
})
