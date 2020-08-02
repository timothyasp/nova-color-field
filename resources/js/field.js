import { Chrome, Compact, Grayscale, Material, Photoshop, Sketch, Slider, Swatches } from 'vue-color'
import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((Vue, router) => {
    Vue.component('chrome-picker', Chrome)
    Vue.component('compact-picker', Compact)
    Vue.component('grayscale-picker', Grayscale)
    Vue.component('material-picker', Material)
    Vue.component('photoshop-picker', Photoshop)
    Vue.component('sketch-picker', Sketch)
    Vue.component('slider-picker', Slider)
    Vue.component('swatches-picker', Swatches)
    Vue.component('index-color', IndexField)
    Vue.component('detail-color', DetailField)
    Vue.component('form-color', FormField)
})
