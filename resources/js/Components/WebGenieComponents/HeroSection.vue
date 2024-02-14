<template>
    <div>
        <div class="container mx-auto select-none">
            <div class="absolute w-full h-screen left-0 md:mt-16">
                <img
                    draggable="false"
                    src="https://i.postimg.cc/s217Kyq1/1fb13409-4429-480b-80b8-c6b6f1546eae.png"
                    class="opacity-5 md:mx-auto"
                    alt=""
                />
            </div>

            <NavBar />

            <div
                class="flex flex-col items-center md:justify-center mt-20 pb-20 md:mb-0 md:mt-0 md:h-screen"
                data-aos="zoom-in"
            >
                <h1 class="text-5xl font-bold text-gray-900">WebGenie</h1>
                <p
                    class="text-gray-700 text-center mt-4 max-w-2xl text-lg font-light leading-relaxed tracking-wide"
                >
                    Onde a magia da tecnologia encontra soluções digitais sob
                    medida para transformar seu negócio online em uma Obra-Prima
                </p>
                <div class="mt-20">
                    Deslizar para Baixo
                    <svg
                        class="animate-bounce w-6 h-6 mx-auto mt-4 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        v-scroll-to="'#about'"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
            <div class="relative">
                <svg
                    class="absolute bottom-0 w-full h-64 md:scale-100 scale-150"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 900"
                    preserveAspectRatio="xMidYMid meet"
                    id="waves"
                >
                    <defs>
                        <linearGradient id="bg" x2="0%" y2="100%">
                            <stop
                                offset="0%"
                                style="stop-color: rgba(53, 127, 242, 0.6)"
                            ></stop>
                            <stop
                                offset="100%"
                                style="stop-color: rgba(38, 89, 190, 0.06)"
                            ></stop>
                        </linearGradient>
                        <path
                            id="wave"
                            fill="url(#bg)"
                            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                        />
                    </defs>
                    <g>
                        <use xlink:href="#wave" opacity=".3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlink:href="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                        <use xlink:href="#wave" opacty=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="4s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite"
                            />
                        </use>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "@/Components/WebGenieComponents/NavBar.vue";

export default {
    mounted() {
        AOS.init();
    },
    components: {
        NavBar,
    },
};
</script>

<style scoped>
#waves {
    height: auto;
    transform-origin: bottom;
    box-sizing: border-box;
    display: block;
    pointer-events: none;
}
</style>
