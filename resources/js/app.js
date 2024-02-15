import "./bootstrap";
import "../css/app.css";
import "../css/Processo.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import VueScrollTo from "vue-scrollto";
// import AOS from "aos";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const appName = "WebGenie";

createInertiaApp({
    title: (title) => `WebGenie`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueScrollTo)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
