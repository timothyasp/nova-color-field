import {
    Chrome,
    Compact,
    Grayscale,
    Material,
    Photoshop,
    Sketch,
    Slider,
    Swatches,
    Twitter
} from "@ckpack/vue-color";
import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, router, store) => {
    app.component("chrome", Chrome);
    app.component("compact", Compact);
    app.component("grayscale", Grayscale);
    app.component("material", Material);
    app.component("photoshop", Photoshop);
    app.component("sketch", Sketch);
    app.component("slider", Slider);
    app.component("swatches", Swatches);
    app.component("twitter", Twitter);
    app.component("index-color", IndexField);
    app.component("detail-color", DetailField);
    app.component("form-color", FormField);
});
