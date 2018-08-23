import {Slider as ColorPicker} from 'vue-color';

Nova.booting((Vue, router) => {
    Vue.component('slider-picker', ColorPicker);
    Vue.component('index-color', require('./components/IndexField'));
    Vue.component('detail-color', require('./components/DetailField'));
    Vue.component('form-color', require('./components/FormField'));
})
