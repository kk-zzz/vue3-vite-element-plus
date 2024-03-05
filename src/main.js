import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import svgIconPlugin from '@/plugins/svg-icon-plugin'

const app = createApp(App)

//* use SvgIcon
app.use(svgIconPlugin)

app.mount('#app')
