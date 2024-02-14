<template>
    <div id="top">
        <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mb-2 fixed z-10 bottom-5 right-5 animate-bounce inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style="background-color: #128c7e"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
            </svg>
        </button>

        <a
            v-show="isButtonVisible"
            data-te-ripple-init
            data-te-ripple-color="light"
            v-scroll-to="'#top'"
            class="fixed cursor-pointer bg-opacity-30 bottom-5 left-5 z-10 border-2 border-neutral-700 animate-bounce rounded-full bg-neutral-700 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-neurtral-700 hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        >
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="h-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path
                    fill="currentColor"
                    d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
            </svg>
        </a>

        <section class="bg-slate-100 overflow-hidden">
            <HeroSection />
        </section>

        <section class="bg-slate-100">
            <div
                class="w-full h-40"
                style="background: linear-gradient(to bottom, #7ba5ea, rgb(241 245 249))"
            >
                &nbsp;
            </div>
            <About />
        </section>

        <section class="bg-slate-100">
            <div
                class="w-full h-40"
                style="background: linear-gradient(to bottom, rgb(241 245 249), rgb(241 245 249))"
            >
                &nbsp;
            </div>
            <Processo />
        </section>

        <section v-if="!isMobile" class="bg-slate-100">
            <div
                class="w-full h-40"
                style="background: linear-gradient(to bottom, rgb(241 245 249), #f6ff7d)"
            >
                &nbsp;
            </div>
            <Servicos />
        </section>

        <section v-if="isMobile" class="bg-slate-100">
            <div
                class="w-full h-40"
                style="background: linear-gradient(to bottom, rgb(241 245 249), #f6ff7d)"
            >
                &nbsp;
            </div>
            <ServicosMobile />
        </section>

        <section class="bg-slate-100">
            <div
                class="w-full h-40"
                style="background: linear-gradient(to bottom, #f6ff7d, rgb(241 245 249))"
            >
                &nbsp;
            </div>
            <Projects />
        </section>
    </div>
</template>
<script>
import HeroSection from "@/Components/WebGenieComponents/HeroSection.vue";
import About from "@/Components/WebGenieComponents/About.vue";
import Servicos from "@/Components/WebGenieComponents/Servicos.vue";
import Processo from "@/Components/WebGenieComponents/Processo.vue";
import Projects from "@/Components/WebGenieComponents/Projects.vue";
import ServicosMobile from "@/Components/WebGenieComponents/ServicosMobile.vue";

export default {
    data() {
        return {
            isButtonVisible: false,
            isMobile: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.scrollFunction);

        if (window.innerWidth <= 768) {
            this.isMobile = true;
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrollFunction);
    },
    methods: {
        scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                this.isButtonVisible = true;
            } else {
                this.isButtonVisible = false;
            }
        },
    },
    components: {
        HeroSection,
        About,
        Servicos,
        Processo,
        Projects,
        ServicosMobile,
    },
};
</script>
