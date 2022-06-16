import Vue from 'vue'
import { Style, Button, ScrollNav } from 'cube-ui'

[Button, ScrollNav].forEach(item => {
    Vue.use(item)
})
